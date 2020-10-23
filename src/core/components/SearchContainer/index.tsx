import React from 'react';
import './styles.scss';

type Props = {
    children: React.ReactNode;
}

const SearchContainer = ({ children }: Props) => (
    <>
    <div className="search-cntr">
        <h1 className="search-title">Encontre um perfil Github</h1> 
        {children}
   
    </div>    
    </>

);

export default SearchContainer;