import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "../components/Card";


const meta: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        hasButton: {
            control: 'boolean'
        },
        hasPrice: {
            control: 'boolean'
        },
        priceValue: {
            control: 'text',
            defaultValue: '10,99'
        },

    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Card title',
        description: 'Card description',
        imageUrl: 'src/assets/Custom_70s_Stratocaster,_Dakota_Red_-_Hard_Relic.jpg',
        hasPrice: true,
        hasButton: true,
        priceValue: '10,99'
    },
    render: (args) => (
        <Card {...args}>
            {args.hasPrice && <span className="card-price">${args.priceValue}</span>}
            {args.hasButton && <button>jo mama</button>}
        </Card>
    )
};