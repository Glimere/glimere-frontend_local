import QuantityUpdater from "@/components/cart/quantityUpdater";
import useOrderStore from "@/store/orderStore";
import { NextPage } from "next";
import Image from "next/image";
import ShippingEditModal from "./ShippingEditModal";
import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { X, Truck, Globe, Home } from "lucide-react";
import useUserStore from "@/store/userStore";
import useFetch from "@/hooks/useFetch";
import { usePrice } from "@/utils/usePrice";
import { ShippingAddress } from "@/types";

type ContactInfo = {
  email: string;
  phone: string;
};

type CostRange = {
  min: number;
  max: number;
};

type GeoCoordinates = {
  latitude: number;
  longitude: number;
};

type Location = {
  geoCoordinates: GeoCoordinates;
  country: string;
  state: string;
  city: string;
  zipCode: string;
  addressLine: string;
  _id: string;
};

type Courier = {
  contact_info: ContactInfo;
  costRange: CostRange;
  _id: string;
  name: string;
  approximateDeliveryTime: string;
  trackingURLTemplate: string;
  regions: string[];
  location: Location;
  __v: number;
};

type ShippingOption = {
  _id: string;
  name: string;
  couriers: Courier[];
  description: string;
  __v: number;
};

interface ShippingFee {
  shipping_option: ShippingOption;
  city: { fee: number }[];
}

interface OrderItem {
  apparel: {
    apparel_name: string;
    apparel_images: { url: string }[];
    apparel_price: number;
  };
  selected_colors: { name: string }[];
  selected_sizes: { short_name: string }[];
}

interface SelectedOrder {
  shipping_address: ShippingAddress;
  items: OrderItem[];
}

const ConfirmTab: NextPage = () => {
  const { selectedOrder } = useOrderStore() as { selectedOrder: SelectedOrder };
  const { formatPrice } = usePrice();
  const { user } = useUserStore();

  const [shippingInfo, setShippingInfo] = useState<ShippingFee | null>(null);
  const [selectedTab, setSelectedTab] = useState<string>("local");
  const { data: shippingOptions, loading: shippingOptionLoading } =
    useFetch<ShippingOption[]>(`/shipping_option`);
  const { data: shippingFee, loading: shippingFeeLoading } = useFetch<{
    data: ShippingFee[];
  }>(
    `/shipping_fee/query?country=${selectedOrder.shipping_address.country}&state=${selectedOrder.shipping_address.state}&shipping_type=${selectedTab}&city=${selectedOrder.shipping_address.city}`
  );

  console.log('shippingOptions', shippingOptions)
  console.log("shippingFee",shippingFee)

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <h1 className="text-2xl font-bold my-6 ml-2">Order Summary</h1>

      <div className="max-h-[27rem] overflow-y-auto pr-[10px] flex flex-col gap-[20px]">
        <section className="bg-transparent-white-200 p-6 rounded-[10px] shadow-sm">
          <div className="flex justify-between items-start border-b border-solid border-b-gray-200">
            <h2 className="text-lg font-semibold">Customer Address</h2>
            <ShippingEditModal address={selectedOrder.shipping_address}>
              <div className="text-primary-500 font-medium text-primary-100 cursor-pointer">
                Change
              </div>
            </ShippingEditModal>
          </div>
          <p className="text-gray-700 mt-2">
            {selectedOrder.shipping_address.location_name}
            <br />
            {selectedOrder.shipping_address.address},{" "}
            {selectedOrder.shipping_address.city},{" "}
            {selectedOrder.shipping_address.state}
            <br />
            {selectedOrder.shipping_address.phoneNumber}
          </p>
        </section>

        <div className="flex flex-col gap-[20px] p-6 bg-transparent-white-200 rounded-[10px]">
          <div className="flex flex-col gap-[20px] p-6 bg-transparent-white-200 rounded-[10px]">
            <div className="flex justify-between items-start border-b border-solid border-b-gray-200">
              <h2 className="text-lg font-semibold">Delivery Details</h2>
              <Dialog>
                <DialogTrigger>
                  <button className="text-primary-500 font-medium">Change</button>
                </DialogTrigger>
                <DialogContent className="max-w-[600px]">
                  <DialogTitle className="flex justify-between items-center">
                    Select Delivery Method
                    <button>
                      <X className="w-5 h-5" />
                    </button>
                  </DialogTitle>
                  <div className="flex space-x-4 mt-4">
                    {["standard", "express", "local", "international"].map(
                      (type) => (
                        <div
                          key={type}
                          onClick={() => setSelectedTab(type)}
                          className={`cursor-pointer flex-1 text-center p-3 rounded-lg transition-all border-solid border-[2px] duration-300 ${
                            selectedTab === type
                              ? "bg-transparent-white-300 text-dark border-primary-100"
                              : "bg-gray-100 text-dark"
                          }`}
                        >
                          <div className="flex flex-col gap-[10px] items-center">
                            {type === "standard" && <Truck />}
                            {type === "express" && <Truck />}
                            {type === "local" && <Home />}
                            {type === "international" && <Globe />}
                            <p className="capitalize">{type} Shipping</p>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="p-4 border rounded-lg flex justify-between items-center">
                      <div>
                        <p className="font-semibold">
                          {shippingFee?.data[0]?.shipping_option?.couriers[0]?.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          {
                            shippingFee?.data[0]?.shipping_option?.couriers[0]
                              ?.approximateDeliveryTime
                          }
                        </p>
                      </div>
                      <p className="font-bold text-gray-800">
                        {formatPrice(shippingFee?.data[0]?.city[0]?.fee)}
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
      
              <section className="bg-transparent-white-200 p-6 rounded-[5px] shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Shipment Summary</h3>
                <p className="text-gray-700">
                  <span className="font-semibold">Courier:</span>{" "}
                  {shippingInfo?.shipping_option?.couriers[0]?.name}
                </p>
                <p className="text-gray-700 mt-1">
                  <span className="font-semibold">Delivery Estimate:</span>{" "}
                  {
                    shippingInfo?.shipping_option?.couriers[0]
                      ?.approximateDeliveryTime
                  }
                </p>
                <p className="text-gray-700 mt-1">
                  <span className="font-semibold">Cost:</span> $
                  {shippingInfo?.city[0]?.fee}
                </p>
              </section>
      
          </div>
          <section className="bg-transparent-white-200 p-6 rounded-[5px] shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Delivery Notes</h3>
            <textarea
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-primary-200"
              placeholder="Add any specific instructions for the delivery (e.g., Leave at the front door)"
              rows={4}
            ></textarea>
          </section>
        </div>
        <section className="bg-transparent-white-200 p-6 rounded-[10px] shadow-sm">
          <h2 className="text-lg font-semibold">Order Items</h2>
          <div className="mt-4 space-y-4">
            {selectedOrder.items.map((order, id) => (
              <div
                key={id}
                className="flex items-center justify-between bg-gray-100 p-6 rounded-md"
              >
                <div className="flex gap-6">
                  <div className="h-20 w-20 rounded-[10px] overflow-hidden">
                    <Image
                      height={200}
                      width={200}
                      alt={order.apparel.apparel_name}
                      src={order.apparel.apparel_images[0].url}
                      className="object-cover h-full w-full"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">
                      {order.apparel.apparel_name}
                    </p>
                    <div className="text-sm text-gray-600 mt-1">
                      <p>
                        <span className="font-medium">Color:</span>{" "}
                        {order.selected_colors
                          .map((color) => color.name)
                          .join(", ")}
                      </p>
                      <p>
                        <span className="font-medium">Size:</span>{" "}
                        {order.selected_sizes
                          .map((size) => size.short_name)
                          .join(", ")}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="font-bold text-lg text-gray-800">
                  {formatPrice(order.apparel.apparel_price)}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ConfirmTab;
