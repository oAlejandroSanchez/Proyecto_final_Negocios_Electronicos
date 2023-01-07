/*
This file content the main view...
*/

// Components
import NavBar from "../components/navbar";
import Carousel from "../components/carousel";
import Footer from '../components/footer';

function MainView() {
    return (
        <div>
            <NavBar/>

            <div className='container-fluid px-5 py-5'>
                <Carousel />
            </div>

            <div className="container-fluid">
                <div class="card">
                    <div class="card-body" style={{width: '100%',}}>
                        This is some text within a card body.
                    </div>
                </div>
            </div>

            {/* <Footer /> */}
        </div>
    );
}

export default MainView;

/* Created by Omar Sánchez */
