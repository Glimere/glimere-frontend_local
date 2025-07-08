"use client";

import { useJwt } from "@/hooks/useJwt";
import useOrderStore from "@/store/orderStore";
import { useShippingAddressStore } from "@/store/shippingStore";
import { ShippingAddress } from "@/types";
import { Pencil, PlusCircle } from "lucide-react";

import ShippingAddModal from "./ShippingAddModal";
import ShippingEditModal from "./ShippingEditModal";

const ShippingTab = () => {
  const jwt = useJwt();
  const { addresses, loading } = useShippingAddressStore();
  const { selectedOrder, setShippingAddress } = useOrderStore();

  const handleAddressClick = (address: ShippingAddress) => {
    setShippingAddress(address);
  };

  return (
    <div className="bg-white-100 flex h-full w-full flex-col gap-10">
      <div className="bg-white-100 flex-[7]">
        <h1 className="my-6 text-2xl font-bold">Choose Shipping Address</h1>
        <div className="grid grid-cols-2 gap-6">
          {loading
            ? Array(4)
                .fill(null)
                .map((_, index) => (
                  <div
                    key={index}
                    className="animate-pulse rounded-lg border border-gray-100 p-6"
                  />
                ))
            : addresses.map((address) => (
                <div
                  key={address._id}
                  className={`cursor-pointer rounded-lg border-[2px] border-solid bg-transparent-white-200 p-6 backdrop-blur-md duration-150 hover:bg-gray-50 ${
                    selectedOrder.shipping_address._id === address._id
                      ? "border-primary-100"
                      : ""
                  }`}
                  onClick={() => handleAddressClick(address)}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <h1>{address.location_name}</h1>
                    <ShippingEditModal address={address}>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full p-2 hover:bg-gray-100">
                        <Pencil className="h-5 w-5 text-[#ED7534]" />
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
            <div className="flex cursor-pointer items-center justify-center rounded-lg border bg-transparent-white-200 p-6 backdrop-blur-md hover:bg-gray-50">
              <h1 className="mr-2">Add new address</h1>
              <PlusCircle className="h-8 w-8 text-[#ED7534]" />
            </div>
          </ShippingAddModal>
        </div>
      </div>
    </div>
  );
};

export default ShippingTab;
