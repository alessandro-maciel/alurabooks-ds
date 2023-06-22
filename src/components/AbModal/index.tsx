import React from "react";
import { Container, Modal } from './styles';

export default function AbModal({children, visivel}: {children: React.ReactNode, visivel: boolean}){
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