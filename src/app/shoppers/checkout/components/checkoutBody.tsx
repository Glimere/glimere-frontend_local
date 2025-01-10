import { NextPage } from "next";
import { useEffect, useState } from "react";
import { Pencil, PlusCircle } from "lucide-react";
import { useShippingAddressStore } from "@/store/shippingStore";
import { useJwt } from "@/hooks/useJwt";

interface Props {
  checkoutTabSwitch: number;
  setCheckoutTabSwitch: any;
}

const CheckoutBody: NextPage<Props> = ({
  checkoutTabSwitch,
  setCheckoutTabSwitch,
}) => {
  const [toggleEdit, setToggleEdit] = useState(false);

  const jwt = useJwt()

  const { getAddresses, addresses, loading, addAddress } =
    useShippingAddressStore();

  useEffect(() => {
    if (jwt) {
      getAddresses(jwt);
    }
  }, [getAddresses, jwt]);

  console.log('addresses', addresses)

  return (
    <>
      <div className="rounded-[1.6rem] bg-transparent-100 p-[2rem] flex-[7] min-h-[80vh]">
        <div
          className={`w-full h-full flex-row ${
            checkoutTabSwitch === 1 ? "flex" : "hidden"
          } bg-white-100 gap-[50px]`}
        >
          <div className="flex-[7] bg-white-100">
            {toggleEdit ? (
              <div className="w-full h-full bg-white p-[40px]">
                <div
                  className="flex flex-row justify-center items-center p-[10px] h-[50px] w-[150px] bg-primary-100 cursor-pointer"
                  onClick={() => setToggleEdit(false)}
                >
                  <div className="flex flex-row">
                    <p className="text-white-100 text-[13px] mr-[3px]">
                      ADD TO CART
                    </p>
                    <PlusCircle className="w-[20px] h-[20px] text-white-100" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full h-full bg-white-100 pb-[40px]">
                <h1 className="text-[20px] font-bold my-[20px]">
                  Choose Shipping Address
                </h1>
                <div className="h-[80%] w-full grid grid-cols-2 grid-rows-2 gap-[20px]">
                  {loading ? (
                    <>
                      {Array(4)
                        .fill(null)
                        .map((_, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-center border-[1px] border-solid border-gray-200 rounded-[10px] p-[20px] cursor-pointer animate-pulse duration-150"
                          >
                            <div className="flex flex-row justify-center items-center">
                              <h1 className="mr-[5px] text-center text-gray-300">
                                Loading...
                              </h1>
                              <PlusCircle className="w-[20px] h-[20px] text-[50px] text-[#ED7534] cursor-pointer animate-spin" />
                            </div>
                          </div>
                        ))}
                    </>
                  ) : (
                    <>
                      {addresses.map((address) => (
                        <div
                          key={address._id}
                          className="flex flex-col justify-between border-[1px] border-solid bg-white rounded-[10px] p-[20px] cursor-pointer hover:bg-gray-50 duration-150"
                        >
                          <div className="flex flex-row justify-between items-center mb-[10px]">
                            <h1>{address.location_name}</h1>
                            <div
                              className="h-[50px] w-[50px] flex justify-center items-center rounded-full p-2 hover:bg-gray-100 duration-150"
                              onClick={() => setToggleEdit(true)}
                            >
                              <Pencil className="w-[20px] h-[20px] text-[#ED7534] cursor-pointer" />
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <span>{address.address}</span>
                            <span>
                              {address.city}, {address.state}, {address.country}
                              .
                            </span>
                            <span>{address.phoneNumber}</span>
                          </div>
                        </div>
                      ))}

                      <div
                        className="flex items-center justify-center border-[1px] border-solid border-gray-200 rounded-[10px] p-[20px] cursor-pointer hover:bg-[#fff8ee] duration-150"
                        onClick={() => setToggleEdit(true)}
                      >
                        <div className="flex flex-row justify-center items-center">
                          <h1 className="mr-[5px] text-center">
                            Add new address
                          </h1>
                          <PlusCircle className="w-[20px] h-[20px] text-[50px] text-[#ED7534] cursor-pointer" />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutBody;
