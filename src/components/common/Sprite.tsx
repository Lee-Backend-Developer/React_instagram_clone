import styled from "styled-components";
import sprite from "images/Login/sprite.png";
import { imageProps } from "components/Login/types";

const ImgSprite = styled.div<imageProps>`
    background-repeat: no-repeat;
    background: url(${sprite});
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    background-position: ${(props) => props.position};
`;

export default ImgSprite;
