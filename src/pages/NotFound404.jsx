import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  if (error.status == 404) {
    return (
      <div className="grid justify-center items-center min-h-screen place-items-center text-center text-base-content">
        <div className="flex gap-y-[30px] flex-col items-center">
          <img
            src="https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif"
            alt=""
          />
          <h3 className="text-[28px] font-medium leading-none text-[#313E51] w-[995px] text-center">
            404 Error: Page not found. But don't worry, our developers are on a
            treasure hunt to recover it. Meanwhile, enjoy some virtual tea and
            biscuits!
          </h3>
          <Link to="/" className="btn btn-primary rounded-xl">
            Go To Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="grid justify-center items-center min-h-screen place-items-center text-center text-base-content">
      <div className="flex gap-y-[30px] flex-col items-center">
        <img
          src="https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif"
          alt=""
        />
        <h3 className="text-[28px] font-medium leading-none text-[#313E51] w-[995px] text-center">
          Oops! Looks like our web page did a somersault and landed in a digital
          rabbit hole. We're working on untangling the code. Hang tight!
        </h3>
        <Link to="/" className="btn btn-primary rounded-xl">
          Go To Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
