"use client";

import { Pencil, PlusCircle } from "lucide-react";
import { useShippingAddressStore } from "@/store/shippingStore";
import { useJwt } from "@/hooks/useJwt";
import useOrderStore from "@/store/orderStore";
import ShippingEditModal from "./ShippingEditModal";
import ShippingAddModal from "./ShippingAddModal";
import { ShippingAddress } from "@/types";

const ShippingTab = () => {
  const jwt = useJwt();
  const { addresses, loading } =
    useShippingAddressStore();
  const { selectedOrder, setShippingAddress } = useOrderStore();

  const handleAddressClick = (address: ShippingAddress) => {
    setShippingAddress(address);
  };

  return (
    <div className="w-full h-full flex flex-col gap-10 bg-white-100">
      <div className="flex-[7] bg-white-100">
        <h1 className="text-2xl font-bold my-6">Choose Shipping Address</h1>
        <div className="grid grid-cols-2 gap-6">
          {loading
            ? Array(4)
                .fill(null)
                .map((_, index) => (
                  <div
                    key={index}
                    className="animate-pulse border border-gray-100 rounded-lg p-6"
                  />
                ))
            : addresses.map((address) => (
                <div
                  key={address._id}
                  className={`border-[2px] bg-transparent-white-200 cursor-pointer border-solid rounded-lg p-6 hover:bg-gray-50 duration-150 ${
                    selectedOrder.shipping_address._id === address._id
                      ? "border-primary-100"
                      : ""
                  }`}
                  onClick={() => handleAddressClick(address)}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h1>{address.location_name}</h1>
                    <ShippingEditModal address={address}>
                      <div className="h-12 w-12 flex justify-center items-center rounded-full p-2 hover:bg-gray-100">
                        <Pencil className="w-5 h-5 text-[#ED7534]" />
                      </div>
                    </ShippingEditModal>
                  </div>
                  <div>
                    <p>{address.address}</p>
                    <p>{`${address.city}, ${address.state}, ${address.country}`}</p>
                    <p>{address.phoneNumber}</p>
                  </div>
                </div>
              ))}

          <ShippingAddModal>
            <div className="flex items-center bg-transparent-white-200 justify-center border rounded-lg p-6 hover:bg-gray-50 cursor-pointer">
              <h1 className="mr-2">Add new address</h1>
              <PlusCircle className="w-8 h-8 text-[#ED7534]" />
            </div>
          </ShippingAddModal>
        </div>
      </div>
    </div>
  );
};

export default ShippingTab;
