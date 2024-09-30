import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle `
:root {
    --primary-color: rgb(63, 76, 119);
    --secondary-color: rgb(32, 38, 57);
    --gray: linear-gradient(112.1deg, var(--secondary-color) 11.4%, var(--primary-color) 100%); 
    --reverse-gray: linear-gradient(112.1deg, var(--primary-color) 11.4%, var(--secondary-color) 100%); 
    --button: rgb(32,38,57);
    --blue: linear-gradient(to right, blue, darkblue);

    --third-color: #AC3E54;

}

* {
    padding: 0;
    margin: 0;

    color: white;

    overflow-x: hidden;

    font-family: 'Trebuchet MS';

}

body {
    background-color: var(--primary-color);
}

`

export default GlobalStyle;