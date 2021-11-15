import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Container, Typography } from '@mui/material';

const appointmentBanner = {
    background : `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.8)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 100
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img 
                    style={{width: 400, marginTop: '-110px', marginBottom: '-4px'}}
                    src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex', 
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    textAlign: 'left'
                    }}>
                    <Box>
                        <Typography variant="h6" style={{color: '#5CE7ED'}} sx={{mb:3}}>Appointment
                        </Typography>
                        <Typography variant="h4" style={{color: 'white'}} sx={{mb:1}}>
                            Make an appointment Today
                        </Typography>
                        <Typography variant="h6" style={{color: 'white', fontSize: '14px', fontWeight: 300}} sx={{mb:2}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae velit quaerat molestias consequatur iusto quas sit voluptate placeat fuga veritatis!
                        </Typography>
                        <Button variant="contained">Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
            </Container>
      </Box>
    );
};

export default AppointmentBanner;