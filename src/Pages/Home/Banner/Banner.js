import React from 'react';
import chair from  '../../../images/chair.png';
import bg from  '../../../images/bg.png';
import { Box } from '@mui/system';
import { Button, Container, Grid, Typography } from '@mui/material';

const bannerBg = {
    background: `url(${bg})`
}

const verticalCenter = {
    height: 400,
    display: 'flex',
    alignItems: 'center'
}
const Banner = () => {
    return (
        <Box style={bannerBg} sx={{ flexGrow: 1 }}>
            <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{...verticalCenter, textAlign: 'left'}}>
                    <Box>
                    <Typography variant="h4" sx={{mb:2}}>
                        Your New Smile <br/>
                        Start Here
                    </Typography>
                    <Typography variant="h6" sx={{fontSize: 14, color: 'gray', fontWeight: 400, mb:2}}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, maxime et tempora blanditiis facilis reiciendis enim tempore culpa aspernatur ipsam?
                    </Typography>
                    <Button variant="contained">Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{width: '350px'}} src={chair} alt="" />
                </Grid>
            </Grid>
            </Container>
        </Box>
    );
};

export default Banner;