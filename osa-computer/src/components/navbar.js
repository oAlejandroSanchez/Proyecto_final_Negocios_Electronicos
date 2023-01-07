/*
This file content the navbar...
*/

function NavBar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand Orbitron osa-computer-title-main" href={this}>OSA - Computer</a>
                                        
                    <div className="row d-flex justify-content-right">
                        <div className="col">
                            <button type="button" className="btn btn-light Andika" style={{fontSize: '1.35vw', fontWeight: 'bold',}}>
                                Iniciar sesión
                            </button>

                            <button type="button" className="btn btn-light Andika" style={{fontSize: '1.35vw', fontWeight: 'bold',}}>
                                Registro
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;

/* Created by Omar Sánchez */
