import * as React from 'react';
import ResponsiveAppBar from './Components/Navbar/ResponsiveAppBar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Completed from './Components/Projects/Completed';
import Ongoing from './Components/Projects/Ongoing';

function App() {
  return (
    < >
      <ResponsiveAppBar />
      <Home />
      <Ongoing />
      <Completed />
      <Footer />
    </>
  );
}

export default App;
