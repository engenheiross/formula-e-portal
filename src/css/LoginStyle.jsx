import styled from "styled-components";

export const LoginStyle = styled.section
`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: var(--primary-color);

    form {
        background-color: var(--secondary-color);
        padding: 40px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-width: 400px;
        text-align: center;
    }

    h2 {
        margin-bottom: 20px;
    }

    input {
        width: 100%;
        padding: 6px;
        margin: 10px 0;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 16px;
        color: black;
    }

    button {
        width: 40%;
        padding: 12px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: #0056b3;
    }


`