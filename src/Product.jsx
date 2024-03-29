import { useContext, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

import { productImages } from "./data";

import { CartContext } from "./CartContext";
import ProductCarousel from "./ProductCarousel";

function Product() {
  const [productQuantity, setProductQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(productImages[0]);

  const { addToCart, cartItems } = useContext(CartContext);

  const [open, setOpen] = useState(false);

  const addQuantity = () => {
    setProductQuantity(productQuantity + 1);
  };

  const removeQuantity = () => {
    if (productQuantity > 0) {
      setProductQuantity(productQuantity - 1);
    }
  };

  return (
    <>
      <div className="flex gap-8 md:gap-14 md:mt-16 mb-10 md:px-10 flex-col md:flex-row">
        {/* desktop */}
        <div className="product--images hidden flex-col gap-8 md:flex md:px-14">
          <div className="product-image-main">
            <img
              src={activeImage.mainImage}
              alt={activeImage.altText}
              className="rounded-lg object-fill"
              onClick={() => setOpen(true)}
            />
          </div>
          <div className="product-images-thumbnails flex gap-x-6">
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

        {/* mobile */}

        <ProductCarousel />

        <div className="product--description px-6">
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
          <div className="flex flex-row my-4 justify-between items-center md:my-8 md:flex-col">
            <p className="font-bold text-3xl  product--price">
              $ 125.00
              <span className="ml-4 bg-primary-100 text-primary-800 p-2 rounded product--discount-percentage">
                50%
              </span>
            </p>
            <p className="line-through text-neutral-600 font-bold product--price-original">
              {" "}
              $ 250.00
            </p>
          </div>
          <div className="flex gap-5 flex-col md:flex-row">
            <div className="join ">
              <button
                className="btn bg-neutral-500 border-transparent join-item"
                onClick={removeQuantity}
              >
                <img src="./icon-minus.svg" />
              </button>
              <input
                className="input font-bold w-full md:w-16 text-center md:text-left text-neutral-400 bg-neutral-500 join-item"
                type="text"
                placeholder="1"
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
            <button
              className="btn btn-primary btn-block md:btn-wide  py-4 text-neutral-100"
              onClick={() => {
                addToCart({
                  id: 1234,
                  quantity: productQuantity,
                  name: "Fall Limited Edition Sneakers",
                  amount: 125.0,
                  total: 125.0 * productQuantity,
                  thumbnail: "./image-product-1-thumbnail.jpg",
                });
              }}
            >
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
      <Lightbox
        plugins={[Thumbnails]}
        open={open}
        close={() => setOpen(false)}
        slides={productImages.map((productImage) => {
          return { src: productImage.mainImage };
        })}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Sets 50% opacity with black background
        }}
      />
    </>
  );
}

export default Product;
