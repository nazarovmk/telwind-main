import { useParams } from "react-router-dom";
import { UseFetch } from "../hooks/UseFetch";
import { GlobalProvider } from "../hooks/GlobalProvider";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

function Product() {
  const { id } = useParams();
  const { dispatch, products } = GlobalProvider();
  const { data, isPending, error } = UseFetch(
    `https://dummyjson.com/product/${id}`
  );

  const addProduct = (product) => {
    const item = products.find((p) => p.id == product.id);
    if (item) {
      toast.warn("Already Added");
      return;
    }
    toast.success("Product Added");
    dispatch({
      type: "ADD_PRODUCT",
      payload: { ...product, amount: 1 },
    });
  };

  if (isPending) {
    return (
      <section className="main-container">
        <h2 className="text-4xl font-bold mb-5">Product</h2>
      </section>
    );
  }

  return (
    <>
      {data && (
        <section className="main-container pb-10">
          <h2 className="text-4xl font-bold mb-15 text-center">
            Product - {data.title}
          </h2>
          <div className="flex gap-15">
            <div className="p-7 bg-gray-200 w-[500px] rounded-2xl">
              <img
                className="w-[500px] h-[500px] transition-transform duration-300 hover:scale-110 cursor-pointer"
                src={data.images[0]}
                alt=""
              />
            </div>
            <div>
              <h2 className="w-[500px] mb-3 text-2xl">{data.description}</h2>
              <h2 className="text-xl mb-3">
                <span className="text-blue-700 font-extrabold">
                  shippingInformation:
                </span>
                {data.shippingInformation}
              </h2>
              <h2 className="mb-3 text-xl">
                <span className="text-blue-700 font-extrabold">
                  returnPolicy
                </span>
                : {data.returnPolicy}
              </h2>
              <h2 className="mb-3 text-xl">
                <span className="text-blue-700 font-extrabold">
                  availabilityStatus:
                </span>
                {data.availabilityStatus}
              </h2>
              <h3 className="mb-2 text-[20px]">
                <span className="text-blue-700 font-extrabold">brand: </span>
                {data.brand}
              </h3>
              <h3 className="mb-2 text-[20px]">
                <span className="text-blue-700 font-extrabold">category: </span>
                {data.category}
              </h3>
              <h3 className="mb-2 text-[20px]">
                <span className="text-blue-700 font-extrabold">rating: </span>✨
                {data.rating}
              </h3>
              <p className="mb-2 text-[20px]">
                <span className="text-blue-700 font-extrabold">chegirma: </span>
                ${data.discountPercentage}
              </p>
              <div className="flex justify-between items-center">
                <h2 className="text-3xl">
                  <span className="text-blue-800 font-extrabold">Price: </span>$
                  {data.price}
                </h2>
                <button
                  onClick={() => addProduct(data)}
                  className="btn btn-primary px-10 py-6 cursor-pointer transition-transform duration-300 hover:scale-110"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Product;
