import ResponsiveAppBar from './Navbar/ResponsiveAppBar';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Completed from './Projects/Completed';
import Ongoing from './Projects/Ongoing';

export default function Start() {
    return (
        < >
            <ResponsiveAppBar />
            <Home />
            <Footer />
        </>
    );
}