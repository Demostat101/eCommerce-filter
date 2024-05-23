import React from "react";
import { AiFillStar } from "react-icons/ai"
import { BsFillBagHeartFill } from "react-icons/bs"


const Card = ({newPrice, title, img, star,reviews, prevPrice}) => {



  return (
    <div>

<section className="card">
          <img
            src={img}
            alt="AVATER"
            className="card-image"
          />
          <div className="card-details">
            <h3 className="card-title">{title}</h3>
  
            <div className="reviews">
              {star} {star} {star} {star}
              {/* <AiFillStar className="rating-stars" />
              <AiFillStar className="rating-stars" />
              <AiFillStar className="rating-stars" />
              <AiFillStar className="rating-stars" /> */}
              <span className="total-reviews">{reviews}</span>
            </div>
  
            <div className="card-price">
              <div className="price">
                <del>{prevPrice}</del> {newPrice}
              </div>
  
              <div className="bag">
                <BsFillBagHeartFill className="bag-icon" />
              </div>
            </div>
          </div>
        </section>

    </div>
  );
};

export default Card;
