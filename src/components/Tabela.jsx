import {TabelaStyle} from '../css/TabelaStyle.jsx';

const Tabela = (size) => {

    const pilots = [
        {
            "name": "Sérgio Camara",
            "team": "Dragon / Penske Autosport",
            "country": "Brazil",
            "pictureURL": "https://cdn-1.motorsport.com/images/mgl/0rG3Mvy2/s200/sergio-sette-camara-ert-formul.webp",
        },
        {
            "name": "Jean-Éric Vergne",
            "team": "DS Techeetah",
            "country": "France",
            "pictureURL": "https://cdn-4.motorsport.com/images/mgl/Y998rGXY/s200/jean-eric-vergne-ds-penske.webp",
        },
        {
            "name": "Stoffel Vandoorne",
            "team": "Mercedes-EQ Formula E Team",
            "country": "Belgium",
            "pictureURL": "https://cdn-4.motorsport.com/images/mgl/0rGbX5q2/s200/stoffel-vandoorne-ds-penske-1.webp",
        },
        {
            "name": "Mitch Evans",
            "team": "Jaguar Racing",
            "country": "New Zealand",
            "pictureURL": "https://cdn-6.motorsport.com/images/mgl/6zQeAklY/s200/mitch-evans-jaguar-racing.webp",
        },
        {
            "name": "Antonio Felix da Costa",
            "team": "DS Techeetah",
            "country": "Portugal",
            "pictureURL": "https://cdn-5.motorsport.com/images/mgl/YXRaQwR0/s200/antonio-felix-da-costa-porsche-1.webp",
        },
        {
            "name": "Lucas di Grassi",
            "team": "Audi Sport ABT Schaeffler",
            "country": "Brazil",
            "pictureURL": "https://cdn-8.motorsport.com/images/mgl/68yg5RX0/s200/lucas-di-grassi-abt-cupra-raci-1.webp",
        },
        {
            "name": "Robin Frijns",
            "team": "Envision Virgin Racing",
            "country": "Netherlands",
            "pictureURL": "https://cdn-5.motorsport.com/images/mgl/YW7oBmyY/s200/robin-frijns-envision-racing.webp",
        },
        {
            "name": "Nyck de Vries",
            "team": "Mercedes-EQ Formula E Team",
            "country": "Netherlands",
            "pictureURL": "https://cdn-3.motorsport.com/images/mgl/0a98x1w0/s200/nyck-de-vries-mahindra-racing.webp",
        },
        {
            "name": "Sam Bird",
            "team": "Jaguar Racing",
            "country": "United Kingdom",
            "pictureURL": "https://cdn-6.motorsport.com/images/mgl/6b7B13w0/s200/sam-bird-neom-mclaren-formula-.webp",
        },
        {
            "name": "Alexander Sims",
            "team": "Mahindra Racing",
            "country": "United Kingdom",
            "pictureURL": "https://cdn-8.motorsport.com/static/img/mgl/6100000/6100000/6109000/6109900/6109919/s200/dtm-jerez-november-testing-2015-alexander-sims.webp",
        },
        {
            "name": "Oliver Rowland",
            "team": "Nissan e.dams",
            "country": "United Kingdom",
            "pictureURL": "https://cdn-9.motorsport.com/images/mgl/YBenxJ82/s8/oliver-rowland-nissan-formula--1.jpg",
        },
        {
            "name": "Jake Dennis",
            "team": "BMW i Andretti Motorsport",
            "country": "United Kingdom",
            "pictureURL": "https://cdn-3.motorsport.com/images/mgl/6D1WvGJ0/s200/jake-dennis-andretti-global-1.webp",
        },
    ];


    const classificacoes = [];

    for (let i = 0; i < 9; i++) {
        classificacoes.push(
            <tr key={i} className="tabela-item">
                <th className='posicao'>{i + 1}</th>
                <td className="piloto">
                    <img className='piloto-foto' src={pilots[i].pictureURL} alt={`${pilots[i].name} foto`} />
                    <span className="piloto-nome">{pilots[i].name}</span>
                </td>
                <th className='equipe'>{pilots[i].team}</th>
                <th className='score'>{Math.round(90 - i - (Math.random() * (1 - 0)))}</th>
            </tr>
        );
    }

    console.log(classificacoes);

    return (
        <TabelaStyle>
        <section id="tabela">
            <h1>Classificações</h1>

            <table id="classificacao">
                <tbody>
                    <tr id="cabecalho">
                        <th>#</th>
                        <th>Piloto</th>

                        <th>Equipe</th>
                        <th>Pontos</th>
                    </tr>

                    {classificacoes}

                </tbody>
            </table>

        </section>
        </TabelaStyle>
    );

};

export default Tabela;