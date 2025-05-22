import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function CurrentOrder() {
  return (
    <Card
      className="flex flex-[4] flex-col gap-[15px] rounded-[22px] bg-transparent-white-200 xl:col-span-2"
      x-chunk="dashboard-01-chunk-4"
    >
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle>Current Order</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="h-full rounded-2xl bg-transparent-white-200 p-8">
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-orange-500">Dress</p>
              <h3 className="text-xl font-bold">Orange Castor Pants</h3>
              <p className="mt-1 text-xl font-bold">N1,000,000</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="w-32">
                <Image
                  src="https://res.cloudinary.com/dwnvlaitr/image/upload/v1747905938/product_image_rblaig.png"
                  alt="Product image"
                  width={150}
                  height={200}
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col items-center">
                <div className="relative h-20 w-20">
                  {/* Gray background circle */}
                  <div className="absolute inset-0 rounded-full bg-gray-200"></div>

                  {/* Orange progress arc - approximately 25% complete */}
                  <svg className="absolute inset-0" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#f97316"
                      strokeWidth="8"
                      strokeDasharray="251.2"
                      strokeDashoffset="188.4"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>

                  {/* Dress icon in the center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 4V14M18 14L21 17L18 14ZM18 14L13 9L12 3L11 9L6 14L3 17L6 21H18L21 17L18 14Z"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <p className="mt-2 text-sm font-medium">14 day left</p>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-orange-500">Materials</p>
              <p className="mt-1 text-sm">
                Orange Castor Pants - Polyester/Viscose
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
