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

import { projects } from '../../projects.js'


const cards = [kamraniKaizenTirunelveli, basavanagudi, greenEnclave, bangloreTelephoneLayout, chennaiRoopasResidency, gangaNagarAslamsResidence, hbr, hbr1, lingarajpuram, loydsroadbanglore, pearlNestvadapalinichennai, kamanahali, yeshwanthpur, mosqueroadbengalore, interior];


function getURLUsername(siteName) {
    const n = siteName.lastIndexOf('/');
    return (n != -1) ? siteName.substring(n + 1) : siteName;
}
function getUsername(siteName) {
    const n = siteName.lastIndexOf('/');
    return (n != -1) ? siteName.substring(n + 1).replace("%20", " ") : siteName;
}

export default function Site() {
    // const params = useParams();
    // var siteName = params.username;
    // console.log("this.props.userID", getUsername(window.location.pathname));
    var siteName = getUsername(window.location.pathname);
    var siteURLName = getURLUsername(window.location.pathname);
    console.log("siteURLName", getUsername(siteURLName));

    return (
        <>
            <Typography textAlign="center" fontFamily={'Righteous'} fontSize={'34px'} color={'orange'} pt={{ xs: 0.5, sm: 1 }}>{siteName}</Typography>
            <Typography textAlign="center" fontFamily={'Righteous'} fontSize={'44px'} color={'#ddd'} pt={{ xs: 0.5, sm: 2 }}>Completed Project</Typography>
            <div className="bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
                        <h2 className="text-5xl font-extrabold text-gray-900 text-center">Site Images</h2>

                        <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                            {projects["Projects"][siteURLName].map((cardImg, index) => (
                                <div key={cardImg}>
                                    <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                                        <img
                                            src={cardImg}
                                            className=" w-full object-center hover:object-scale-down"
                                        />
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}