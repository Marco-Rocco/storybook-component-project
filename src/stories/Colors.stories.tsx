import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ButtonHTMLAttributes } from "react";

const meta: Meta = {
    title: 'Atoms/Colors',
    parameters: {
        layout: 'centered',
    }
}

export default meta;
type Story = StoryObj<typeof meta>;

const ClickToCopy: React.FC<({ value: string } & ButtonHTMLAttributes<HTMLButtonElement>)> = ({ value, ...attrs }) => {
    return <button
        className="click-to-copy"
        {...attrs}
        style={{ border: 'none', cursor: 'pointer', ...attrs.style }}
        onClick={() => navigator.clipboard.writeText(value)} />
}
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
                <h1>Colors</h1>

                <p>Click on a color to copy the value</p>
                <h3>Midnight-green</h3>
                <div className="container green">
                    <ClickToCopy
                        className="info"
                        value={`var(--midnight-green)`}
                        style={{ backgroundColor: `var(--midnight-green)` }}
                    />
                </div>


                <h3>Periwinkle</h3>
                <div className="container purple">
                    <ClickToCopy
                        className="info"
                        value={`var(--periwinkle)`}
                        style={{ backgroundColor: `var(--periwinkle)` }}
                    />
                </div>

                <h3>Baby-powder</h3>
                <div className="container white">
                    <ClickToCopy
                        className="info"
                        value={`var(--baby-powder)`}
                        style={{ backgroundColor: `var(--baby-powder)` }}
                    />
                </div>


            </div>
        </>
    )
}