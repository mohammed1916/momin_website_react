import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import decoration from '../../img/decoration/decoration1.png'
/* fontSize={{ xs: '20px', sm: '26px', md: '34px', lg: '46px' }} */
export default function Home() {

    return (
        <>
            <Box
                mx={{ xs: 3, sm: 10 }}
                my={{ xs: 5, sm: 10 }}
                bgcolor={'white'}
                color={'white'} >
                <Container sx={{ width: '100%' }}>
                    <Box display={'flex'} flexWrap={'wrap'} alignItems={'center'} justifyContent='center' borderRadius={'5px'} margin={'10px'} boxShadow={'0 3px 10px rgb(0 0 0 / 0.2);'} padding={{ xs: 1, sm: 2 }}>
                        <Box display={'flex'} flexDirection={'column'} alignSelf={'center'} padding={{ xs: 3, sm: 5 }} >
                            <Typography textAlign="center" fontFamily={'Righteous'} color={'turquoise'} variant="h3" pt={{ xs: 1, sm: 2 }}>Momin Developers</Typography>
                            <Typography textAlign="center" fontFamily={'Righteous'} color={'darkturquoise'} variant="h6" pt={{ xs: 1, sm: 2 }}>A subsidiary of Bluechip Constructions</Typography>
                            <Typography textAlign="center" fontFamily={'Righteous'} color={'aquamarine'} variant="p" pt={{ xs: 1, sm: 2 }}>Serving at Chennai, Bengaluru and Tirunelveli</Typography>
                        </Box>
                        <Box alignSelf={'center'} sx={{ height: "20rem" }} component={'img'} src={decoration} />
                    </Box>
                </Container>
            </Box>
        </>
    );
}