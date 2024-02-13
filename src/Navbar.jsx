import React, { useContext } from "react";

import { CartContext } from "./CartContext";

function Navbar() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="navbar h-28 justify-around bg-base-100 border-b p-0">
      <div className="flex-none mr-8">
        <a className="btn btn-ghost text-xl">
          <img src="./logo.svg" alt="" />
        </a>
      </div>
      <div className=" flex-auto gap-x-8">
        <a
          href="#"
          className="link no-underline text-neutral-700 hover:text-neutral-400 hover:border-b border-primary-800"
        >
          Collections
        </a>
        <a
          href="#"
          className="link no-underline text-neutral-700 hover:text-neutral-400 hover:border-b border-primary-800"
        >
          Men
        </a>
        <a
          href="#"
          className="link no-underline text-neutral-700 hover:text-neutral-400 hover:border-b border-primary-800"
        >
          Women
        </a>
        <a
          href="#"
          className="link no-underline text-neutral-700 hover:text-neutral-400 hover:border-b border-primary-800"
        >
          About
        </a>
        <a
          href="#"
          className="link no-underline text-neutral-700 hover:text-neutral-400 hover:border-b border-primary-800"
        >
          Contact
        </a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <img src="./icon-cart.svg" alt="" />
              {cartItems.length > 0 && (
                <span className="badge badge-sm indicator-item bg-primary-800 text-neutral-100">
                  {cartItems[0].quantity}
                </span>
              )}
            </div>
          </div>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-80 bg-base-100 shadow"
          >
            <div className="card-body">
              <h6 className="card-title border-b border-neutral-500 pb-4">
                Cart
              </h6>

              {cartItems.length > 0 ? (
                <>
                  <div className="flex gap-4">
                    <img src={cartItems[0].thumbnail} alt="" className="w-12" />
                    <div className="text-neutral-600">
                      <p>{cartItems[0].name}</p>
                      <p>
                        $ {cartItems[0].amount} x {cartItems[0].quantity}{" "}
                        <strong className="text-neutral-700">
                          $ {cartItems[0].total}
                        </strong>
                      </p>
                    </div>
                    <button
                      className="btn bg-transparent border-0 hover:bg-transparent"
                      onClick={() => {
                        removeFromCart(cartItems[0]);
                      }}
                    >
                      <img src="./icon-delete.svg" alt="" />
                    </button>
                  </div>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block text-neutral-100">
                      Checkout
                    </button>
                  </div>
                </>
              ) : (
                <p className="text-neutral-600 font-bold text-center my-10">
                  Your cart is empty.
                </p>
              )}
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
