import React from "react";

function Navbar() {
  return (
    <div className="navbar h-28 justify-around bg-base-100 border p-0">
      <div className="flex-none mr-8">
        <a className="btn btn-ghost text-xl">
          <img src="./logo.svg" alt="" />
        </a>
      </div>
      <div className=" flex-auto gap-x-8">
        <a
          href="#"
          className="link no-underline text-neutral-700 hover:text-neutral-400 border"
        >
          Collections
        </a>
        <a
          href="#"
          className="link no-underline text-neutral-700 hover:text-neutral-400"
        >
          Men
        </a>
        <a
          href="#"
          className="link no-underline text-neutral-700 hover:text-neutral-400"
        >
          Women
        </a>
        <a
          href="#"
          className="link no-underline text-neutral-700 hover:text-neutral-400"
        >
          About
        </a>
        <a
          href="#"
          className="link no-underline text-neutral-700 hover:text-neutral-400"
        >
          Contact
        </a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <img src="./icon-cart.svg" alt="" />
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="./image-avatar.png"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
