/*
This file content the main view...
*/

// Components
import NavBar from "../components/navbar";
import Carousel from "../components/carousel";
import Footer from '../components/footer';

// Images 
import Card1 from '../assets/images/Card1.jpg';

function MainView() {
    return (
        <div style={{minHeight: '100vh',}}>
            <NavBar/>

            <div className='container-fluid px-5 py-5'>
                <Carousel />
            </div>

            <br/><br/><br/>

            <div className="card mb-3" style={{borderRadius: '0',}}>
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src={Card1} className="img-fluid" alt="..."/>
                    </div>
                    <div className="col-md-6">
                        <br/><br/>
                        <div className="card-body">
                            <div className="container">
                                <h2 className="card-title Orbitron" style={{fontWeight: 'bold', color: '#BB2649',}}>
                                    Misión
                                    <hr style={{borderRadius: '50%',}}/>
                                </h2>
                                
                                <br/>
                                <p className="Andika" style={{fontSize: '2vw', textAlign: 'justify',}}>
                                    Nuestro objetivo es brindarle al usuario un equipo personalizado 
                                    para que disfrute los beneficios de la tecnología
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br/><br/><br/>

            <div className="card mb-3" style={{borderRadius: '0',}}>
                <div className="row">
                    <h2 className="card-title Orbitron d-flex justify-content-center py-5" style={{fontWeight: 'bold', color: '#BB2649',}}>
                        Tienda en línea
                    </h2>
                </div>
                <div class="row g-0">
                    <div class="col-md-4">
                        <div class="card mb-3">
                            <img src={require('../assets/images/grafico.jpg')} className="card-img-top" alt="..." style={{height: '19.8vw',}}/>
                            <div class="card-body">
                                <h5 class="card-title Orbitron">Tarjetas gráficas</h5>
                                <p class="card-text Indie-Flower" style={{fontSize: '1.5vw',}}>Para un experiencia en gráficos, puedes adquirir alguna de las tarjetas gráficas que ofrecemos.</p>
                                <br />
                                <div className="container d-flex justify-content-center">
                                    <button type="button" className="btn btn-primary">Adquirir</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-3">
                            <img src={require('../assets/images/ram.jpg')} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title Orbitron">Memorias RAM</h5>
                                <p class="card-text Indie-Flower" style={{fontSize: '1.5vw',}}>
                                    Si lo que deseas es un equipo de alto rendimiento, nuestras RAM pueden ayudarte.
                                </p>
                                <div className="container d-flex justify-content-center">
                                    <button type="button" className="btn btn-primary">Adquirir</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-3">
                            <img src={require('../assets/images/monitor.jpeg')} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title Orbitron">Tarjetas gráficas</h5>
                                <p class="card-text Indie-Flower" style={{fontSize: '1.5vw',}}>Para un experiencia en gráficos, puedes adquirir alguna de las tarjetas gráficas que ofrecemos.</p>
                                <div className="container d-flex justify-content-center">
                                    <button type="button" className="btn btn-primary">Adquirir</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <br/><br/><br/>

            <div class="card" style={{borderRadius: '0',}}>
                <div class="card-body">
                <h2 className="card-title Orbitron d-flex justify-content-center py-5" style={{fontWeight: 'bold', color: '#BB2649',}}>
                    Arma tu propio equipo
                </h2>
                <div className="container">
                    <p class="card-text Indie-Flower" style={{fontSize: '1.5vw',}}>
                        Si tu ideal es tener un equipo propio, puedes personalizarlo y adquirirlo a través de nuestra tienda en línea. 
                    </p>
                    <a href="#" class="btn btn-success d-flex justify-content-center">Arma tu equipo ahora</a>
                </div>
                <br/>
                
                </div>
            </div>

            <br/><br/><br/>

            <Footer />
        </div>
    );
}

export default MainView;

/* Created by Omar Sánchez */
