import styled from "styled-components";

export const HomeStyle = styled.section
`

#home {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
}

#noticias {
    grid-column: 1;
    grid-row: 1;
}

.noticia {
    display: flex;
    flex-direction: row;
    
    padding: .5rem;
    gap: .3rem;
    background-image: var(--gray);
}

#ultimas-corridas {
    grid-column: 2;
    grid-row: 1;

    display: flex;
    flex-direction: column;
    
    
}

.corrida {
    display: flex;
    flex-direction: row;
    
    padding: .5rem;
    gap: .3rem;
    background-image: var(--gray);
}

#proxima-corrida {
    grid-column: 1;
    grid-row: 2;
    height: 100%;
    width: 100%;

    
}

#proxima-corrida h2 {
    margin-top: 2rem;
    text-align: center;
}

#corrida {
    justify-content: center;
    align-items: space-around;
    display: flex;
    padding: 2rem;
    gap: 2rem;
}

#nextrace-data {
    background-color: var(--third-color);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-self: flex-start;
    justify-content: center;
    align-items: center;

    width: 16rem;
    margin-top: 2rem;
    padding: 1rem;
}

.race-stat {
}

#nextrace-picture {
    width: 600px;
}

#buttons {
    align-self: flex-end;
    display: flex;
    gap: 2rem;

    margin-bottom: 2rem;
}

.btn {
    box-shadow: 2rem;
    box-sizing: border-box;

    background: var(--button);
    color: white;

    transition: 200ms;
    
    padding: 1rem;
}

.btn:hover {
    background: var(--third-color);
    cursor: pointer;
    color: white;
}

#tabela {
    grid-column: 2;
}

`






