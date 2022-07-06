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
import Specification from '../../Components/Specifications/Specifications';
import Address from '../../Components/Address/Address';
import Carousal from '../../Components/Carousal/Carousal';


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
            <Typography textAlign="center" fontFamily={'Righteous'} fontSize={'44px'} color={'#ddd'} pt={{ xs: 0.5, sm: 2 }}>Project Overview</Typography>
            <div className="bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Carousal />
                    {(typeof (projects["Projects"][siteURLName]) !== 'undefined')
                        ?
                        <div className="max-w-2xl mx-auto pt-16 pb-3 sm:pt-24 sm:pb-5 lg:pt-32 lg:pb-7 lg:max-w-none">
                            <h2 className="text-5xl font-extrabold text-gray-900 text-center"> Site Images</h2>
                        </div>
                        :
                        <div>
                        </div>
                    }
                    {(typeof (projects["Projects"][siteURLName]) !== 'undefined')
                        ?
                        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

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
                        :
                        <div>
                        </div>
                    }
                    <Specification />
                    <Address />
                    {(typeof (videos["videos"][siteURLName]) !== 'undefined')
                        ?
                        <div className="max-w-2xl mx-auto pt-16 pb-3 sm:pt-24 sm:pb-5 lg:pt-32 lg:pb-7 lg:max-w-none">
                            <h2 className="text-5xl font-extrabold text-gray-900 text-center"> Site View</h2>
                        </div>
                        :
                        <div>
                        </div>
                    }
                    {(typeof (videos["videos"][siteURLName]) !== 'undefined')
                        ?
                        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {videos["videos"][siteURLName].map((cardVideo, index) => (
                                <div key={cardVideo}>
                                    <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                                        <video width="750" height="500" controls >
                                            <source
                                                src={cardVideo}
                                                alt='Video View is not compatible with this browser'
                                            />
                                        </video>
                                    </div>
                                </div>
                            ))}
                        </div>
                        :
                        <div>
                        </div>
                    }
                    {(typeof (pdf["pdf"][siteURLName]) !== 'undefined' || typeof (brocher["brocher"][siteURLName]) !== 'undefined' || typeof (videos["videos"][siteURLName]) !== 'undefined')
                        ?
                        <div className="max-w-2xl mx-auto pt-16 pb-3 sm:pt-24 sm:pb-5 lg:pt-32 lg:pb-7 lg:max-w-none">
                            <h2 className="text-5xl font-extrabold text-gray-900 text-center">Brochure</h2>
                        </div>
                        :
                        <div>
                        </div>
                    }
                    {(typeof (pdf["pdf"][siteURLName]) !== 'undefined')
                        ?
                        <div className="max-w-2xl mx-auto pb-3  sm:pb-5  lg:pb-7 lg:max-w-none">
                            <div>
                                <object data={pdf["pdf"][siteURLName]} type="application/pdf" width="100%" height="700px">
                                    <p>Pdf View is not compatible with this browser</p>
                                </object>
                            </div>
                        </div>
                        :
                        <div>
                        </div>
                    }
                    {(typeof (brocher["brocher"][siteURLName]) !== 'undefined')
                        ?
                        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
                            {brocher["brocher"][siteURLName].map((cardImg, index) => (
                                <div key={cardImg}>
                                    <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                                        <img
                                            src={cardImg}
                                            className=" w-full object-center hover:object-scale-down"
                                            alt='Image View is not compatible with this browser'
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        :
                        <div>
                        </div>
                    }
                </div>
            </div>
        </>
    );
}