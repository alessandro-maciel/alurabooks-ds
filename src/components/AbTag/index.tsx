import React from "react";
import { styled } from "styled-components";

export interface AbTagProps {
    text: string,
}

const Tag = styled.div`
    background: #EB9B00;
    padding: 48px;
    display: inline-block;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 24px;
    font-family: sans-serif;
`

export function AbTag({text}: AbTagProps){
    return (
        <Tag>
            { text }
        </Tag>
    );
}