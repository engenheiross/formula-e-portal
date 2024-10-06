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
        display: flex;

        justify-content: space-around;
        align-items: center;
        flex-direction: row;

        height: 3rem;
        gap: 2rem;

        overflow-y: hidden;
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