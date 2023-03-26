import React from 'react';

type ItemRating = {
    "rate": number;
    "count": number
}

export type ItemProps = {
    "id": number;
    "title": string;
    "price": number;
    "description": string;
    "category": string;
    "image": string;
    "rating": ItemRating;
    // "onClick": () => void;
}



const Item: React.FC<ItemProps> = ({ title}) => {

   

    return (
        <li>
            {title}
        </li>
    );
}

export default Item;