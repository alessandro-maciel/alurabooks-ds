import React from "react";
import { ComponentMeta } from '@storybook/react';
import { AbCampoTexto, AbCampoTextoProps } from "../src";

export default {
    title: 'Components/AbCampoTexto',
    component: AbCampoTexto,
} as ComponentMeta<typeof AbCampoTexto>

export const CampoTexto = (args: AbCampoTextoProps) => <AbCampoTexto {...args}/>

CampoTexto.args = {
    label: 'E-mail',
    value: '',
    placeholder: 'seuemail@maneiro.com.br',
    type: 'email',
    onChange: () => {},
}