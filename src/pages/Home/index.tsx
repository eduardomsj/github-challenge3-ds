import React from 'react';
import { Link } from 'react-router-dom';
import ButtonIcon from '../../core/components/ButtonIcon';
import './styles.scss';

const Home = () => (
    <>
        <div className="home-container">
            <h1 className="home-title">
                Desafio do Capítulo 3, <br/>
                Bootcamp DevSuperior
            </h1>
            <p className="home-content">
            Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. 
            Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto. <br/>
            Este design foi adaptado a partir de Ant Design System for Figma, 
            de Mateusz Wierzbicki: <a href="mailto:antforfigma@gmail.com" className="home-a">antforfigma@gmail.com</a> 
            </p>            
        </div>
        <div className="home-btn">
            <Link to="/profile">
                <ButtonIcon text="Começar"/>
            </Link>
        </div>
    </>
);

export default Home;