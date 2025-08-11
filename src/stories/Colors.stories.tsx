import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta = {
    title: 'Atoms/Colors',
    parameters: {
        layout: 'centered',
    }
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    render: () => (
        <>
            <div>
                <style>{`
            .container {
            display: flex;
            grid-tamplate-columns: repeat;
            height: 4rem;
            }

            .info{
            padding: var(--spacing-md);
            background-color: var(--color-neutral-bcg);
            color: var(--color-neutral-text);
            margin: var(--spacing-sm);
            text-align: center;
            border: 1px solid var(--color-neutral-accent);
            width: 2rem;
            height: 2rem;
            }
            `}
                </style>
                <h1>Card colors</h1>
                <h3>Midnight-green</h3>
                <div className="container green">
                    <div
                        className="info"
                        style={{ backgroundColor: `var(--midnight-green)` }}
                    >
                    </div>
                </div>


                <h3>Periwinkle</h3>
                <div className="container purple">
                    <div
                        className="info"
                        style={{ backgroundColor: `var(--periwinkle)` }}
                    >
                    </div>
                </div>

                <h3>Baby-powder</h3>
                <div className="container white">
                    <div
                        className="info"
                        style={{ backgroundColor: `var(--baby-powder)` }}
                    >
                    </div>
                </div>


            </div>
        </>
    )
}