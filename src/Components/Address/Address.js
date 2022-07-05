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
import mapMarker from '../../img/icons/map-marker.png'
import phone from '../../img/icons/phone.png'
import email from '../../img/icons/email.png'

import { projects } from '../../store/projects.js'
import { pdf } from '../../store/pdf.js'
import { brocher } from '../../store/brochers.js'
import { videos } from '../../store/videos.js'
import { Specifications } from '../../store/specifications.js'
import { address } from '../../store/address.js'


const cards = [kamraniKaizenTirunelveli, basavanagudi, greenEnclave, bangloreTelephoneLayout, chennaiRoopasResidency, gangaNagarAslamsResidence, hbr, hbr1, lingarajpuram, loydsroadbanglore, pearlNestvadapalinichennai, kamanahali, yeshwanthpur, mosqueroadbengalore, interior];

function getURLUsername(siteName) {
    const n = siteName.lastIndexOf('/');
    return (n != -1) ? siteName.substring(n + 1) : siteName;
}
function getUsername(siteName) {
    const n = siteName.lastIndexOf('/');
    return (n != -1) ? siteName.substring(n + 1).replace("%20", " ") : siteName;
}

export default function Address() {
    // const params = useParams();
    // var siteName = params.username;
    // console.log("this.props.userID", getUsername(window.location.pathname));
    var siteName = getUsername(window.location.pathname);
    var siteURLName = getURLUsername(window.location.pathname);
    // console.log("address[siteURLName]", address[siteURLName]);

    return (
        <>
            {(typeof (address[siteURLName]) !== 'undefined')
                ?
                <section id="section1">
                    <div class="card-2 rounded-2xl p-5 m-2">
                        {(typeof (address[siteURLName]) !== 'undefined')
                            ?
                            <section id="section7" class="card-2 rounded-lg p-2">
                                <div class="mt-6 flex flex-wrap flex-row justify-center">

                                    <div class="p-5 text-center">
                                        <h2 className='text-5xl font-extrabold text-cyan-900'>Momin Elan's Location</h2>
                                        <p className='text-1xl font-bold text-cyan-800'>Situated right in the heart of Bengalore.
                                        </p>
                                        <ul className='text-white font-semibold text-left'>
                                            <li class="p-4">
                                                <div class="flex flex-wrap">
                                                    <div class="pr-3">
                                                        <img src={mapMarker} />
                                                    </div>
                                                    <div class="col-md-10 col-sm-10 col-xs-10 lineHeight">
                                                        {address[siteURLName]["street"]}<br /> {address[siteURLName]["city"]}
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="p-4">
                                                <div class="flex flex-wrap">
                                                    <div class="pr-3">
                                                        <img src={phone} />
                                                    </div>
                                                    <div class="col-md-10 col-sm-10 col-xs-10 lineHeight">
                                                        +91 98450 41161<br /> +91 99453 16717<br /> +91 90943 64248
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="p-4">
                                                <div class="flex flex-wrap">
                                                    <div class="pr-3">
                                                        <img src={email} />
                                                    </div>
                                                    <div class="col-md-10 col-sm-10 col-xs-10 lineHeight">
                                                        momindevelopers@gmail.com
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <iframe
                                        src={address[siteURLName]["src"]}
                                        width="100%" height="450"
                                        allowFullScreen="" aria-hidden="false" tabIndex="0" loading="lazy"></iframe>

                                </div>
                            </section>
                            :
                            <div>
                            </div>
                        }
                    </div>
                </section>
                :
                <div>
                </div>
            }
        </>
    );
}