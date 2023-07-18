import { useEffect } from "react";
import { Link } from "react-router-dom";

const Nav = ({ state, setState }) => {
  window.addEventListener("resize", () => handleState());

  const handleState = () => {
    if (window.innerWidth < 1440) setState(false);
    else setState(true);
  };
  useEffect(() => {
    handleState();
  }, []);

  return (
    <>
      {state && (
        <div
          onClick={() => handleState()}
          id="nav"
          className="fixed left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.4)] lg:bg-transparent lg:relative"
        >
          <div className="h-full w-96  absolute text-2xl text-slate-600 bg-white top-0 lg:top-[1.75rem] lg:left-1/2 lg:-translate-x-2/3 lg:w-[38rem] lg:h-7 lg:bg-transparent lg:text-white ">
            <button type="button" className="lg:hidden group">
              <svg
                width="30"
                height="30"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-4 mt-3 mb-6 "
              >
                <path
                  d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                  className="fill-black group-hover:fill-red-500"
                />
              </svg>
            </button>

            <ul className="lg:flex lg:justify-around">
              <li className="mb-6 ml-4 text-2xl">
                <Link to="/">Collections </Link>
              </li>

              <li className="mb-6 ml-4 text-2xl">
                <Link to="/about">About </Link>
              </li>
              <li className="mb-6 ml-4 text-2xl">
                <Link to="/contact">Contact </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
