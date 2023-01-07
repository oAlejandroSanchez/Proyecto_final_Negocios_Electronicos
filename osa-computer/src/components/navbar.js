/*
This file content the navbar...
*/

function NavBar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand Orbitron osa-computer-title-main" href={this}>OSA - Computer</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                                        
                    <div className="row d-flex justify-content-right">
                        <button type="button" className="btn btn-light Andika" style={{fontSize: '1.35vw', fontWeight: 'bold',}}>
                            Iniciar sesión
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;

/* Created by Omar Sánchez */
