import styled, {css} from "styled-components";

const Boton = styled.button`
    color: white;
    background: #FF6D00;
    display: inline-block;
    margin-top: 10px;
    padding: 10px;
    border:none;
    border-radius: 5px;
    font-weight: bold;
    font-family: Verdana, Arial, Helvetica, sans-serif;
    cursor: pointer;
    width: ${props => props.anchocompleto ? "100%" : "auto"};

    &:hover{
        color: whiet;
        background: #00B0F0;
    }

    ${props => props.rojo && css`
        color: white;
        background: red;
    `}

    ${props => props.verde && css`
        color: white;
        background: green;
    `}
`;

export default Boton;