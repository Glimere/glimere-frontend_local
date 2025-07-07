import { useCartStore } from "@/store/cartStore";
import useUserStore from "@/store/userStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

import Checkout from "../../../public/images/checkout.svg";
import { Button } from "../ui/button";

const CheckoutSummary: React.FC = () => {
  const { isAuthenticated, user } = useUserStore();
  const { cart } = useCartStore();

  const router = useRouter();

  // Calculate subtotal
  const subtotal =
    cart?.items?.reduce(
      (total, item) => total + item.apparel.apparel_price * item.quantity,
      0,
    ) || 0;

  // Define shipping cost (e.g., flat rate or condition-based)
  const shippingCost = subtotal >= 50 ? 0 : 5; // Example: Free shipping for orders over €50

  // Calculate total
  const total = subtotal + shippingCost;

  return (
    <div className="flex min-h-[80vh] w-full max-w-md flex-col justify-center gap-[1rem] rounded-[1.6rem] bg-transparent-white-100 p-[2rem]">
      {/* Address Section */}
      {isAuthenticated ? (
        <>
          <div className="mb-6">
            <h2 className="mb-2 text-base font-bold">
              {user?.first_name} {user?.last_name}
            </h2>
            <p className="mb-1">{user?.address?.street}</p>
            <p className="mb-1">{user?.address?.nearest_bus_stop}</p>
            <p className="mb-1">{user?.address?.country}</p>
            <button className="text-primary-100 hover:underline">Edit</button>
          </div>

          {/* Payment Method Section */}
          <div className="mb-6">
            <h3 className="mb-2 text-base font-semibold">Payment method</h3>
            <p className="mb-1">{user?.preferred_payment_method}</p>
            <button className="text-primary-100 hover:underline">Edit</button>
          </div>

          {/* Discount Code Section */}
          <div className="mb-6">
            <h3 className="mb-2 text-base font-semibold">
              Do you have any discount code?
            </h3>
            <p className="mb-2 text-sm">
              Only one discount code per order can be applied.
            </p>
            <div className="flex items-center rounded-full bg-[#ffffff] p-2">
              <input
                type="text"
                placeholder="Enter discount code"
                className="mr-2 flex-grow rounded-md p-2 outline-none"
              />
              <Button className="rounded-full bg-primary-100 text-white">
                APPLY
              </Button>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="mb-6">
            <div className="mb-2 flex justify-between">
              <span>Subtotal ({cart?.items.length} items)</span>
              <span>€{subtotal.toFixed(2)}</span>
            </div>
            <div className="mb-2 flex justify-between">
              <span>Shipping costs</span>
              <span className={shippingCost === 0 ? "text-green-500" : ""}>
                {shippingCost === 0 ? "FREE!" : `€${shippingCost.toFixed(2)}`}
              </span>
            </div>
            <div className="mb-2 flex justify-between">
              <span>Discount</span>
              <span>€0</span>
            </div>
            <div className="mb-2 flex justify-between text-lg font-bold">
              <span>Total (incl. VAT)</span>
              <span>€{total.toFixed(2)}</span>
            </div>
          </div>

          {/* Checkout Button */}
          <Link
            href={isAuthenticated ? "/shoppers/checkout" : "/auth/shoppers"}
          >
            <Button className="w-full rounded-full bg-primary-100 text-base text-white">
              Checkout
            </Button>
          </Link>
        </>
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <div className="text-center">
            {/* Empty Bag Icon */}
            <Checkout className="mx-auto text-gray-400" />
            {/* Friendly Message */}
            <p className="mt-4 text-[20px] text-gray-600">
              Oops! You need to log in to check out.
            </p>
            <p className="mt-2 text-[14px] text-gray-500">
              Don’t worry, it’s quick and easy!
            </p>
            {/* Button to Start Shopping */}
            <Button
              className="hover:bg-primary-200 mt-6 rounded-full bg-primary-100 px-8 py-3 text-white"
              onClick={() => router.push("/auth/shoppers/login")} // Redirect to the homepage or shopping page
            >
              Login
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutSummary;
