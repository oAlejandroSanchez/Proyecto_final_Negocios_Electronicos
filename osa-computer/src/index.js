/*
UNIVERSIDAD NACIONAL AUTÓNOMA DE MÉXICO
FACULTAD DE INGENIERÍA

PROYECTO FINAL DE NEGOCIOS ELECTRÓNICOS Y DESARROLLO WEB
GRUPO:     SEMESTRE 2023-2

INTEGRANTES DE EQUIPO:
    SERGIO
    ALBANYA
    SÁNCHEZ PÉREZ OMAR ALEJANDRO
*/

// Node modules
import React from 'react';
import ReactDOM from 'react-dom/client';

// Bootstrap 5.2
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

// Animate css
import 'animate.css';

// Views
import MainView from './views/principal';

// style.css
import './assets/css/style.css';
import './assets/css/fonts.css';

function App() {
    return (
        <div>
            <MainView />
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <div>
        <App />
    </div>
);
