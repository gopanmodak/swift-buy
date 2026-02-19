import React from "react";
import { FaRegStar } from "react-icons/fa";

const NewArrival = ({ productData }) => {
  const { title, price, description, image, rating } = productData;
  return (
    <div>
      <div className="card bg-base-100 w-90 h-100 shadow-sm">
        <figure>
          <img src={image} alt="Shoes" className="h-45 p-5" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-neutral">${price}</div>
          </h2>
          <p>{description.slice(0, 44)}...</p>
          <div className="card-actions justify-end gap-2">
            <div className="badge badge-outline">
              <FaRegStar className="text-yellow-500" />
              {rating?.rate}
            </div>
            <div className="badge badge-outline">{rating?.count} reviews</div>
          </div>
          <div className="card-actions justify-between mt-3">
            <button className="btn btn-primary"> View Details</button>
            <button className="btn btn-secondary"> Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
