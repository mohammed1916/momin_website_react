import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { carousal } from '../../store/carousal.js'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function getURLUsername(siteName) {
    const n = siteName.lastIndexOf('/');
    return (n != -1) ? siteName.substring(n + 1) : siteName;
}

export default function Carousal() {
    var siteURLName = getURLUsername(window.location.pathname);
    // console.log("carousal[siteURLName]", carousal[siteURLName]);

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    return (
        <>
            {(typeof (carousal[siteURLName]) !== 'undefined')
                ?
                <section className="flex justify-center p-6">
                    <Box sx={{ flexGrow: 1 }}>

                        <AutoPlaySwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={activeStep}
                            onChangeIndex={handleStepChange}
                            enableMouseEvents
                        >
                            {carousal[siteURLName].map((step, index) => (
                                <div key={step.label}>
                                    {Math.abs(activeStep - index) <= 2 ? (
                                        <Box
                                            className='md:h-96 lg:h-fit'
                                            component="img"
                                            sx={{
                                                display: 'block',

                                                overflow: 'hidden',
                                                width: '100%',
                                            }}
                                            src={step.imgPath}
                                            alt={step.label}
                                        />
                                    ) : null}
                                </div>
                            ))}
                        </AutoPlaySwipeableViews>

                    </Box>
                </section>
                :
                <div>
                </div>
            }
        </>
    );
}