import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box'

import kamaraniKaizenTirunelveli from '../../img/projects/kamaraniKaizenTirunelveli/2.jpeg'
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

const cards = [kamaraniKaizenTirunelveli, basavanagudi, greenEnclave, bangloreTelephoneLayout, chennaiRoopasResidency, gangaNagarAslamsResidence, hbr, hbr1, lingarajpuram, loydsroadbanglore, pearlNestvadapalinichennai, kamanahali, yeshwanthpur, mosqueroadbengalore, interior];
const cardName = ["Kamarani Kaizen", "Basavanagudi", "Green Enclave", "Banglore Telephone Layout", "Chennai Roopas Residency", "Ganga Nagar", "HBR", "HBR", "Lingarajpuram", "Loyd's Road", "Pearl Nest", "Kamanahali", "Yeshwanthpur", "Mosque Road", "Interior"];
const cardAddress = ["Tirunelveli, Tamil Nadu", "Bangalore, Karnataka", "Tirunelveli, Tamil Nadu", "Bangalore, Karnataka", "Chennai, Tamil Nadu", "Ganganagar, Bangalore", "Bangalore, Karnataka", "Bangalore, Karnataka", "Bangalore, Karnataka", "Bangalore, Karnataka", "Vadapalini, Chennai", "Bangalore, Karnataka", "Bangalore, Karnataka", "Bangalore, Karnataka", "Bangalore, Karnataka"];

export default function Completed() {

    return (
        <>
            <Box
                px={{ xs: 3, sm: 10 }}
                py={{ xs: 5, sm: 10 }}
                bgcolor={'white'}
                color={'white'} >
                <Container sx={{ width: '100%' }}>
                    <Typography textAlign="center" fontFamily={'Righteous'} fontSize={'34px'} color={'orange'} pt={{ xs: 1, sm: 2 }}>Projets</Typography>
                    <Typography textAlign="center" fontFamily={'Righteous'} fontSize={'44px'} color={'#ddd'} pt={{ xs: 1, sm: 2 }}>Completed</Typography>
                    <Box display={'flex'} flexWrap={'wrap'} justifyContent='space-evenly' bgcolor={'#ebfffa'} borderRadius={'20px'} padding={'10px'}>
                        {cards.map((cardImg, index) => (
                            <Card sx={{ maxWidth: 250, padding: '10px', margin: '20px', ":hover": "boxShadow: 0 15px 70px -12px rgba(0,0,0,0.3)" }}  >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={cardImg}
                                    />
                                    <CardContent>
                                        <Typography color={'black'} gutterBottom variant="h5" component="div" textAlign={'center'}>
                                            {cardName[index]}
                                        </Typography>
                                        <Typography color={'black'} variant="body2" textAlign={'center'}>
                                            {cardAddress[index]}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        ))}
                    </Box>
                </Container>
            </Box>
        </>
    );
}