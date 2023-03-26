import React from 'react';
import { MouseClickEvent } from '../../util/ReactEvents';

type ItemRating = {
    "rate": number;
    "count": number
}

interface ItemProps {
    "id": number;
    "title": string;
    "price": number;
    "description": string;
    "category": string;
    "image": string;
    "rating": ItemRating;
    "onClick": (id: number, count: number, title: string) => void;
}

const Item: React.FC<ItemProps> = ({ id, title, onClick }) => {
    const handleClick = (e: MouseClickEvent, id: number, count: number, title: string) => {
        e.preventDefault();
        onClick(id, count, title);
    }

    return (
        <li onClick={(e) => handleClick(e, id, 1, title)}>
            {title}
        </li>
    );
}

export default Item;