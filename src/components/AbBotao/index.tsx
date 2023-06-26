import React from "react";
import styled, { css } from "styled-components";

export interface AbBotaoProps {
    texto?: string;
    tipo?: 'primario' | 'secundario';
    onPress: () => void;
}

interface BotaoProps {
    tipo?: 'primario' | 'secundario';
}

const BotaoEstilizado = styled.button<BotaoProps>`
    background: ${(props: BotaoProps) =>  props.tipo === 'primario' ? '#EB9B00' : 'transparent'};
    padding: 16px 32px;
    border: 2px solid #EB9B00;
    color: ${(props: BotaoProps) =>  props.tipo === 'primario' ? '#FFFFFF' : '#EB9B00'};
    font-size: 20px;
    cursor: pointer;
    ${(props: BotaoProps) =>  props.tipo === 'primario' 
        ? css `
            &:hover {
            background: #B87900;
            border: 2px solid #B87900;
        `
        : css `
            &:hover {
            background: transparent;
            border: 2px solid #B87900;
            color: #B87900;
        `
    };
`

export function AbBotao({texto, onPress, tipo = 'primario'}: AbBotaoProps){
    return (
        <BotaoEstilizado 
            tipo={tipo}
            onClick={onPress}
        >
            {texto}
        </BotaoEstilizado>
    );
}