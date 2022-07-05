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
import { Specifications } from '../../store/specifications.js'


const cards = [kamraniKaizenTirunelveli, basavanagudi, greenEnclave, bangloreTelephoneLayout, chennaiRoopasResidency, gangaNagarAslamsResidence, hbr, hbr1, lingarajpuram, loydsroadbanglore, pearlNestvadapalinichennai, kamanahali, yeshwanthpur, mosqueroadbengalore, interior];

const bg = [
    'radial-gradient(#CEE26B, #5CB270)',
]


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
    console.log("Specifications[siteURLName]", Specifications[siteURLName]);

    return (
        <>
            <div className="bg-gray-100 pb-7">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <section id="section1" class="topOff">
                        <div class="container">
                            <div class="main-container">
                                <div class="heading">
                                    <h1 class="text-center text-cyan-800 text-4xl pt-12">Project Specifications</h1>
                                    <p class="text-center text-cyan-500 text-2xl pt-1 font-extralight">Bringing it all together!</p>
                                </div>

                                {(typeof (Specifications[siteURLName]) !== 'undefined')
                                    ?
                                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">

                                        {Specifications[siteURLName].map((object, index) => (

                                            <div class={`card-${index % 5} rounded-lg p-5`}>
                                                <p class="card__title text-cyan-900 text-xl pb-3">
                                                    <a class="card__link" href="#">{object["title"]}</a>
                                                </p>
                                                <h2 class="card__description text-white">{object["description"]} </h2>
                                            </div>
                                        ))}

                                    </div>
                                    :
                                    <div>
                                    </div>
                                }
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}