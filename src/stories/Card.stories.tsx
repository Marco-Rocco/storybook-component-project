import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "../components/Card";

const meta: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
    argTypes: {
        children: { control: 'text' },
    },
    args: {
        children: 'This is a card component',
    },
    parameters: {
        layout: 'centered',
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Card title',
        description: 'Card description',
        imageUrl: 'https://via.placeholder.com/400x200',
    },
};