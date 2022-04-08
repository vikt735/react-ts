import React from "react";
import styled from 'styled-components';

interface ButtonProps {
    children?: React.ReactNode;
    onClick?: any;
    margin?: string;
    width?: string;
    background?: string;

}

const Button: React.FC<ButtonProps> = ({ onClick, background,  children, margin, width }) => {
    return (
        <ButtonStyles   background={background} onClick={onClick} margin={margin} width={width}>
            {children}
        </ButtonStyles>
    );
};

export default Button;
interface ButtonStyleProps {
    margin?: string;
    width?: string;
    background?: string;
}
const ButtonStyles = styled.button<ButtonStyleProps>`
    max-width: ${props => props.width};
    color: #000;
    font-size: 0.75em;
    margin: ${props => props.margin};
    padding: 1em 1em;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    background: ${props => props.background};
    &:hover {
        transform: translatey(3px);
        box-shadow: none;
    }
    @media (min-width: 992px) {
        font-size:1em;
    }
`;