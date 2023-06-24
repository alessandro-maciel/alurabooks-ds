import React, { useEffect, useState } from "react";
import { Container, Header, Modal, Titulo } from './styles';
import SvgFecharIcon from "../icons/SvgFecharIcon";

export interface AbModalProps {
    titulo: string,
    visivel: boolean,
    aoFecharModal?: () => void,
    children: React.ReactNode
}

export function AbModal({children, titulo, visivel = false, aoFecharModal}: AbModalProps){
    const [isVisivel, setIsVisivel] = useState(visivel);

    useEffect(() => {
        if (visivel !== isVisivel) {
            setIsVisivel(visivel);
        }
    }, [ visivel ]);

    const fecharModal = () => {
        setIsVisivel(false)

        if (aoFecharModal) {
            aoFecharModal();
        }
    }

    return (
        isVisivel ? 
        <Container>
            <Modal>
                <Header>
                    <Titulo >{titulo}</Titulo>
                    <SvgFecharIcon cursor={'pointer'} onClick={fecharModal}/>
                </Header>
                {children}
            </Modal>
        </Container>
        : <></>
    );
}