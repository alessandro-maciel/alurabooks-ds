import React from "react";
import { AbTag, AbTagProps } from "../src";
import { ComponentMeta } from "@storybook/react";

export default {
    title: 'Components/AbTag',
    component: AbTag,
} as ComponentMeta<typeof AbTag>

export const Tag = (args: AbTagProps) => <AbTag {...args}/>

Tag.args = {
    text: 'Tag'
} as AbTagProps