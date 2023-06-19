import React from "react";
import { ComponentMeta } from "@storybook/react";
import AbModal from "../src/components/AbModal";

export default {
    title: 'Components/AbModal',
    component: AbModal,
} as ComponentMeta<typeof AbModal>

export const Card = () => {
    return (
        <AbModal visivel={true}>
            <h1>Componente Modal</h1>
        </AbModal>
    )
}