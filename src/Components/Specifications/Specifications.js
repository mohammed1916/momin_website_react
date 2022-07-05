import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box'
import { useParams } from "react-router-dom";

import kamraniKaizenTirunelveli from '../../img/projects/kamraniKaizenTirunelveli/2.jpeg'
import basavanagudi from '../../img/projects/basavanagudi/1.jpg'
import greenEnclave from '../../img/projects/greenEnclave/1.JPG'
import bangloreTelephoneLayout from '../../img/projects/bangloreTelephoneLayout/1.jpeg'
import chennaiRoopasResidency from '../../img/projects/chennaiRoopasResidency/1.jpeg'
import gangaNagarAslamsResidence from '../../img/projects/gangaNagarAslamsResidence/1.jpeg'
import hbr from '../../img/projects/hbr/3.jpg'
import hbr1 from '../../img/projects/hbr1/6.jpg'
import lingarajpuram from '../../img/projects/lingarajpuram/6.jpg'
import loydsroadbanglore from '../../img/projects/loydsroadbanglore/4.jpeg'
import pearlNestvadapalinichennai from '../../img/projects/pearlNestvadapalinichennai/2.jpeg'
import kamanahali from '../../img/projects/kamanahali/4.jpg'
import yeshwanthpur from '../../img/projects/yeshwanthpur/3.jpeg'
import mosqueroadbengalore from '../../img/projects/mosqueroadbengalore/1.jpeg'
import interior from '../../img/projects/interior/9.jpeg'

import { projects } from '../../store/projects.js'
import { pdf } from '../../store/pdf.js'
import { brocher } from '../../store/brochers.js'
import { videos } from '../../store/videos.js'


const cards = [kamraniKaizenTirunelveli, basavanagudi, greenEnclave, bangloreTelephoneLayout, chennaiRoopasResidency, gangaNagarAslamsResidence, hbr, hbr1, lingarajpuram, loydsroadbanglore, pearlNestvadapalinichennai, kamanahali, yeshwanthpur, mosqueroadbengalore, interior];


function getURLUsername(siteName) {
    const n = siteName.lastIndexOf('/');
    return (n != -1) ? siteName.substring(n + 1) : siteName;
}
function getUsername(siteName) {
    const n = siteName.lastIndexOf('/');
    return (n != -1) ? siteName.substring(n + 1).replace("%20", " ") : siteName;
}

export default function Specification() {
    // const params = useParams();
    // var siteName = params.username;
    // console.log("this.props.userID", getUsername(window.location.pathname));
    var siteName = getUsername(window.location.pathname);
    var siteURLName = getURLUsername(window.location.pathname);
    console.log("siteURLName", getUsername(siteURLName));

    return (
        <>
            <div className="bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <section id="section1" class="topOff">
                        <div class="container">
                            <div class="main-container">
                                <div class="heading">
                                    <h1 class="text-center text-cyan-800 text-4xl pt-12">Project Specifications</h1>
                                    <p class="text-center text-cyan-500 text-2xl pt-1 font-extralight">Bringing it all together!</p>
                                </div>
                                <div class="flex flex-wrap justify-items-stretch justify-center pt-8">
                                    <div class="card card-1">
                                        <div class="card__icon">
                                        </div>
                                        <h2 class="card__description">RCC framed structure with columns and beams. Walls of concrete
                                            solid blocks plastered on both sides.</h2>
                                        <p class="card__title">
                                            <a class="card__link" href="#">Structure</a>
                                        </p>
                                    </div>
                                    <div class="card card-2">
                                        <div class="card__icon">
                                        </div>
                                        <h2 class="card__description">Lobby, stair case and lift area will be provided with granite.
                                            Living area and bedrooms will be privided with vetrified flooring. Antiskid ceramic tiles in
                                            toilets.</h2>
                                        <p class="card__title">
                                            <a class="card__link" href="#">Flooring</a>
                                        </p>
                                    </div>
                                    <div class="card card-3">
                                        <div class="card__icon">
                                        </div>
                                        <h2 class="card__description">All doors will be flush doors. Main door will be solid panelled
                                            teak wood or equivalent.</h2>
                                        <p class="card__title">
                                            <a class="card__link" href="#">Doors</a>
                                        </p>
                                    </div>
                                    <div class="card card-4">
                                        <div class="card__icon">
                                        </div>
                                        <h2 class="card__description">High quality powder coated aluminium windows with MS grills.</h2>
                                        <p class="card__title">
                                            <a class="card__link" href="#">Windows</a>
                                        </p>
                                    </div>
                                    <div class="card card-5">
                                        <div class="card__icon">
                                        </div>
                                        <h2 class="card__description">Borewell alongwith Corporatoin water.</h2>
                                        <p class="card__title">
                                            <a class="card__link" href="#">Water Supply</a>
                                        </p>
                                    </div>
                                    <div class="card card-1">
                                        <div class="card__icon">
                                        </div>
                                        <h2 class="card__description">Diesel Generator will be provided for lift and common areas only.
                                        </h2>
                                        <p class="card__title">
                                            <a class="card__link" href="#">Power Backup</a>
                                        </p>
                                    </div>
                                    <div class="card card-2">
                                        <div class="card__icon">
                                        </div>
                                        <h2 class="card__description">Modular Swithches, Anchor make or equivalent will be provided.
                                        </h2>
                                        <p class="card__title">
                                            <a class="card__link" href="#">Electrical</a>
                                        </p>
                                    </div>
                                    <div class="card card-3">
                                        <div class="card__icon">
                                        </div>
                                        <h2 class="card__description">All internal walls will be painted with emulsion. All external
                                            walls will be painted with ACE.</h2>
                                        <p class="card__title">
                                            <a class="card__link" href="#">Wall and External Finishes</a>
                                        </p>
                                    </div>
                                    <div class="card card-4">
                                        <div class="card__icon">
                                        </div>
                                        <h2 class="card__description">2 feet dadooing above 20mm thick granite counter with edge polish.
                                            Provision for water purifier.</h2>
                                        <p class="card__title">
                                            <a class="card__link" href="#">Kitchen</a>
                                        </p>
                                    </div>
                                    <div class="card card-5">
                                        <div class="card__icon">
                                        </div>
                                        <h2 class="card__description">Ceramic tiles upto 7 feet height, Cp fittings, sanityware of
                                            Parryware/ equivalent.</h2>
                                        <p class="card__title">
                                            <a class="card__link" href="#">Bathroom</a>
                                        </p>
                                    </div>
                                    <div class="card card-1">
                                        <div class="card__icon">
                                        </div>
                                        <h2 class="card__description">One fully automatic modern lift of six passengers capacity.</h2>
                                        <p class="card__title">
                                            <a class="card__link" href="#">Lift</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}