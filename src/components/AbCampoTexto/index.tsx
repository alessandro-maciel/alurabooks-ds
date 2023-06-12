import React from "react";
import { styled } from "styled-components";

const CampoTextoStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-family: sans-serif;
    margin: 4px;
    label{
        color: #002F52;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        margin-left: 24px;
    }
    input{
        padding: 10px 24px;
        align-items: center;
        border: 1px solid #002F52;
        border-radius: 24px;
        
    }
    input::placeholder{
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #A4A4A4;
    }
`

export interface AbCampoTextoProps {
    label: string,
    value: string,
    placeholder: string,
    type: 'text' | 'email' | 'password' | 'date';
    onChange: (value: string) => void
}

export function AbCampoTexto({label, placeholder, value, type, onChange}: AbCampoTextoProps) {
    
    return (
        <CampoTextoStyled>
            <label>{label}</label>
            <input 
                type={type} 
                value={value} 
                placeholder={placeholder} 
                onChange={event => onChange(event.target.value)}
            />
        </CampoTextoStyled>
    );
}