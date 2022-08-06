import ResponsiveAppBar from '../../Components/Navbar/ResponsiveAppBar';
import Home from '../../Components/Home/Home';
import Completed from '../../Components/Projects/Completed';
import Ongoing from '../../Components/Projects/Ongoing';
import ScrollNavBar from '../../Components/Navbar/ScrollNavBar';
import { styled } from '@mui/material/styles';


const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);
export default function Start() {
    return (
        < >
            <ResponsiveAppBar />
            <ScrollNavBar />
            <Offset />
            <Home />
            <Ongoing />
            <Completed />
        </>
    );
}
