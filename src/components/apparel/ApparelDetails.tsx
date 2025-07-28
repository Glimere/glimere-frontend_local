import { renderImageUrl } from "@/hooks/useRenderImageUrl";
import { useCartStore } from "@/store/cartStore";
import type { Apparel, MaterialsData } from "@/types";
import { Plus } from "lucide-react";
import { NextPage } from "next";
import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import Like from "./Like";
import Rating from "./Rating";
import useFetch from "@/hooks/useFetch";
import { useState } from "react";
import { Checkbox } from "../ui/checkbox";



interface Props {
  apparel: Apparel;
}

const ApparelDetails: NextPage<Props> = ({ apparel }) => {

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedMaterialIds, setSelectedMaterialIds] = useState<string[]>([]); // Changed to array for multiple selections
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);
  const [isMaterialDrawerOpen, setIsMaterialDrawerOpen] = useState(false); // Added for material drawer
  const { addItem } = useCartStore();
  const {
    data: materials,
    loading: materialsLoading,
  } = useFetch<MaterialsData>(`/material`);

  const mockSizes = ["S", "M", "L", "XL"];

  // Handle material selection
  const handleMaterialToggle = (materialId: string) => {
    setSelectedMaterialIds((prev) =>
      prev.includes(materialId)
        ? prev.filter((id) => id !== materialId)
        : [...prev, materialId],
    );
  };


  return (
    <>
      <div className="pl-4 md:pl-[2.5rem] lg:pl-[5.75rem] absolute left-0 z-[3] flex h-full w-[38%] flex-col justify-center">
        <div className="flex w-full flex-col gap-[1rem]">
          <div className="flex flex-row items-start gap-[20px]">
            <div className="md-[80%] sm:w-[100%]">
              <h1 className="text-[2.3rem] font-[600] text-dark">
                {apparel.apparel_name}
              </h1>
            </div>
            <div className="mt-[14px]">
              <Like apparelId={apparel._id} />
            </div>
          </div>
          <div className="flex flex-row gap-5">
            <div className="flex flex-row items-center gap-[10px]">
              <div className="h-[2rem] w-[2rem] overflow-hidden rounded-full border border-solid border-primary-100 bg-white p-[5px]">
                <Image
                  src={renderImageUrl(apparel.brand.logo.url)}
                  height={200}
                  width={200}
                  alt={apparel.brand.logo.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-[1rem] font-[500] text-dark">
                {apparel.brand.name}
              </p>
            </div> <Rating
              rating={apparel.average_rating}
              reviews={apparel.total_reviews}
            />
          </div>

          <div className="flex flex-col gap-[1rem]">


            <div className="space-y-4">
            

              {/* Size Selection */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Size</label>
                <div className="flex gap-2">
                  {mockSizes.map((size) => (
                    <Button
                      key={size}
                      variant={
                        selectedSize === size ? "default" : "outline"
                      }
                      className={`rounded-full ${selectedSize === size ? "bg-black text-white" : "border-gray-300"}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
                <button
                  onClick={() => setIsSizeChartOpen(true)}
                  className="text-left text-sm text-blue-600 hover:underline"
                >
                  View Size Chart
                </button>
              </div>
            </div>
            <div className="flex gap-4 ">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Color</label>
                <div className="flex gap-2">
                  {materials?.data
                    ?.find((m) => selectedMaterialIds.includes(m._id))
                    ?.colorVariants?.map((color) => (
                      <Button
                        key={color._id}
                        variant={
                          selectedColor === color._id
                            ? "default"
                            : "outline"
                        }
                        className={`h-8 w-8 rounded-full border-2 p-0 ${selectedColor === color._id
                          ? "border-black"
                          : "border-gray-300"
                          }`}
                        style={{ backgroundColor: color.hexCode }}
                        onClick={() => setSelectedColor(color._id)}
                        aria-label={`Select ${color.name}`}
                      />
                    ))}
                </div>
              </div>
              <div className="flex flex-col gap-[10px]">
                {apparel.materials.map((material, index) => (
                  <div key={index}>
                    <p className="text-[1rem] font-semibold">{material.type}</p>

                    <div className="flex flex-row items-center gap-[5px]">
                      <div
                        className={`h-[2rem] w-[2rem] rounded-full`}
                        style={{
                          backgroundImage: `url(${renderImageUrl(material.textures.patternFile.url)})`,
                        }}
                      ></div>{" "}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Color Selection */}
            <div className="flex flex-col gap-2">
              <button
                onClick={() => setIsMaterialDrawerOpen(true)} // Open material drawer
                className="text-left text-sm text-blue-600 hover:underline"
              >
                {selectedMaterialIds.length > 0
                  ? materials?.data
                    ?.filter((m) => selectedMaterialIds.includes(m._id))
                    ?.map((m) => m.type)
                    ?.join(", ") || "Select materials"
                  : "Select a material"}
              </button>
            </div>
          </div>

          <Button
            className="mt-[20px] flex flex-row items-center self-start rounded-full"
            onClick={() =>
              addItem({
                apparel: {
                  ...apparel,
                },
                selected_sizes: [apparel.sizing_type],
                selected_colors: [apparel.materials[0].colorVariants[0]],
                selected_materials: [apparel.materials[0]],
                quantity: 1,
                _id: `${apparel._id}`,
              })
            }
          >
            <Plus />
            <p className="">Add To Cart</p>
          </Button>
        </div>
      </div>



      {/* Size Chart Drawer */}
      <Drawer
        open={isSizeChartOpen}
        onOpenChange={setIsSizeChartOpen}
        direction="left"
      >
        <DrawerContent className="max-h-[80vh] rounded-t-[30px] bg-white p-6 backdrop-blur-md">
          <DrawerHeader className="text-left">
            <DrawerTitle className="text-lg font-semibold">
              Size Chart
            </DrawerTitle>
          </DrawerHeader>
          <div className="overflow-auto">
            <table className="w-full text-sm text-gray-700">
              <thead>
                <tr className="border-b">
                  <th className="py-2 text-left">Size</th>
                  <th className="py-2 text-left">Chest (in)</th>
                  <th className="py-2 text-left">Length (in)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">S</td>
                  <td className="py-2">36-38</td>
                  <td className="py-2">27</td>
                </tr>
                <tr>
                  <td className="py-2">M</td>
                  <td className="py-2">38-40</td>
                  <td className="py-2">28</td>
                </tr>
                <tr>
                  <td className="py-2">L</td>
                  <td className="py-2">40-42</td>
                  <td className="py-2">29</td>
                </tr>
                <tr>
                  <td className="py-2">XL</td>
                  <td className="py-2">42-44</td>
                  <td className="py-2">30</td>
                </tr>
              </tbody>
            </table>
          </div>
          <DrawerFooter className="mt-4">
            <DrawerClose asChild>
              <Button variant="outline" className="w-full rounded-full">
                Close
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      {/* Material Selection Drawer */}
      <Drawer
        open={isMaterialDrawerOpen}
        onOpenChange={setIsMaterialDrawerOpen}
        direction="left"
      >
        <DrawerContent className="max-h-[80vh] rounded-t-[30px] bg-white p-6 backdrop-blur-md">
          <DrawerHeader className="text-left">
            <DrawerTitle className="text-lg font-semibold">
              Select Materials
            </DrawerTitle>
          </DrawerHeader>
          <div className="space-y-4 overflow-auto">
            {materialsLoading ? (
              <div className="text-center text-gray-600">
                Loading materials...
              </div>
            ) : materials?.data?.length ? (
              materials.data.map((material) => (
                <div
                  className="flex items-center justify-between px-4"
                  onClick={() => handleMaterialToggle(material._id)}
                >
                  <div
                    key={material._id}
                    className="flex items-center gap-3 py-2"
                  >
                    <Checkbox
                      id={`material-${material._id}`}
                      checked={selectedMaterialIds.includes(material._id)}
                    />
                    <label
                      htmlFor={`material-${material._id}`}
                      className="flex-1 text-sm text-gray-700"
                    >
                      <span className="font-medium">{material.type}</span>
                      <span className="block text-xs text-gray-500">
                        {material.availability}
                      </span>
                    </label>
                  </div>
                  <div className="h-20 w-44 overflow-hidden rounded-md">
                    <Image
                      height={300}
                      width={300}
                      src={renderImageUrl(material?.textures?.thumbnail?.url)}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-600">
                No materials available
              </div>
            )}
          </div>
          <DrawerFooter className="mt-4">
            <DrawerClose asChild>
              <Button
                variant="default"
                className="w-full rounded-full bg-black text-white"
              >
                Confirm
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ApparelDetails;