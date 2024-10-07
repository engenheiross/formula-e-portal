import styled from "styled-components";

export const CorridaStyle = styled.section
`

    p {

    }

    .medalhas {
        display: flex;
        flex-direction: row;



    }

    .corrida {
        width: 100%;
        display: flex;
        flex-direction: row;
        
        padding: .5rem;
        gap: .3rem;


        justify-content: space-around;
        align-items: center;
        flex-direction: row;


        
        height: 3rem;
        gap: 2rem;

        overflow-y: hidden;
    }

    .corrida :hover {
        cursor: pointer;
    }
        
    #corrida-1 {
        background: url("./src/assets/168614.jpg");
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center bottom 10px;
    }

    #corrida-2 {
        background: url("./src/assets/madrid.jpg");
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center bottom 10px;
    }

    #corrida-3 {
        background: url("./src/assets/lisboa.jpg");
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center bottom 10px;
    }

    .medalha {
        padding: .2rem;
        height: 100%;
    }

    .medalha img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;

    }


`