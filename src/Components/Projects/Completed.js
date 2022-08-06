import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box'
import {
    useNavigate
} from "react-router-dom";

import kamraniKaizenTirunelveli from '../../img/projects/kamraniKaizenTirunelveli/2Large.jpeg'
import basavanagudi from '../../img/projects/basavanagudi/1Large.jpeg'
import greenEnclave from '../../img/projects/greenEnclave/1Large.jpeg'
import bangloreTelephoneLayout from '../../img/projects/bangloreTelephoneLayout/1Large.jpeg'
import chennaiRoopasResidency from '../../img/projects/chennaiRoopasResidency/1Large.jpeg'
import gangaNagarAslamsResidence from '../../img/projects/gangaNagarAslamsResidence/1Small.jpeg'
import hbr from '../../img/projects/hbr/3Medium.jpeg'
import hbr1 from '../../img/projects/hbr1/5Medium.jpeg'
import lingarajpuram from '../../img/projects/lingarajpuram/6Medium.jpeg'
import pearlNestvadapalinichennai from '../../img/projects/pearlNestvadapalinichennai/2Medium.jpeg'
import kamanahali from '../../img/projects/kamanahali/4Medium.jpeg'
import yeshwanthpur from '../../img/projects/yeshwanthpur/3Medium.jpeg'
import loydsroadbanglore from '../../img/projects/loydsroadbanglore/4Medium.jpeg'
import mosqueroadbengalore from '../../img/projects/mosqueroadbengalore/1Medium.jpeg'
import interior from '../../img/projects/interior/9Small.jpeg'

const cards = [kamraniKaizenTirunelveli, basavanagudi, greenEnclave, bangloreTelephoneLayout, chennaiRoopasResidency, gangaNagarAslamsResidence, hbr, hbr1, lingarajpuram, pearlNestvadapalinichennai, kamanahali, yeshwanthpur, loydsroadbanglore, mosqueroadbengalore, interior];
const cardName = ["Kamrani Kaizen", "Basavanagudi", "Green Enclave", "Banglore Telephone Layout", "Chennai Roopas Residency", "Ganga Nagar", "HBR", "HBR1", "Lingarajpuram", "Pearl Nest", "Kamanahali", "Yeshwanthpur", "Loyd's Road", "Mosque Road", "Interior"];
const cardAddress = ["Tirunelveli, Tamil Nadu", "Bangalore, Karnataka", "Tirunelveli, Tamil Nadu", "Bangalore, Karnataka", "Chennai, Tamil Nadu", "Ganganagar, Bangalore", "Bangalore, Karnataka", "Bangalore, Karnataka", "Bangalore, Karnataka", "Vadapalini, Chennai", "Bangalore, Karnataka", "Bangalore, Karnataka", "Bangalore, Karnataka", "Bangalore, Karnataka", "Bangalore, Karnataka"];

export default function Completed() {
    let navigate = useNavigate();
    const nav = (index) => {
        navigate(`/site/${index}`)
    }

    return (
        <div id='#Completed'>
            <Box
                px={{ xs: 3, sm: 10 }}
                py={{ xs: 5, sm: 10 }}
                bgcolor={'white'}
                color={'white'} >
                <Container sx={{ width: '100%' }}>
                    <Typography textAlign="center" fontFamily={'Righteous'} fontSize={'34px'} color={'orange'} pt={{ xs: 1, sm: 2 }}>Projects</Typography>
                    <Typography textAlign="center" fontFamily={'Righteous'} fontSize={'44px'} color={'#ddd'} pt={{ xs: 1, sm: 2 }}>Completed</Typography>
                    <Box display={'flex'} flexWrap={'wrap'} justifyContent='space-evenly' borderRadius={'20px'} padding={'10px'}>
                        {cards.map((cardImg, index) => (
                            <Card sx={{ maxWidth: 310, padding: '10px', margin: '20px', ":hover": "boxShadow: 0 15px 70px -12px rgba(0,0,0,0.3)", boxShadow: 6 }} onClick={() => nav(cardName[index])} className="transition ease-in-out delay-150 hover:-translate-y-3 hover:scale-110 hover:bg-black hover:shadow-fuchsia-900 hover:shadow-xl hover:text-white duration-[2500]">
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image={cardImg}
                                    />
                                    <CardContent className='flex items-center flex-col'>
                                        <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                                            {cardName[index]}
                                        </Typography>
                                        <Typography variant="body2" className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                                            <span className="relative text-white">
                                                {cardAddress[index]}
                                            </span>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        ))}
                    </Box>
                </Container>
            </Box>
        </div>
    );
}