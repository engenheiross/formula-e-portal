import styled from "styled-components";

export const NoticiaStyle = styled.section
`
.article {
    display: flex;
    flex-direction: column;
    background-color: var(--secondary-color);


    margin: 2rem;
}

.article-title {
    display: flex;
    background-color: var(--third-color);
    font-size: 48px;
    padding: 2rem;
}

.article-content {
    display: flex;
    flex-direction: column;
    font-size: 20px;
    padding: 2rem;

    gap: .5rem;
}

.article-image {

    max-height: 600px;

    padding: 2rem;
}



`