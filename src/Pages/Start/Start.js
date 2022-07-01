import ResponsiveAppBar from '../../Components/Navbar/ResponsiveAppBar';
import Footer from '../../Components/Footer/Footer';
import Home from '../../Components/Home/Home';
import Completed from '../../Components/Projects/Completed';
import Ongoing from '../../Components/Projects/Ongoing';
import ScrollNavBar from '../../Components/Navbar/ScrollNavBar';

export default function Start() {
    return (
        < >
            <ScrollNavBar />
            <Home />
            <Ongoing />
            <Completed />
        </>
    );
}
