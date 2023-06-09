import React, { ReactNode } from "react";
import { styled } from "styled-components";

export interface CardProps {
    children: ReactNode;
}

const Container = styled.div`
    padding: 48px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: #ffffff;
    border-radius: 10px;
`

export function AbCard({ children }: CardProps){
    return (
        <Container>
            { children }
        </Container>
    );
}