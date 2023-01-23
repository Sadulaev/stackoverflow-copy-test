import styled from "styled-components";
import { baseTheme } from "./theme";

//FlexBox
interface FlexProps {
    direction?: string;
    wrap?: string;
    justifyContent?: string;
    alignItems?: string;
    alignContent?: string;
}

export const Flex = styled.div<FlexProps>`
    display: flex;
    flex-direction: ${({ direction = 'row' }) => direction};
    flex-wrap: ${({ wrap = 'nowrap' }) => wrap};
    justify-content: ${({ justifyContent = 'flex-start' }) => justifyContent};
    align-items: ${({ alignItems = 'stretch' }) => alignItems};
    align-content: ${({ alignContent = 'stretch' }) => alignContent};
`

//Titles
interface TitleProps {
    size?: string;
    weight?: 200 | 300 | 400 | 500 | 600 | 700
}

export const Title1 = styled.h1<TitleProps>`
    font-size: ${({ size = '24' }) => size}}px;
    font-weight: ${({ weight = 700 }) => weight};
  `

export const Title2 = styled.h2<TitleProps>`
    font-size: ${({ size = '24' }) => size}}px;
    font-weight: ${({ weight = 700 }) => weight};
  `

export const PageTitle = styled.h3`
    font-size: 22px;
    font-weigth: 400;
    padding: 10px 0;
`

//Buttons
interface ButtonProps {
    width?: string;
    height?: string;
}

export const PrimaryButton = styled.div<ButtonProps>`
    margin: 0 5px;
    width: ${({ width = '100' }) => width}px;
    height: ${({ height = '50' }) => height}px;
    color: #ffffff;
    background: ${baseTheme.colors.primaryBtn};
    padding: 5px;
    box-shadow: inset 0 1px 0 0 hsla(0,0%,100%,0.4);
    border-radius: 4px;
    font-size: 15px;
    display:flex;
    justify-content: center;
    align-items: center;
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: 0.2s;
    }
`

export const SecondaryButton = styled.div<ButtonProps>`
    margin: 0 5px;
    width: ${({ width = '100' }) => width}px;
    height: ${({ height = '50' }) => height}px;
    background: ${baseTheme.colors.secondaryBtn};
    box-shadow: inset 0 1px 0 0 hsla(0,0%,100%,0.4);
    border-radius: 4px;
    font-size: 15px;
    display:flex;
    justify-content: center;
    align-items: center;
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: 0.2s;
    }
`

//Loader

export const Loader = styled.div`
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
`