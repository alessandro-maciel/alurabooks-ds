import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    background: rgba(101, 101, 101, 0.85);
    z-index: 999;
`

export const Modal = styled.div`
    padding: 64px 48px 56px 48px;
    gap: 56px;
    background: #FFFFFF;
    box-shadow: 4px 4px 24px -4px rgba(0, 0, 0, 0.15);
    border-radius: 24px;
    width: max-content;
    height: max-content;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Titulo = styled.div`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    color: #EB9B00;
`