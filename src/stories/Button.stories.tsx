import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../components/Button';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

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
        children: <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />,
        onClick: () => console.log('Cart clciked!'),
        disabled: false,
    },
};

export const Disabled: Story = {
    args: {
        ...Primary.args,
        children: <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />,
        disabled: true,
    },
};