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
}
#header :hover {
    cursor: pointer;
}

#brand {
    align-items: center;
    background: var(--third-color);
    height: 4rem;
    padding-inline: 8rem;
}

#links {
    display: flex;
    list-style: none;
    gap: 3rem;
    align-items: center;
    list-style: none;
}

.link {
    text-decoration: none;
    font-weight: none;
    font-style: none;
    
}

.link :hover {
    cursor: pointer;
    color: var(--third-color);
}

`