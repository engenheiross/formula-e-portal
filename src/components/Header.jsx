import { Link } from "react-router-dom";

import {HeaderStyle} from "../css/HeaderStyle";

const Header = () => {

    return (
        <HeaderStyle>
        <div id="header">
            <div id="brand">
                <Link to="/"><img className="logo-img" src="/src/assets/logo.png" alt="logo"/></Link>
                <Link to="/" className="class-link"><h2>Fórmula E</h2></Link>
            </div>
            <div id="links">
                <Link className="class-link" to="/">Próxima Corrida</Link>
                <Link className="class-link" to="/">Última Corrida</Link>
                <Link className="class-link" to="/">Classificações</Link>
                <Link className="class-link" to="/login">Login</Link>
            </div>
        </div>
        </HeaderStyle>
    );

}

export default Header;
