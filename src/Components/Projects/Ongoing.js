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

import moimnElan from '../../img/elevation/elevation1Large.jpeg'


const cards = [moimnElan];
const cardName = ["Momin Elan"];
const cardAddress = ["Shivajinagar, Bangalore"];

export default function Ongoing() {
    let navigate = useNavigate();
    const nav = (index) => {
        navigate(`/site/${index}`)
    }

    return (
        <div id='#Ongoing'>
            <Box
                px={{ xs: 3, sm: 10 }}
                py={{ xs: 2, sm: 5 }}
                bgcolor={'white'}
                color={'white'} >
                <Container sx={{ width: '100%' }}>
                    <Typography textAlign="center" fontFamily={'Righteous'} fontSize={'34px'} color={'orange'} pt={{ xs: 0.5, sm: 1 }}>Projects</Typography>
                    <Typography textAlign="center" fontFamily={'Righteous'} fontSize={'44px'} color={'#ddd'} pt={{ xs: 0.5, sm: 2 }}>Ongoing</Typography>
                    <Box display={'flex'} flexWrap={'wrap'} justifyContent='space-evenly' bgcolor={'#eee'} borderRadius={'20px'} padding={'10px'} boxShadow={10}>
                        {cards.map((cardImg, index) => (
                            <Card
                                sx={{ maxWidth: 250, padding: '10px', margin: '20px', boxShadow: 5 }}
                                onClick={() => nav(cardName[index])}
                                className="transition ease-in-out delay-150 hover:-translate-y-3 hover:scale-110 hover:bg-black hover:shadow-fuchsia-900 hover:shadow-xl hover:text-white duration-[2500]"
                            >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={cardImg}
                                    />
                                    <CardContent className='flex items-center flex-col'>
                                        <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                                            {cardName[index]}
                                        </Typography>
                                        <Typography variant="body2"
                                            className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block"
                                        >
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