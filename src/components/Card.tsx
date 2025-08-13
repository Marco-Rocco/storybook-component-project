import React from "react";
import cssText from "./Card.css?inline";
import { GlobalStyles } from "../styles/GlobalStyles";

type CardProps = {
    title: string;
    description: string;
    imageUrl: string;
    children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
    title,
    description,
    imageUrl,
    children
}) => {
    return (
        <div className="container">
            <GlobalStyles />
            <style>{cssText}</style>
            <div className="card">
                {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
                <div className="card-content">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-description">{description}</p>
                    <div className="children-container">{children}</div>

                </div>
            </div>
        </div >
    )
}