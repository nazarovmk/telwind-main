import { useState, useEffect } from "react";
import ProductsList from "../components/ProductsList";
import { UseFetch } from "../hooks/UseFetch";
import { SyncLoader } from "react-spinners";

function Home() {
  const { data, isPending, error } = UseFetch(
    "https://dummyjson.com/products?limit=194"
  );
  console.log(data);

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isPending || !showContent) {
    return (
      <section className="main-container flex justify-center items-center h-screen">
        <SyncLoader />
      </section>
    );
  }

  if (!isPending && error) {
    return (
      <section className="main-container flex justify-center items-center h-screen">
        <div role="alert" className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Error! Task failed successfully.</span>
        </div>
      </section>
    );
  }

  return (
    <section className="main-container">
      <h2 className="text-4xl font-bold mb-10 flex justify-center">Product</h2>
      {data && <ProductsList products={data.products} />}
    </section>
  );
}

export default Home;
