import { useState } from "react";
import { productImages } from "./data";

function Product() {
  const [productQuantity, setProductQuantity] = useState(0);
  const [activeImage, setActiveImage] = useState(productImages[0]);

  const addQuantity = () => {
    setProductQuantity(productQuantity + 1);
  };

  const removeQuantity = () => {
    if (productQuantity > 0) {
      setProductQuantity(productQuantity - 1);
    }
  };

  return (
    <div className="flex gap-8 mt-16">
      <div className="product--images border flex flex-col gap-8 px-14">
        <div className="product-image-main ">
          <img
            src={activeImage.mainImage}
            alt={activeImage.altText}
            className="rounded-lg"
          />
        </div>
        <div className="product-images-thumbnails flex gap-x-9">
          {productImages.map((productImage, index) => (
            <img
              src={productImage.thumbnail}
              key={index}
              alt=""
              role="button"
              className={`size-28 rounded-lg ${
                activeImage === productImage
                  ? "border-2 border-primary-800 contrast-50"
                  : ""
              }`}
              onClick={() => setActiveImage(productImage)}
            />
          ))}
        </div>
      </div>
      <div className="product--description">
        <h6 className="text-primary-800 uppercase font-bold product--company">
          Sneaker Company
        </h6>
        <h2 className="text-neutral-800 font-bold product--title">
          Fall Limited Edition Sneakers
        </h2>

        <p className="text-neutral-700">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <p className="font-bold text-3xl mt-8 product--price">
          $ 125.00
          <span className="ml-4 bg-primary-100 text-primary-800 p-2 rounded product--discount-percentage">
            50%
          </span>
        </p>
        <p className="line-through mb-8 text-neutral-600 font-bold product--price-original">
          {" "}
          $ 250.00
        </p>
        <div className="flex gap-5">
          <div className="join ">
            <button
              className="btn bg-neutral-500 border-transparent join-item"
              onClick={removeQuantity}
            >
              <img src="./icon-minus.svg" />
            </button>
            <input
              className="input font-bold w-16 text-neutral-400 bg-neutral-500 join-item"
              type="text"
              placeholder="0"
              value={productQuantity}
              onChange={(e) => setProductQuantity(Number(e.target.value))}
            />
            <button
              className="btn bg-neutral-500 border-transparent join-item"
              onClick={addQuantity}
            >
              <img src="./icon-plus.svg" />
            </button>
          </div>
          <button className="btn btn-primary btn-wide text-neutral-100">
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="hsl(0, 0%, 100%)"
                fillRule="nonzero"
              />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
