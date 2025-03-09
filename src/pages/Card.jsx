import { Link } from "react-router-dom";
import { GlobalProvider } from "../hooks/GlobalProvider";
import { IoMdAddCircle, IoIosRemoveCircle } from "react-icons/io";

function Card() {
  const { dispatch, products, decrementAmount, incrementAmount, totalPrice } =
    GlobalProvider();

  if (products.length == 0) {
    return (
      <section className="flex justify-center flex-col gap-5">
        <h1 className="text-center text-3xl ">Empty</h1>
        <div className="mx-auto">
          <Link to={"/"} className="btn btn-primary px-10">
            Buy
          </Link>
        </div>
      </section>
    );
  }
  return (
    <section>
      <div className="overflow-x-auto mb-7 mt-5">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <Link to={`/product/${product.id}`}>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-14 w-14">
                          <img src={product.thumbnail} alt={product.title} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{product.title}</div>
                        <div className="text-sm opacity-50">
                          Brend: {product.brand}
                        </div>
                      </div>
                    </div>
                  </Link>
                </td>
                <td>
                  {product.category}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Shipping: {product.shippingInformation}
                  </span>
                </td>
                <td>$ {product.price}</td>
                <td>
                  <div className="flex gap-4 items-center">
                    <IoIosRemoveCircle
                      className="text-2xl cursor-pointer"
                      onClick={() => {
                        if (product.amount === 1) {
                          dispatch({
                            type: "DELETE_PRODUCT",
                            payload: product.id,
                          });
                          return;
                        }
                        decrementAmount(product.id);
                      }}
                    />
                    <span className="text-xl">{product.amount}</span>
                    <IoMdAddCircle
                      className="text-2xl cursor-pointer"
                      onClick={() => incrementAmount(product.id)}
                    />
                  </div>
                </td>
                <th>
                  <button
                    onClick={() =>
                      dispatch({
                        type: "DELETE_PRODUCT",
                        payload: product.id,
                      })
                    }
                    className="btn btn-secondary btn-xs"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center pb-10">
        <div className="mx-auto">
          <h3>
            <span className="text-gray-400 text-3xl">Total Price: </span>
            <span className="text-blue-700 text-2xl font-semibold">
              ${totalPrice.toFixed(2)}
            </span>
          </h3>
        </div>
      </div>
    </section>
  );
}

export default Card;
