/* eslint-disable @typescript-eslint/no-unused-vars */
import useOrderStore from "@/store/orderStore";
import { NextPage } from "next";
import Image from "next/image";
import ShippingEditModal from "./ShippingEditModal";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Truck, Globe, Home } from "lucide-react";
import useUserStore from "@/store/userStore";
import useFetch from "@/hooks/useFetch";
import { usePrice } from "@/utils/usePrice";
import { Input } from "@/components/ui/input";
import { City } from "@/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { renderImageUrl } from "@/hooks/useRenderImageUrl";

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
    setSelectedShippingFee
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
      `/shipping_fee/query?country=${user?.address.country}&state=${
        user?.address.state
      }&shipping_type=${selectedTab.toLowerCase()}&city=${
        selectedOrder.shipping_address.city
      }`
    );

  useEffect(() => {
    if (shippingOptions) {
      const courier = shippingFee?.data[0]?.shipping_option?.couriers[0];
      if (courier) {
        setSelectedCourier(courier);
      }
      if (shippingFee?.data[0]?.shipping_option) {
        setSelectedShippingOption(shippingFee.data[0].shipping_option);
        setSelectedShippingFee(shippingFee?.data[0]?.fee?.standard)
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

console.log('selectedOrder', selectedOrder)

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <h1 className="text-2xl font-bold my-6 ml-2">Order Summary</h1>

      <div className="max-h-[32rem] overflow-y-auto pr-[10px] flex flex-col gap-[20px]">
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
            {selectedOrder.shipping_address?.location_name}
            <br />
            {selectedOrder.shipping_address?.address},{" "}
            {selectedOrder.shipping_address?.city},{" "}
            {selectedOrder.shipping_address?.state}
            <br />
            {selectedOrder.shipping_address?.phoneNumber}
          </p>
        </section>

        <div className="flex flex-col gap-[20px] p-6 bg-transparent-white-200 rounded-[10px]">
          <div className="flex flex-col gap-[20px] p-6 bg-transparent-white-200 rounded-[10px]">
            <div className="flex justify-between items-start border-b border-solid border-b-gray-200">
              <h2 className="text-lg font-semibold">Delivery Details</h2>
              <Dialog>
                <DialogTrigger>
                  <button className="text-primary-100 font-medium">
                    Change
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-[600px]">
                  <DialogTitle className="flex justify-between items-center">
                    Select Delivery Method
                  </DialogTitle>
                  <div className="flex space-x-4 mt-4">
                    {shippingOptionLoading ? (
                      <>
                        <div
                          className={`cursor-pointer flex-1 text-center p-3 rounded-lg transition-all border-solid border-[2px] duration-300 animate-pulse bg-gray-100`}
                        ></div>
                        <div
                          className={`cursor-pointer flex-1 text-center p-3 rounded-lg transition-all border-solid border-[2px] duration-300 animate-pulse bg-gray-100`}
                        ></div>
                        <div
                          className={`cursor-pointer flex-1 text-center p-3 rounded-lg transition-all border-solid border-[2px] duration-300 animate-pulse bg-gray-100`}
                        ></div>
                        <div
                          className={`cursor-pointer flex-1 text-center p-3 rounded-lg transition-all border-solid border-[2px] duration-300 animate-pulse bg-gray-100`}
                        ></div>
                      </>
                    ) : (
                      shippingOptions?.data?.map((options) => (
                        <div
                          key={options._id}
                          onClick={() => {
                            setSelectedTab(options?.name);
                            setShippingInfo(shippingFee?.data[0] || null);
                            setSelectedShippingFee(shippingFee?.data[0]?.fee?.standard ?? 0)
                          }}
                          className={`cursor-pointer flex-1 text-center p-3 rounded-lg transition-all border-solid border-[2px] duration-300 ${
                            selectedTab === options?.name
                              ? "bg-transparent-white-300 text-dark border-primary-100"
                              : "bg-gray-100 text-dark"
                          }`}
                        >
                          <div className="flex flex-col gap-[10px] items-center">
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
                    <div className="p-4 border rounded-lg flex justify-between items-center">
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
                <div className="p-4 border rounded-lg hover:bg-gray-50 duration-300">
                  <div
                    className="flex flex-row cursor-pointer  justify-between items-center"
                    onClick={() => setDoorDelivery(!doorDelivery)}
                  >
                    <span className="font-bold">Checkpoint Delivery</span>
                    <div className="">
                      <Input
                        type="checkbox"
                        className=" self-end"
                        checked={!doorDelivery}
                      />
                    </div>
                  </div>

                  {!doorDelivery ? (
                    <>
                      <div className="p-4 border rounded-lg flex justify-between items-center">
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
                  <div className="p-4 border rounded-lg hover:bg-gray-50 duration-300">
                    <div
                      className="flex flex-row cursor-pointer  justify-between items-center"
                      onClick={() => setDoorDelivery(!doorDelivery)}
                    >
                      <span className="font-bold">Door Delivery</span>
                      <div className="">
                        <Input
                          type="checkbox"
                          className=" self-end"
                          checked={doorDelivery}
                        />
                      </div>
                    </div>

                    {doorDelivery ? (
                      <>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Select Location Area
                          </label>
                          <Select
                            onValueChange={(value) => {
                              const selectedCity =
                                shippingFee?.data[0]?.city?.find(
                                  (city: City) => city.name === value
                                );
                              if (selectedCity) {
                                setSelectedCity(selectedCity); // Update the selected city in the state or store
                              }
                            }}
                          >
                            <SelectTrigger className="w-full border rounded-lg bg-white shadow-sm text-gray-700">
                              <SelectValue placeholder="Select location area" />
                            </SelectTrigger>
                            <SelectContent>
                              {shippingFee?.data[0]?.city?.length ?? 0 > 0 ? (
                                shippingFee?.data[0]?.city.map(
                                  (city: City, index: number) => (
                                    <SelectItem key={index} value={city.name}>
                                      {city.name}
                                    </SelectItem>
                                  )
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
                          <div className="mt-4 p-4 border rounded-lg flex justify-between items-center">
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
          <section className="bg-transparent-white-200 p-6 rounded-[5px] shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Delivery Notes</h3>
            <Textarea
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-primary-200"
              placeholder="Add any specific instructions for the delivery (e.g., Leave at the front door)"
              rows={4}
              onChange={handleInputChange}
            ></Textarea>
          </section>
        </div>
        <section className="bg-transparent-white-200 p-6 rounded-[10px] shadow-sm">
          <h2 className="text-lg font-semibold">Order Items</h2>
          <div className="mt-4 space-y-4">
            {selectedOrder.items?.map((order, id) => (
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
                      src={renderImageUrl(order.apparel.apparel_images[0].url)}
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
