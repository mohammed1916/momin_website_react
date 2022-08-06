import React from 'react';
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles';
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

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    return (
        <>
            {(typeof (carousal[siteURLName]) !== 'undefined')
                ?
                <section className="flex justify-center p-6">
                    {carousal[siteURLName].map((step, index) => (
                        <div key={step.label}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <Box
                                    className='h-fit'
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
                </section>
                :
                <div>
                </div>
            }
        </>
    );
}