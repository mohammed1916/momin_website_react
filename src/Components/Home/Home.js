import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import decoration from '../../img/decoration/decoration1.png'

export default function Home() {

    return (
        <>
            <Box
                px={{ xs: 3, sm: 10 }}
                py={{ xs: 5, sm: 10 }}
                bgcolor={'white'}
                color={'white'} >
                <Container sx={{ width: '100%' }}>
                    <Box display={'flex'} flexWrap={'wrap'} justifyContent='space-evenly' bgcolor={'#cab390'} borderRadius={'20px'} padding={'10px'}>
                        <Box display={'flex'} flexDirection={'column'} alignSelf={'center'} padding={{ xs: 3, sm: 5 }} >
                            <Typography textAlign="center" fontFamily={'Righteous'} color={'white'} fontSize={'34px'} pt={{ xs: 1, sm: 2 }}>Momin Developers</Typography>
                            <Typography textAlign="center" fontFamily={'Righteous'} color={'#eee'} sx={{ xs: { fontSize: '20px' }, sm: { fontSize: '24px' } }} pt={{ xs: 1, sm: 2 }}>A subsidiary of Bluechip Constructions</Typography>
                            <Typography textAlign="center" fontFamily={'Righteous'} color={'#ddd'} pt={{ xs: 1, sm: 2 }}>Serving at Chennai, Bengaluru and Tirunelveli</Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} alignSelf={'center'} sx={{ height: "45vh" }} component={'img'} src={decoration} borderRadius={'20px'} />
                    </Box>
                </Container>
            </Box>
        </>
    );
}