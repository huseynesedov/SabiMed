import Contact from '../sections/Contact/index.jsx';

import Navbar from '../../Components/Nav';
import Footer from '../../Components/Footer/footer';
import { Helmet } from 'react-helmet';

function contact() {

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>SabiMed - Contact</title>
            </Helmet>

            <Navbar />
            <Contact />
            <Footer />
        </>
    );
}

export default contact;
