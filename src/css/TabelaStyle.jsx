import styled from "styled-components";

export const TabelaStyle = styled.section`
    #tabela {
        width: 100%;
        height: 100%;

    }

    h1 {
        background: var(--secondary-color);
    }

    #classificacao {
        width: 100%;
        border-collapse: collapse;
        background-image: var(--gray);
    }

    #cabecalho {
        background-color: var(--third-color);
        color: white;
    }

    th, td {
        padding: 10px;
        text-align: left;
        border-bottom: 1px solid #ddd;
        vertical-align: middle;
    }

    .tabela-item:hover {
        background-color: #f1f1f1;
        transition: 4s;
    }


    .posicao {
        width: 50px;
        text-align: center;
    }

    .piloto {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .piloto-foto {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        object-fit: cover;
    }

    .piloto-nome {
        font-weight: bold;
    }
    .piloto-nome:hover {
        cursor: pointer;
        text-decoration: underline;
    }
    .piloto-foto:hover {
        cursor: pointer;
    }

    .equipe, .score {
        text-align: center;
        width: 150px;
    }

    .equipe {
        text-align: left; /* Alinha texto à esquerda */
    }

    .score {
        width: 80px; /* Ajusta largura da coluna */
    }

    /* Ajusta o cabeçalho da tabela para melhor alinhamento */
    #classificacao thead th {
        text-align: center;
    }

    /* Define um layout flexível para melhorar a responsividade */
    #tabela {
        display: block;
        overflow-x: auto;
        white-space: nowrap;
    }

    /* Estiliza as imagens para evitar deformações */
    img {
        display: block;
    }
`;
