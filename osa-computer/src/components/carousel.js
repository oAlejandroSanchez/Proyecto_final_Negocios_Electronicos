/*
This gonna have a carousel...
*/

// Images
import Rent_a_computer from '../assets/images/Rent_a_computer.jpg';
import Get_a_computer from '../assets/images/Get_a_computer.jpg';

function Carousel() {
    return (
        <div>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                <div class="carousel-item active">
                        <img src={Rent_a_computer} class="d-block w-100" alt="Aquiere tu equipo" />
                    </div>
                    <div class="carousel-item">
                        <img src={Get_a_computer} class="d-block w-100" alt="Aquiere tu equipo" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;

/* Created by Omar Sánchez */
