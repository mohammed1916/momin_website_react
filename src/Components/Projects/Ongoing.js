import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box'

import moimnElan from '../../img/elevation/elevation1.jpg'


const cards = [moimnElan];
const cardName = ["Momin Elan"];
const cardAddress = ["Shivajinagar, Bangalore"];

export default function Ongoing() {

    return (
        <>
            <Box
                px={{ xs: 3, sm: 10 }}
                py={{ xs: 5, sm: 10 }}
                bgcolor={'white'}
                color={'white'} >
                <Container sx={{ width: '100%' }}>
                    <Typography textAlign="center" fontFamily={'Righteous'} fontSize={'34px'} color={'orange'} pt={{ xs: 1, sm: 2 }}>Projets</Typography>
                    <Typography textAlign="center" fontFamily={'Righteous'} fontSize={'44px'} color={'#ddd'} pt={{ xs: 1, sm: 2 }}>Ongoing</Typography>
                    <Box display={'flex'} flexWrap={'wrap'} justifyContent='space-evenly' bgcolor={'#cab390'} borderRadius={'20px'} padding={'10px'}>
                        {cards.map((cardImg, index) => (
                            <Card sx={{ maxWidth: 250, padding: '10px', margin: '20px' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={cardImg}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {cardName[index]}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" textAlign={'center'}>
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