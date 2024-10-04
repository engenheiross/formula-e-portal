import { HomeStyle } from "../css/HomeStyle";
import Tabela from "../components/Tabela.jsx";

import {Link} from 'react-router-dom';

const Home = () => {

    return (
        <HomeStyle>
        <section id="home">
            <div id="noticias">
                <h1>Últimas Notícias</h1>
                <div className="noticia">
                    <img alt="thumbnail" className="noticia-thumbnail"/>
                    <h3 className="noticia-titulo"><Link to="/noticias/noticia">Fórmula E confirma teste só para mulheres na pré-temporada de Valência</Link></h3>
                </div>
                <div className="noticia">
                    <img alt="thumbnail" className="noticia-thumbnail"/>
                    <h3 className="noticia-titulo"><Link to="/noticias/noticia">Mitch Evans destrói corrida</Link></h3>
                </div>
                <div className="noticia">
                    <img alt="thumbnail" className="noticia-thumbnail"/>
                    <h3 className="noticia-titulo"><Link to="/noticias/noticia">Mitch Evans destrói corrida</Link></h3>
                </div>
                <div className="noticia">
                    <img alt="thumbnail" className="noticia-thumbnail"/>
                    <h3 className="noticia-titulo"><Link to="/noticias/noticia">Mitch Evans destrói corrida</Link></h3>
                </div>
            </div>

            <div id="ultimas-corridas">
                <h1>Últimas Corridas</h1>
                <div className="corrida">
                    <img alt="imagem-corrida"/>
                    <h3 className="corrida-cidade">Paris, França</h3>
                </div>
                <div className="corrida">
                    <img alt="imagem-corrida"/>
                    <h3 className="corrida-cidade">Paris, França</h3>
                </div>
                <div className="corrida">
                    <img alt="imagem-corrida"/>
                    <h3 className="corrida-cidade">Paris, França</h3>
                </div>
            </div>

            <div id="proxima-corrida">
                <h1>Próxima Corrida</h1>
                <h2>GP da Espanha</h2>
                <div id="corrida">
                    <img id="nextrace-picture" src="/src/assets/formula-e.webp" alt="foto" className="corrida-item"/>
                    <div id="nextrace-data" className="corrida-item">
                        <div id="nextrace-place" className="race-stat">MADRID</div>
                        <div id="nextrace-date" className="race-stat">Data: 22/06/2024</div>
                        <div id="nextrace-time" className="race-stat">às 10h00 - horário de Brasília GMT-3</div>
                    </div>
                    <div id="buttons" className="corrida-item">
                        <div id="watch-button" className="btn">Assistir no YouTube</div>
                        <div id="purchase-button" className="btn">Comprar Ingresso</div>
                    </div>
                </div>
            </div>

            <Tabela size={8}></Tabela>
        </section>
        </HomeStyle>
    );

};

export default Home;