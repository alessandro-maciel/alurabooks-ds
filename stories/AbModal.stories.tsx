import React from "react";
import { ComponentMeta } from "@storybook/react";
import { AbModal } from "../src";
import { AbModalProps } from "../src";

export default {
    title: 'Components/AbModal',
    component: AbModal,
} as ComponentMeta<typeof AbModal>

export const Card = (args: AbModalProps) => <AbModal {...args}/>

Card.args = {
    titulo: 'Título',
    visivel: true,
    children: <h1>Component Modal de exemplo</h1>
} as AbModalProps