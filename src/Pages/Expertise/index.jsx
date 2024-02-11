import Expertise from '../sections/Expertise/expertise';
import { Helmet } from "react-helmet";

import Navbar from '../../Components/Nav';
import Footer from '../../Components/Footer/footer';

function expertise() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>SabiMed - Expertise</title>
            </Helmet>

            <Navbar />
            <Expertise />
            <Footer />
        </>
    );
}

export default expertise;
