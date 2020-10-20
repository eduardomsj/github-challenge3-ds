import React from 'react';
import ButtonIcon from '../ButtonIcon';
import './styles.scss';

const SearchContainer = () => (
    <>
    <div className="search-cntr">
        <h1 className="search-title">Encontre um perfil Github</h1> 
        <div className="search-btn">  
            <ButtonIcon text="Encontrar"/>
        </div>     
    </div>    
    </>

);

export default SearchContainer;