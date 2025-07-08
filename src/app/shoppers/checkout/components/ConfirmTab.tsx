/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import useFetch from "@/hooks/useFetch";
import { renderImageUrl } from "@/hooks/useRenderImageUrl";
import useOrderStore from "@/store/orderStore";
import useUserStore from "@/store/userStore";
import { City } from "@/types";
import { usePrice } from "@/utils/usePrice";
import { Globe, Home, Truck } from "lucide-react";
import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";

import ShippingEditModal from "./ShippingEditModal";

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
  city: City[];
  country: string;
  fee: { standard: number };
  shipping_type: string;
  state: string;
}

interface ShippingFeeApi {
  data: ShippingFee[];
  status: string;
  message: string;
}

interface ShippingOptionApi {
  data: ShippingOption[];
  status: string;
  message: string;
}

const ConfirmTab: NextPage = () => {
  const {
    selectedOrder,
    setSelectedShippingOption,
    setSelectedCourier,
    setSelectedCity,
    setSelectedDeliveryNotes,
    setSelectedShippingFee,
  } = useOrderStore();
  //  as { selectedOrder: SelectedOrder };
  const { formatPrice } = usePrice();
  const { user } = useUserStore();

  const [shippingInfo, setShippingInfo] = useState<ShippingFee | null>(null);
  const [selectedTab, setSelectedTab] = useState<string>("Local");
  const [doorDelivery, setDoorDelivery] = useState(false);
  const { data: shippingOptions, loading: shippingOptionLoading } =
    useFetch<ShippingOptionApi>(`/shipping_option`);
  const { data: shippingFee, loading: shippingFeeLoading } =
    useFetch<ShippingFeeApi>(
      `/shipping_fee/query?country=${user?.address?.country}&state=${
        user?.address?.state
      }&shipping_type=${selectedTab.toLowerCase()}&city=${
        selectedOrder.shipping_address.city
      }`,
    );

  useEffect(() => {
    if (shippingOptions) {
      const courier = shippingFee?.data[0]?.shipping_option?.couriers[0];
      if (courier) {
        setSelectedCourier(courier);
      }
      if (shippingFee?.data[0]?.shipping_option) {
        setSelectedShippingOption(shippingFee.data[0].shipping_option);
        setSelectedShippingFee(shippingFee?.data[0]?.fee?.standard);
      }
    }
  }, [
    setSelectedCourier,
    setSelectedShippingOption,
    setSelectedShippingFee,
    shippingFee?.data,
    shippingOptions,
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSelectedDeliveryNotes(e.target.value);
  };

  console.log("selectedOrder", selectedOrder);

  return (
    <div className="flex h-full w-full flex-col gap-4">
      <h1 className="my-6 ml-2 text-2xl font-bold">Order Summary</h1>

      <div className="flex max-h-[32rem] flex-col gap-[20px] overflow-y-auto pr-[10px]">
        <section className="rounded-[10px] bg-transparent-white-200 p-6 shadow-sm backdrop-blur-md">
          <div className="flex items-start justify-between border-b border-solid border-b-gray-200">
            <h2 className="text-lg font-semibold">Customer Address</h2>
            <ShippingEditModal address={selectedOrder.shipping_address}>
              <div className="text-primary-500 cursor-pointer font-medium text-primary-100">
                Change
              </div>
            </ShippingEditModal>
          </div>
          <p className="mt-2 text-gray-700">
            {selectedOrder.shipping_address?.location_name}
            <br />
            {selectedOrder.shipping_address?.address},{" "}
            {selectedOrder.shipping_address?.city},{" "}
            {selectedOrder.shipping_address?.state}
            <br />
            {selectedOrder.shipping_address?.phoneNumber}
          </p>
        </section>

        <div className="flex flex-col gap-[20px] rounded-[10px] bg-transparent-white-200 p-6 backdrop-blur-md">
          <div className="flex flex-col gap-[20px] rounded-[10px] bg-transparent-white-200 p-6 backdrop-blur-md">
            <div className="flex items-start justify-between border-b border-solid border-b-gray-200">
              <h2 className="text-lg font-semibold">Delivery Details</h2>
              <Dialog>
                <DialogTrigger>
                  <button className="font-medium text-primary-100">
                    Change
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-[600px]">
                  <DialogTitle className="flex items-center justify-between">
                    Select Delivery Method
                  </DialogTitle>
                  <div className="mt-4 flex space-x-4">
                    {shippingOptionLoading ? (
                      <>
                        <div
                          className={`flex-1 animate-pulse cursor-pointer rounded-lg border-[2px] border-solid bg-gray-100 p-3 text-center transition-all duration-300`}
                        ></div>
                        <div
                          className={`flex-1 animate-pulse cursor-pointer rounded-lg border-[2px] border-solid bg-gray-100 p-3 text-center transition-all duration-300`}
                        ></div>
                        <div
                          className={`flex-1 animate-pulse cursor-pointer rounded-lg border-[2px] border-solid bg-gray-100 p-3 text-center transition-all duration-300`}
                        ></div>
                        <div
                          className={`flex-1 animate-pulse cursor-pointer rounded-lg border-[2px] border-solid bg-gray-100 p-3 text-center transition-all duration-300`}
                        ></div>
                      </>
                    ) : (
                      shippingOptions?.data?.map((options) => (
                        <div
                          key={options._id}
                          onClick={() => {
                            setSelectedTab(options?.name);
                            setShippingInfo(shippingFee?.data[0] || null);
                            setSelectedShippingFee(
                              shippingFee?.data[0]?.fee?.standard ?? 0,
                            );
                          }}
                          className={`flex-1 cursor-pointer rounded-lg border-[2px] border-solid p-3 text-center transition-all duration-300 ${
                            selectedTab === options?.name
                              ? "border-primary-100 bg-transparent-white-300 text-dark backdrop-blur-md"
                              : "bg-gray-100 text-dark"
                          }`}
                        >
                          <div className="flex flex-col items-center gap-[10px]">
                            {options?.name === "Standard" && <Truck />}
                            {options?.name === "Express" && <Truck />}
                            {options?.name === "Local" && <Home />}
                            {options?.name === "International" && <Globe />}
                            <p className="capitalize">
                              {options?.name} Shipping
                            </p>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center justify-between rounded-lg border p-4">
                      <div>
                        <p className="font-semibold">
                          {
                            shippingFee?.data[0]?.shipping_option?.couriers[0]
                              ?.name
                          }
                        </p>
                        <p className="text-sm text-gray-600">
                          {
                            shippingFee?.data[0]?.shipping_option?.couriers[0]
                              ?.approximateDeliveryTime
                          }
                        </p>
                      </div>
                      <p className="font-bold text-gray-800">
                        {formatPrice(shippingFee?.data[0]?.fee?.standard)}
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="mt-6 space-y-4">
              <>
                <div className="rounded-lg border p-4 duration-300 hover:bg-gray-50">
                  <div
                    className="flex cursor-pointer flex-row items-center justify-between"
                    onClick={() => setDoorDelivery(!doorDelivery)}
                  >
                    <span className="font-bold">Checkpoint Delivery</span>
                    <div className="">
                      <Input
                        type="checkbox"
                        className="self-end"
                        checked={!doorDelivery}
                      />
                    </div>
                  </div>

                  {!doorDelivery ? (
                    <>
                      <div className="flex items-center justify-between rounded-lg border p-4">
                        <div>
                          <p className="font-semibold">
                            {
                              selectedOrder.selected_shippingOption
                                ?.couriers?.[0]?.name
                            }
                          </p>
                          <p className="text-sm text-gray-600">
                            {
                              selectedOrder.selected_shippingOption
                                ?.couriers?.[0]?.approximateDeliveryTime
                            }
                          </p>
                        </div>
                        <p className="font-bold text-gray-800">
                          {formatPrice(selectedOrder?.shipping_fee)}
                        </p>
                      </div>
                    </>
                  ) : null}
                </div>
              </>

              {selectedOrder.selected_shippingOption ? (
                <>
                  <div className="rounded-lg border p-4 duration-300 hover:bg-gray-50">
                    <div
                      className="flex cursor-pointer flex-row items-center justify-between"
                      onClick={() => setDoorDelivery(!doorDelivery)}
                    >
                      <span className="font-bold">Door Delivery</span>
                      <div className="">
                        <Input
                          type="checkbox"
                          className="self-end"
                          checked={doorDelivery}
                        />
                      </div>
                    </div>

                    {doorDelivery ? (
                      <>
                        <div>
                          <label className="mb-2 block text-sm font-medium text-gray-700">
                            Select Location Area
                          </label>
                          <Select
                            onValueChange={(value) => {
                              const selectedCity =
                                shippingFee?.data[0]?.city?.find(
                                  (city: City) => city.name === value,
                                );
                              if (selectedCity) {
                                setSelectedCity(selectedCity); // Update the selected city in the state or store
                              }
                            }}
                          >
                            <SelectTrigger className="w-full rounded-lg border bg-white text-gray-700 shadow-sm">
                              <SelectValue placeholder="Select location area" />
                            </SelectTrigger>
                            <SelectContent>
                              {(shippingFee?.data[0]?.city?.length ?? 0 > 0) ? (
                                shippingFee?.data[0]?.city.map(
                                  (city: City, index: number) => (
                                    <SelectItem key={index} value={city.name}>
                                      {city.name}
                                    </SelectItem>
                                  ),
                                )
                              ) : (
                                <SelectItem
                                  value="none"
                                  disabled
                                  className="text-gray-500"
                                >
                                  No locations available
                                </SelectItem>
                              )}
                            </SelectContent>
                          </Select>
                        </div>

                        {selectedOrder?.selected_city && (
                          <div className="mt-4 flex items-center justify-between rounded-lg border p-4">
                            <div>
                              <p className="font-semibold">
                                {
                                  selectedOrder.selected_shippingOption
                                    ?.couriers[0]?.name
                                }
                              </p>
                              <p className="text-sm text-gray-600">
                                {
                                  selectedOrder.selected_shippingOption
                                    ?.couriers[0]?.approximateDeliveryTime
                                }
                              </p>
                              <p className="text-sm text-gray-600">
                                {selectedOrder.selected_city.name}
                              </p>
                            </div>
                            <p className="font-bold text-gray-800">
                              {formatPrice(selectedOrder?.selected_city?.fee)}
                            </p>
                          </div>
                        )}
                      </>
                    ) : null}
                  </div>
                </>
              ) : null}
            </div>
          </div>
          <section className="rounded-[5px] bg-transparent-white-200 p-6 shadow-sm backdrop-blur-md">
            <h3 className="mb-2 text-lg font-semibold">Delivery Notes</h3>
            <Textarea
              className="focus:ring-primary-200 w-full rounded-lg border border-gray-300 p-4 focus:outline-none focus:ring"
              placeholder="Add any specific instructions for the delivery (e.g., Leave at the front door)"
              rows={4}
              onChange={handleInputChange}
            ></Textarea>
          </section>
        </div>
        <section className="rounded-[10px] bg-transparent-white-200 p-6 shadow-sm backdrop-blur-md">
          <h2 className="text-lg font-semibold">Order Items</h2>
          <div className="mt-4 space-y-4">
            {selectedOrder.items?.map((order, id) => (
              <div
                key={id}
                className="flex items-center justify-between rounded-md bg-gray-100 p-6"
              >
                <div className="flex gap-6">
                  <div className="h-20 w-20 overflow-hidden rounded-[10px]">
                    <Image
                      height={200}
                      width={200}
                      alt={order.apparel.apparel_name}
                      src={renderImageUrl(order.apparel.apparel_images[0].url)}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">
                      {order.apparel.apparel_name}
                    </p>
                    <div className="mt-1 text-sm text-gray-600">
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
                <p className="text-lg font-bold text-gray-800">
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
