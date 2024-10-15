import React, {FC} from 'react';
import {IProductModel} from "../models/IProductModel";
import "./Product.css"

type TypeProps = { item: IProductModel }
const Product: FC<TypeProps> = ({item}) => {
    return (
        <div className="product">
            <h3>{item.title}</h3>
            <img src={item.thumbnail} alt={item.title}/>
            <p>{item.description}</p>
            <p>Category: {item.category}</p>
            <p>Tags: {item.tags.join(', ')}</p>
            <div className="price-container">
                <p>Price: {item.price}</p>
                <p>Discount: {item.discountPercentage}%</p>
            </div>
            <div className="reviews">
                <h4>Reviews:</h4>
                {item.reviews.map((review) => (
                    <div key={review.reviewerEmail} className="review">
                        <strong>{review.reviewerName}</strong>: {review.comment}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;