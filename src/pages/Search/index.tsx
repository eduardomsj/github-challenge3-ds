import React, { useState } from 'react';
import SearchContainer from '../../core/components/SearchContainer';
import ButtonIcon from '../../core/components/ButtonIcon';
import { UserResponse } from '../../core/types/User';
import { makeRequest } from '../../core/utils/requests';
import DataConverter from '../../core/utils/DataConverter';
import './styles.scss';
//import InfoLoader from './components/InfoLoader';

const Profile = () => {
    const [name, setName] = useState('');

    const [userResponse, setUserResponse] = useState<UserResponse>();

    //const [isLoading, setIsLoading] = useState(false);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const payload = {
            login: name
        }

        //setIsLoading(true);
        
        makeRequest({ url: `${payload.login}` })
            .then(response => setUserResponse(response.data));
            //.finally(() => {
                //setIsLoading(false)
            //});
    }

    return (
        <>
            <div className="profile-search">
                <SearchContainer >
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={name}
                            className="profile-input"
                            onChange={handleOnChange}
                            placeholder="Usuário Github"
                        />
                        <div className="search-btn">
                            <ButtonIcon text="Encontrar" />
                        </div>
                    </form>
                </SearchContainer>
            </div>

            {userResponse && (
                <div className="search-result-cntr">
                    <div className="search-result-cont-1">
                        <img src={userResponse.avatar_url} alt="Img GitHub" className="search-result-cont-img" />
                        <span>
                            <a href={userResponse.html_url} target="_new">
                                <ButtonIcon text="Ver Perfil" />
                            </a>
                        </span>
                    </div>
                    <div className="search-result-cont-2">
                        <div className="search-result-cont-info-1">
                            <div className="cont-info-1-repo">
                                Repositórios públicos: {userResponse.public_repos}
                            </div>
                            <div className="cont-info-1-followers">
                                Seguidores: {userResponse.followers}
                            </div>
                            <div className="cont-info-1-following">
                                Seguindo: {userResponse.following}
                            </div>
                        </div>
                        <div className="search-result-cont-info-2">
                            <div className="cont-info-2-title">
                                Informações
                            </div>
                            <div className="cont-info-2">
                                <span className="cont-info-2-title">
                                    Empresa:
                                    <span className="cont-info-2-text">
                                        {userResponse.company}
                                    </span>
                                </span>
                            </div>
                            <div className="cont-info-2">
                                <span className="cont-info-2-title">
                                    Website/Blog:
                                    <span className="cont-info-2-text">
                                        {userResponse.blog}
                                    </span>
                                </span>
                            </div>
                            <div className="cont-info-2">
                                <span className="cont-info-2-title">
                                    Localidade:
                                    <span className="cont-info-2-text">
                                        {userResponse.location}
                                    </span>
                                </span>
                            </div>
                            <div className="cont-info-2">
                                <span className="cont-info-2-title">
                                    Membro desde:
                                    <span className="cont-info-2-text">
                                        {DataConverter({ data: `${userResponse.created_at}` })}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>            
            )}        
        </>
    );
}

export default Profile;