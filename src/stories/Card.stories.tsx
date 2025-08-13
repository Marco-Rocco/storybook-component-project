import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "../components/Card";


const meta: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        title: {
            control: 'text',
            defaultValue: 'Card title'
        },
        description: {
            control: 'text',
            defaultValue: 'Card description'
        },
        imageUrl: {
            control: 'text',
            defaultValue: 'src/assets/Custom_70s_Stratocaster,_Dakota_Red_-_Hard_Relic.jpg'
        },
        priceVariant: {
            options: ['hidden', 'normal', 'discounted'],
            control: { type: 'radio' },
            defaultValue: 'normal'
        },
        price: {
            control: 'text'
        },
        oldPrice: {
            control: 'text'
        },
        newPrice: {
            control: 'text'
        },
        hasButton: {
            control: 'boolean'
        }
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Card title',
        description: 'Card description',
        imageUrl: 'src/assets/Custom_70s_Stratocaster,_Dakota_Red_-_Hard_Relic.jpg',
        priceVariant: 'normal',
        price: '5,500',
        oldPrice: '6,500',
        newPrice: '5,000',
        hasButton: true
    },
    render: (args) => (
        <Card {...args}>
            {args.priceVariant === 'normal' && <span className="card-price">${args.price}</span>}
            {args.priceVariant === 'discounted' && (
                <>
                    <span className="card-old-price">${args.oldPrice}</span>
                    <span className="card-price">${args.newPrice}</span>
                </>
            )}
            {args.hasButton && <button>jo mama</button>}
        </Card>
    )
};