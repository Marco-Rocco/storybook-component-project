import React from 'react';
import './Button.css'

interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, disabled = false }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};