import React, { useState } from "react";
import { styled } from "styled-components";

interface Props {
    selecionado: boolean;
}

const Section = styled.section<Props>`
    width: 194px;
    height: 88px;
    background: ${(props: Props) => props.selecionado ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);' : '#FFFFFF'};
    border: 1px solid;
    border-color: ${(props: Props) => props.selecionado ? '#002F52' : '#EB9B00'};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    margin: 10px;
    font-family: sans-serif;
    cursor: pointer;
    header {
        color: ${(props: Props) => props.selecionado ? '#FFFFFF' : '#EB9B00'};
        font-size: 12px;
        font-weight: 400;
    }
    strong {
        color: ${(props: Props) => props.selecionado ? '#FFFFFF' : '#EB9B00'};;
        font-size: 16px;
        font-weight: 700;
    }
    footer {
        color: ${(props: Props) => props.selecionado === true ? '#FFFFFF' : 'rgba(0, 0, 0, 0.54)'};;
        font-size: 12px;
        font-weight: 400;
    }
`

export interface GroupOpcao {
    id: number,
    titulo: string,
    corpo: string,
    rodape: string,
}

export interface GroupOpcoesProps {
    opcoes: GroupOpcao[],
    valorPadrao?: GroupOpcao | null,
    onChange?: (opcao: GroupOpcao) => void
}

export function AbGrupoOpcoes({opcoes, onChange, valorPadrao}: GroupOpcoesProps){
    const [selecao, setSelecao] = useState<GroupOpcao | null>(valorPadrao ?? null);

    const aoSelecionar = (selecao: GroupOpcao) => {
        setSelecao(selecao);

        if (onChange) {
            onChange(selecao);
        }
    }

    return (
        <>
            {opcoes.map((opcao) => {
                return (
                    <Section 
                        key={opcao.id} 
                        selecionado={opcao.id === selecao?.id}
                        onClick={() => aoSelecionar(opcao)}
                    >
                        <header>
                            {opcao.titulo}
                        </header>
                        <div>
                            <strong>{opcao.corpo}</strong>
                        </div>
                        <footer>
                           {opcao.rodape}
                        </footer>
                    </Section>
                );
            })}
        </>
    );
}