import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    background: rgba(101, 101, 101, 0.85);
    overflow: hidden;
    z-index: 999;
`

export const Modal = styled.div`
    padding: 64px 48px 56px;
    gap: 56px;
    background: #FFFFFF;
    box-shadow: 4px 4px 24px -4px rgba(0, 0, 0, 0.15);
    border-radius: 24px;
    width: max-content;
    height: max-content;
`