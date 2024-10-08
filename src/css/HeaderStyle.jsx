import styled from "styled-components";

export const HeaderStyle = styled.section
`
#header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 8rem;
    background: var(--gray);
    height: 4rem;

    overflow-y: hidden;
}
#header :hover {
    cursor: pointer;
}

#brand {
    display: flex;
    flex-direction: row;
    gap: 2rem;

    align-items: center;
    background: var(--third-color);
    height: 4rem;
    padding-inline: 8rem;

    overflow-y: hidden;

    
}

.logo-img {
    height: 5rem;

}

#links {
    display: flex;
    list-style: none;
    gap: 3rem;
    align-items: center;
    list-style: none;
}

.class-link {
    text-decoration: none;
    font-weight: none;
    font-style: none;
    color: white;
    
}

.link :hover {
    cursor: pointer;
}

`
