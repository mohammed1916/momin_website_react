import React from 'react';
import { carousal, elevationPlan, elevationImg } from '../../store/carousal.js'
import CarousalComponent from './CarousalComponent.js';


function getURLUsername(siteName) {
    const n = siteName.lastIndexOf('/');
    return (n != -1) ? siteName.substring(n + 1) : siteName;
}

export default function Carousal() {
    var siteURLName = getURLUsername(window.location.pathname);
    var data = carousal[siteURLName];
    var data1 = elevationPlan[siteURLName];
    var data2 = elevationImg[siteURLName];
    return (
        <>
            <img src={data2[0].imgPath} />
            <CarousalComponent data={data} maxWidth={1080} />
            <CarousalComponent data={data1} maxWidth={591} />
        </>
    );
}