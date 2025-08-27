import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../components/Button';
import React from 'react';

const meta: Meta<typeof Button> = {
    title: 'Atoms/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        children: { control: 'text' },
        onClick: { action: 'clicked' },
        disabled: { control: 'boolean' },
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Clicca qui',
        onClick: () => console.log('Primary Button clicked!'),
        disabled: false,
    },
};

export const Disabled: Story = {
    args: {
        ...Primary.args,
        children: 'Disabilitato',
        disabled: true,
    },
};