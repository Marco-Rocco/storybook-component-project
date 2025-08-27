import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "../components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { Button } from "../components/Button";


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
            defaultValue: 'src/assets/Fiesta_red_relic.jpg'
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
        },
        isButtonDisabled: {
            control: 'boolean',
            defaultValue: false
        }
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Card title',
        description: 'Card description',
        imageUrl: 'src/assets/Fiesta_red_relic.jpg',
        priceVariant: "discounted",
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
                    <div className="prices-container">
                        <span className="card-old-price">${args.oldPrice}</span>
                        <span className="card-new-price">${args.newPrice}</span>
                    </div>
                </>
            )}
            {args.hasButton && <Button aria-label="button" onClick={() => console.log('Cart clicked!')} disabled={args.isButtonDisabled}><FontAwesomeIcon icon={faCartShopping} className="cart-icon" /></Button>}
        </Card>
    )
};