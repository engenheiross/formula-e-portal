import { CorridaStyle } from "../css/CorridaStyle";

const Corrida = ({cidade, corrida}) => {

    return (
        <CorridaStyle>
            <div className="corrida" id={corrida}>
                <h3 className="corrida-cidade">{cidade}</h3>
                <div className="medalhas">
                    <div className="medalha">
                        <img  className="medalha-ouro" src="./src/assets/medalhas/ouro.png"/>
                        <img className="medalha-piloto-foto" src="https://cdn-1.motorsport.com/images/mgl/0rG3Mvy2/s200/sergio-sette-camara-ert-formul.webp"/>
                    </div>
                    <div className="medalha">
                        <img  className="medalha-prata" src="./src/assets/medalhas/prata.png"/>
                        <img className="medalha-piloto-foto" src="https://cdn-6.motorsport.com/images/mgl/6zQeAklY/s200/mitch-evans-jaguar-racing.webp"/>
                    </div>
                    <div className="medalha">
                        <img  className="medalha-bronze" src="./src/assets/medalhas/bronze.png"/>
                        <img className="medalha-piloto-foto" src="https://cdn-5.motorsport.com/images/mgl/YW7oBmyY/s200/robin-frijns-envision-racing.webp"/>
                    </div>
                </div>
            </div>
        </CorridaStyle>
    );

};

export default Corrida;