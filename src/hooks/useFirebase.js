import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../useFirebase/firebase.init";


initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const redirect_uri = location.state?.from || '/';
            history.push(redirect_uri);
            const user = result.user;
            setUser(result.user);
            saveGoogleUser(user.email, user.displayName);
            setAuthError('');
        })
        .catch(error =>{
            setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
    }

    const registerUser = (email, password, name, history) =>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            setAuthError('');
            const newUser = {email, displayName: name};
            setUser(newUser);
            saveUser(email, name);
            //Send name to firebase after Creation
            updateProfile(auth.currentUser, {
                displayName: name
              })
              .then(() => {
              })
              .catch((error) => {
              });

            history.push('/');
        })
        .catch(error =>{
            setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const redirect_uri = location.state?.from || '/';
            history.push(redirect_uri);
            setUser(result.user);
            setAuthError('');
        })
        .catch(error =>{
            setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
    }
    
    
    const logOut = () =>{
        setIsLoading(true);
        signOut(auth)
        .then(() => {
            setUser('');
        })
        .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName) => {
        const user = {email, displayName};
        fetch('https://sleepy-ravine-12824.herokuapp.com/users', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(user)
        })
        .then()
    }

    const saveGoogleUser = (email, displayName) => {
        const user = {email, displayName};
        fetch('https://sleepy-ravine-12824.herokuapp.com/users', {
          method: 'PUT',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(user)
        })
        .then()
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
                getIdToken(user)
                .then(getIdToken => {
                    setToken(getIdToken);
                })
            }
            else{
                setUser({})
            }
            setIsLoading(false);
        })
        return () => unsubscribe;
    }, [auth])

    useEffect(() => {
        fetch(`https://sleepy-ravine-12824.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    }, [user.email])
    return{
        registerUser,
        loginUser,
        isLoading,
        token,
        user,
        admin,
        authError,
        signInUsingGoogle,
        logOut
    }

}
export default useFirebase;