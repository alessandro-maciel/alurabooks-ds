import React from "react";
import { Container, Modal } from './styles';

export function AbModal({children, visivel}: {children: React.ReactNode, visivel: boolean}){
    return (
        visivel ? 
        <Container>
            <Modal>
                {children}
            </Modal>
        </Container>
        : <></>
    );
}