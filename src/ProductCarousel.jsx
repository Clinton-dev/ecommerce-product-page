import { productImages } from "./data";

function ProductCarousel() {
  return (
    <div className="carousel w-full md:hidden">
      {productImages.map((product, index) => {
        return (
          <div
            id={`slide${index}`}
            key={index}
            className="carousel-item relative w-full"
          >
            <img src={product.mainImage} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={`#slide${
                  index === 0 ? productImages.length - 1 : index - 1
                }`}
                className="btn btn-circle"
              >
                ❮
              </a>
              <a href={`#slide${index + 1}`} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductCarousel;
