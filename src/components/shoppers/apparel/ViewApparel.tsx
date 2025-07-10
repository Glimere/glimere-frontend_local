"use client";

import Like from "@/components/apparel/Like";
import Rating from "@/components/apparel/Rating";
import GlimereLoader from "@/components/loader/spinnerLoader";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox"; // Added for multiple selections
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import useFetch from "@/hooks/useFetch";
import { renderImageUrl } from "@/hooks/useRenderImageUrl";
import { useWindowWidth } from "@/hooks/useWindowsWidth";
import { useCartStore } from "@/store/cartStore";
import { Apparel, ApparelData, ApparelsData, MaterialsData } from "@/types";
import { usePrice } from "@/utils/usePrice";
import { AnimatePresence } from "framer-motion";
import { Plus, RefreshCcw, Share2, ShieldCheck, Truck } from "lucide-react";
import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";



import ApparelSection from "../sections/ApparelSection";
import MaterialSection from "../sections/MaterialSection";
import ApparelDesktop from "./ApparelDesktop";
import ApparelMobile from "./ApparelMobile";


// Mock data for size chart and other elements
const mockSizes = ["S", "M", "L", "XL"];
const mockReviews = [
  {
    id: "1",
    user: "Jane Doe",
    rating: 4.5,
    comment: "Great fit and super comfortable! The cotton feels amazing.",
    date: "2025-06-20",
  },
  {
    id: "2",
    user: "John Smith",
    rating: 4.0,
    comment: "Love the color, but runs slightly small. Order a size up!",
    date: "2025-06-18",
  },
];
const mockShippingInfo = {
  cost: "Free on orders over $50",
  delivery: "3-5 business days",
};
const mockReturnPolicy = "Free returns within 30 days";
const mockCareInstructions = {
  Cotton: "Machine wash cold, tumble dry low",
  Silk: "Dry clean only",
  Denim: "Machine wash warm, air dry",
  Linen: "Hand wash cold, line dry",
  Velvet: "Dry clean only",
};

interface ViewProductProps {
  params: { id: string };
}

const ViewApparel: NextPage<ViewProductProps> = ({ params }) => {
  const { data: apparelData, loading } = useFetch<ApparelData>(
    `/apparels/${params.id}`,
  );

  const {
    data: apparelTrending,
    error: apparelTrendingError,
    loading: apparelTrendingLoading,
  } = useFetch<ApparelsData>(`/apparels/trending`);

  const {
    data: materials,
    error: materialsError,
    loading: materialsLoading,
  } = useFetch<MaterialsData>(`/material`);

  const { isDesktop } = useWindowWidth();
  const isTrending404 = apparelTrendingError?.status === 404;
  const { formatPrice } = usePrice();
  const { addItem } = useCartStore();

  const [threedToggle, setThreedToggle] = useState(false);
  const [editToggle, setEditToggle] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedMaterialIds, setSelectedMaterialIds] = useState<string[]>([]); // Changed to array for multiple selections
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);
  const [isMaterialDrawerOpen, setIsMaterialDrawerOpen] = useState(false); // Added for material drawer

  const modelUrl = apparelData?.data?.models[0]?.file?.url ?? "";

  const {windowWidth} = useWindowWidth();

  // Reset selections when apparel or materials change
  useEffect(() => {
    setSelectedSize("");
    setSelectedColor("");
    setSelectedMaterialIds([]);
  }, [apparelData, materials]);

  // Handle material selection
  const handleMaterialToggle = (materialId: string) => {
    setSelectedMaterialIds((prev) =>
      prev.includes(materialId)
        ? prev.filter((id) => id !== materialId)
        : [...prev, materialId],
    );
  };

  // Handle Add to Cart
  const handleAddToCart = (apparel: Apparel) => {
    if (!apparel) return;

    const selectedMaterials = materials?.data?.filter((m) =>
      selectedMaterialIds.includes(m._id),
    ) || [];
    const selectedColorObj = selectedMaterials[0]?.colorVariants?.find(
      (c) => c._id === selectedColor,
    );

    addItem({
      apparel,
      selected_sizes: [apparel?.sizing_type],
      selected_colors: selectedColorObj ? [selectedColorObj] : [],
      selected_materials: selectedMaterials,
      quantity: 1,
      _id: apparel._id,
    });
  };

  // Handle social sharing
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: apparelData?.data.apparel_name,
        text: `Check out this ${apparelData?.data.apparel_name} on our store!`,
        url: window.location.href,
      });
    } else {
      alert("Sharing is not supported on this browser. Copy the URL to share!");
    }
  };

  return (
    <AnimatePresence>
      <div className={`relative z-[4] overflow-hidden ${windowWidth >= 1800 ? "sm:h-auto" : "sm:h-screen"} `}>
        <div className="h-[70vh]">
          <div className="absolute h-full w-full">
            {loading ? (
              <GlimereLoader />
            ) : (
              <>
                {apparelData?.data && isDesktop && (
                  <ApparelDesktop
                    apparel={apparelData?.data}
                    threedToggle={threedToggle}
                    editToggle={editToggle}
                    setThreedToggle={setThreedToggle}
                    setEditToggle={setEditToggle}
                    modelUrl={renderImageUrl(modelUrl)}
                    loading={loading}
                  />
                )}
                {apparelData?.data && !isDesktop && (
                  <ApparelMobile
                    apparel={apparelData?.data}
                    threedToggle={threedToggle}
                    editToggle={editToggle}
                    setThreedToggle={setThreedToggle}
                    setEditToggle={setEditToggle}
                    modelUrl={renderImageUrl(modelUrl)}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Product Description and Details */}
      <div className="relative z-[2] flex flex-col gap-6 rounded-t-[30px] bg-transparent-white-100 py-[30px] backdrop-blur-md sm:py-[60px]">
        {!isDesktop && (
          <>
            <div className="w-full px-[1.4rem] sm:px-[6.25rem]">
              <div className="flex flex-row items-center justify-between space-y-0 pb-4">
                <div className="flex flex-row items-center gap-2">
                  <div className="text-lg font-semibold">D&G</div>
                  <div className="flex items-center gap-1 text-sm">
                    <Rating
                      rating={apparelData?.data?.average_rating ?? 0}
                      reviews={apparelData?.data?.reviews?.length ?? 0}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Like apparelId={apparelData?.data._id ?? ""} />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleShare}
                    aria-label="Share product"
                  >
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl font-semibold leading-tight">
                    {apparelData?.data.apparel_name}
                  </h2>
                  <div className="text-2xl font-bold text-orange-600">
                    {formatPrice(apparelData?.data.apparel_price)}
                  </div>
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

                {/* Size Selection */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Size</label>
                  <div className="flex gap-2">
                    {mockSizes.map((size) => (
                      <Button
                        key={size}
                        variant={selectedSize === size ? "default" : "outline"}
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

                {/* Color Selection */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Color</label>
                  <div className="flex gap-2">
                    {materials?.data
                      ?.find((m) => selectedMaterialIds.includes(m._id))
                      ?.colorVariants?.map((color) => (
                        <Button
                          key={color._id}
                          variant={
                            selectedColor === color._id ? "default" : "outline"
                          }
                          className={`h-8 w-8 rounded-full border-2 p-0 ${
                            selectedColor === color._id
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

                <Button
                  className="w-full rounded-full bg-black py-3 font-medium text-white hover:bg-gray-800"
                  onClick={() =>
                    apparelData?.data && handleAddToCart(apparelData.data)
                  }
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Add To Cart
                </Button>
              </div>
            </div>
            <hr />
          </>
        )}

        <div className="px-[1.4rem] sm:px-[6.25rem]">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-left text-xl font-bold sm:text-2xl">
              Product Description
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-base leading-relaxed text-gray-700 md:text-lg">
                {apparelData?.data.apparel_desc}
              </p>
            </div>

            {/* Care Instructions */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Care Instructions</h3>
              <p className="text-sm text-gray-600">
                {selectedMaterialIds.length > 0 && materials?.data
                  ? selectedMaterialIds
                      .map(
                        (id) =>
                          mockCareInstructions[
                            materials.data.find((m) => m._id === id)
                              ?.type as keyof typeof mockCareInstructions
                          ],
                      )
                      .filter(Boolean)
                      .join(", ") ||
                    "Select a material to view care instructions"
                  : "Select a material to view care instructions"}
              </p>
            </div>

            {/* Supplier Information */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Supplier</h3>
              <p className="text-sm text-gray-600">
                {selectedMaterialIds.length > 0
                  ? materials?.data
                      ?.filter((m) => selectedMaterialIds.includes(m._id))
                      ?.map((m) => m.supplier)
                      ?.join(", ") || "Select a material"
                  : "Select a material"}
              </p>
            </div>
          </div>
        </div>

        <hr />

        {/* Customer Reviews */}
        <div className="px-[1.4rem] sm:px-[6.25rem]">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-left text-xl font-bold sm:text-2xl">
              Customer Reviews
            </h2>
            <div className="mt-4 space-y-4">
              {mockReviews.map((review) => (
                <div key={review.id} className="border-b pb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{review.user}</span>
                    <Rating rating={review.rating} reviews={1} />
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-sm text-gray-600">{review.comment}</p>
                </div>
              ))}
              <a
                href="#write-review"
                className="text-sm text-blue-600 hover:underline"
              >
                Write a Review
              </a>
            </div>
          </div>
        </div>

        <hr />

        {/* Shipping and Returns */}
        <div className="px-[1.4rem] sm:px-[6.25rem]">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-left text-xl font-bold sm:text-2xl">
              Shipping & Returns
            </h2>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-gray-600" />
                <p className="text-sm text-gray-600">
                  Shipping: {mockShippingInfo.cost}, Estimated Delivery:{" "}
                  {mockShippingInfo.delivery}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCcw className="h-5 w-5 text-gray-600" />
                <p className="text-sm text-gray-600">{mockReturnPolicy}</p>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-gray-600" />
                <p className="text-sm text-gray-600">
                  Secure Payment Guaranteed
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <MaterialSection
          headerTitle="Available Materials"
          materials={materials?.data}
          loading={materialsLoading}
        />

        <hr />

        {/* Complete the Look */}
        {!isTrending404 && (
          <ApparelSection
            headerTitle="Complete the Look"
            apparels={apparelTrending?.data}
            loading={false}
          />
        )}

        <hr />

        {!isTrending404 && (
          <ApparelSection
            headerTitle="New Ins"
            apparels={apparelTrending?.data}
            loading={apparelTrendingLoading}
          />
        )}
      </div>

      {/* Size Chart Drawer */}
      <Drawer
        open={isSizeChartOpen}
        onOpenChange={setIsSizeChartOpen}
        direction="bottom"
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
        direction="bottom"
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
    </AnimatePresence>
  );
};

export default ViewApparel;