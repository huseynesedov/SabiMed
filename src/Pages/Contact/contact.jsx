import Contact from '../sections/Contact/index.jsx';

import Navbar from '../../Components/Nav';
import Footer from '../../Components/Footer/footer';

function contact() {

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>SabiMed - İletişim</title>
            </Helmet>

            <Navbar />
            <Contact />
            <Footer />
        </>
    );
}

export default contact;
