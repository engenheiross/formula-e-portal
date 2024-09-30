import { Link } from "react-router-dom";

import {HeaderStyle} from "../css/HeaderStyle";

const Header = () => {

    return (
        <HeaderStyle>
        <div id="header">
            <div id="brand">
                <Link to="/"><img alt="logo"/></Link>
                <Link to="/" className="link"><h2>Fórmula E</h2></Link>
            </div>
            <div id="links">
                <Link className="link" to="/">Próxima Corrida</Link>
                <Link className="link" to="/">Última Corrida</Link>
                <Link className="link" to="/">Classificações</Link>
                <Link className="link" to="/login">Login</Link>
            </div>
        </div>
        </HeaderStyle>
    );

}

export default Header;