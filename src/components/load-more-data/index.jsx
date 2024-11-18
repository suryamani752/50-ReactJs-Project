import React, { useEffect, useState } from "react";

const LoadMoreData = () => {
  const [product, setProduct] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [ErrorMessage, setErrrorMessage] = useState(null);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProduct() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await response.json();
      //   console.log(data?.products);
      if (data && data.products && data.products.length) {
        setProduct((prevData) => [...prevData, ...data.products]);
      }
    } catch (error) {
      setErrrorMessage("unable to fetch product");
    } finally {
      setLoading(false);
    }
  }
  //   console.log(product);
  useEffect(() => {
    fetchProduct();
  }, [count]);
  useEffect(() => {
    if (product && product.length === 100) setDisableButton(true);
  }, [product]);
  if (Loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading Products.....</p>
      </div>
    );
  }
  return (
    <div className="m-5 p-5">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4">
        {product && product.length > 0 ? (
          product.map((singleProduct) => (
            <div
              key={singleProduct.id}
              className="border shadow-md p-5 rounded-md flex flex-col justify-center items-center gap-2"
            >
              <img src={singleProduct.thumbnail} alt={singleProduct.title} />
              <p>{singleProduct.title}</p>
            </div>
          ))
        ) : (
          <div>
            <p>No products available</p>
          </div>
        )}
      </div>
      <div className="flex justify-center items-center flex-col mt-5">
        <button
          className="disabled:bg-gray-300 bg-black text-white p-5 rounded-md"
          disabled={disableButton}
          onClick={() => setCount(count + 1)}
        >
          Load More Products
        </button>
        {disableButton ? (
          <p className="p-5 mt-2 text-xl font-extrabold">
            you have reached to 100 Products
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default LoadMoreData;
