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
    console.log("carousal[siteURLName]", carousal[siteURLName]);
    const images = [
        {
            label: 'Momin Developers',
            imgPath:
                carousal[siteURLName][0],
        },
        {
            label: 'Momin Elan',
            imgPath:
                carousal[siteURLName][1],
        },
    ];

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

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
                    {/* <div class="main-slider owl-theme owl-carousel">
                        <div class="single-slide item" style={{ backgroundImage: "url(../../img/decoration/decoration1.png)" }}>
                            <div class="single-slide item" style={{ backgroundImage: "url(../../img/decoration/decoration2.png)" }}>
                                <div class="slider-content-area">
                                    <div class="row">
                                        <div class="slide-content-wrapper text-center">
                                            <div class="slide-content">
                                                <h3>Momin Elan</h3>
                                                <h2>A project by Momin Developers</h2>
                                                <p>Shivajinagar, Bangaluru</p>
                                                <a class="default-btn" href="/site/Momin%20Elan">Learn more</a>
                                                <img src="../../img/new/icon.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <Box sx={{ flexGrow: 1 }}>
                        <Paper
                            square
                            elevation={0}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                height: 50,
                                pl: 2,
                                bgcolor: 'background.default',
                            }}
                        >

                            <Typography ><div className='text-2xl text-cyan-600 font-extrabold'>{images[activeStep].label}</div></Typography>

                        </Paper>
                        <AutoPlaySwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={activeStep}
                            onChangeIndex={handleStepChange}
                            enableMouseEvents
                        >
                            {images.map((step, index) => (
                                <div key={step.label}>
                                    {Math.abs(activeStep - index) <= 2 ? (
                                        <Box
                                            component="img"
                                            sx={{
                                                height: 850,
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
                        <MobileStepper
                            steps={maxSteps}
                            position="static"
                            activeStep={activeStep}
                            nextButton={
                                <Button
                                    size="small"
                                    onClick={handleNext}
                                    disabled={activeStep === maxSteps - 1}
                                >
                                    Next
                                    {theme.direction === 'rtl' ? (
                                        <KeyboardArrowLeft />
                                    ) : (
                                        <KeyboardArrowRight />
                                    )}
                                </Button>
                            }
                            backButton={
                                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                    {theme.direction === 'rtl' ? (
                                        <KeyboardArrowRight />
                                    ) : (
                                        <KeyboardArrowLeft />
                                    )}
                                    Back
                                </Button>
                            }
                        />
                    </Box>
                </section>
                :
                <div>
                </div>
            }
        </>
    );
}