import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-rose-100 flex-col md:flex-row bold">
      <div className="">
        <a className="btn btn-ghost normal-case text-xl">Recipe-Garden</a>
      </div>
      <div className=" flex-col md:flex-row mx-auto my-0">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Home
        </Link>
        <Link to="/blog" className="btn btn-ghost normal-case text-xl">
          Blog
        </Link>
      </div>
      {/* <div className="flex-auto">
        <Link to="/blog" className="btn btn-ghost normal-case text-xl">
          Blog
        </Link>
      </div> */}

      <div className="flex-start gap-2">
        <button>login</button>
        <button>logOut</button>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
            {/* hefhdhe */}
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
