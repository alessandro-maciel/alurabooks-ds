import React from "react";
import { ComponentMeta } from "@storybook/react";
import { AbGrupoOpcoes, GroupOpcoesProps } from '../src';


export default {
    title: 'Components/AbGrupoOpcoes',
    component: AbGrupoOpcoes
} as ComponentMeta<typeof AbGrupoOpcoes>

export const GrupoOpcoes = (args: GroupOpcoesProps) => <AbGrupoOpcoes {...args}/>

GrupoOpcoes.args = {
    opcoes: [
        {
            id: 1,
            titulo: 'E-book',
            corpo: 'R$ 00,00',
            rodape: '.pdf,.epub,.mob',
        },
        {
            id: 2,
            titulo: 'Impresso',
            corpo: 'R$ 00,00',
            rodape: '.pdf,.epub,.mob',
        },
        {
            id: 3,
            titulo: 'Impresso + E-book',
            corpo: 'R$ 00,00',
            rodape: '.pdf,.epub,.mob',
        }
    ],
    valorPadrao: {
        id: 1,
        titulo: 'E-book',
        corpo: 'R$ 00,00',
        rodape: '.pdf,.epub,.mob',
    }
};