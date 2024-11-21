import React, { useEffect, useState } from "react";

const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchProduct(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const responseData = await response.json();
      if (
        responseData &&
        responseData.products &&
        responseData.products.length > 0
      ) {
        setData(responseData.products);
      }
    } catch (error) {
      setErrorMessage("unable to fetch product");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProduct(url);
  }, [url]);
  function handleScrollPercentage() {
    // console.log(
    //   document.body.scrollTop,
    //   document.documentElement.scrollTop,
    //   document.documentElement.scrollHeight,
    //   document.documentElement.clientHeight
    // );
    const howMuchScrolled =
      document.documentElement.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => window.removeEventListener("scroll", handleScrollPercentage);
  }, []);
//   console.log(scrollPercentage);
  return (
    <div>
      <div className="fixed top-0 z-10 w-full text-center bg-green-700 text-white">
        <h1>Custom Scroll Indicator</h1>
        <div className="w-full h-2 bg-lime-500">
          <div
            className="h-2 bg-purple-700"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="mt-24">
        {loading ? (
          <p>Loading...</p>
        ) : errorMessage ? (
          <p className="text-red-500">{errorMessage}</p>
        ) : data && data.length > 0 ? (
          data.map((dataItem, index) => <p key={index}>{dataItem.title}</p>)
        ) : (
          <p>No data found</p>
        )}
      </div>
    </div>
  );
};

export default ScrollIndicator;
