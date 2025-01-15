import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import useUserStore from "@/store/userStore";
import { useCartStore } from "@/store/cartStore";
import { useRouter } from "next/navigation";
import Checkout from "../../../public/images/checkout.svg";

const CheckoutSummary: React.FC = () => {
  const { isAuthenticated, user } = useUserStore();
  const { cart } = useCartStore();

  const router = useRouter();

  // Calculate subtotal
  const subtotal =
    cart?.items?.reduce(
      (total, item) => total + item.apparel.apparel_price * item.quantity,
      0
    ) || 0;

  // Define shipping cost (e.g., flat rate or condition-based)
  const shippingCost = subtotal >= 50 ? 0 : 5; // Example: Free shipping for orders over €50

  // Calculate total
  const total = subtotal + shippingCost;

  return (
    <div className="flex flex-col justify-center rounded-[1.6rem] bg-transparent-white-100 gap-[1rem] p-[2rem] w-full max-w-md min-h-[80vh]">
      {/* Address Section */}
      {isAuthenticated ? (
        <>
          <div className="mb-6">
            <h2 className="text-base font-bold mb-2">
              {user?.first_name} {user?.last_name}
            </h2>
            <p className="mb-1">{user?.address.street}</p>
            <p className="mb-1">{user?.address.nearest_bus_stop}</p>
            <p className="mb-1">{user?.address.country}</p>
            <button className="text-primary-100 hover:underline">Edit</button>
          </div>

          {/* Payment Method Section */}
          <div className="mb-6">
            <h3 className="text-base font-semibold mb-2">Payment method</h3>
            <p className="mb-1">{user?.preferred_payment_method}</p>
            <button className="text-primary-100 hover:underline">Edit</button>
          </div>

          {/* Discount Code Section */}
          <div className="mb-6">
            <h3 className="text-base font-semibold mb-2">
              Do you have any discount code?
            </h3>
            <p className="text-sm mb-2">
              Only one discount code per order can be applied.
            </p>
            <div className="flex items-center bg-[#ffffff] rounded-full p-2">
              <input
                type="text"
                placeholder="Enter discount code"
                className="outline-none p-2 rounded-md flex-grow mr-2"
              />
              <Button className="bg-primary-100 text-white rounded-full">
                APPLY
              </Button>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span>Subtotal ({cart?.items.length} items)</span>
              <span>€{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping costs</span>
              <span className={shippingCost === 0 ? "text-green-500" : ""}>
                {shippingCost === 0 ? "FREE!" : `€${shippingCost.toFixed(2)}`}
              </span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Discount</span>
              <span>€0</span>
            </div>
            <div className="flex justify-between font-bold text-lg mb-2">
              <span>Total (incl. VAT)</span>
              <span>€{total.toFixed(2)}</span>
            </div>
          </div>

          {/* Checkout Button */}
          <Link href={isAuthenticated ? "/shoppers/checkout" : "/signin"}>
            <Button className="bg-primary-100 text-white w-full rounded-full text-base">
              Checkout
            </Button>
          </Link>
        </>
      ) : (
        <div className="flex justify-center items-center h-full w-full">
          <div className="text-center">
            {/* Empty Bag Icon */}
            <Checkout className="mx-auto text-gray-400" />
            {/* Friendly Message */}
            <p className="text-[20px] text-gray-600 mt-4">
              Oops! You need to log in to check out.
            </p>
            <p className="text-[14px] text-gray-500 mt-2">
              Don’t worry, it’s quick and easy!
            </p>
            {/* Button to Start Shopping */}
            <Button
              className="mt-6 bg-primary-100 text-white px-8 py-3 rounded-full hover:bg-primary-200"
              onClick={() => router.push("/signin")} // Redirect to the homepage or shopping page
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
