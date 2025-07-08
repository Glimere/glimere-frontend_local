import { renderImageUrl } from "@/hooks/useRenderImageUrl";
import { useMeshSelectionStore } from "@/store/meshSelectStore";
import { useTextureChangeStore } from "@/store/textureChangeStore";
import { Apparel } from "@/types";
import { Plus } from "lucide-react";
import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";





interface Props {
  apparel: Apparel;
}

const ApparelEditMobile: NextPage<Props> = ({ apparel }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { textureImages, setTextureImages, setTexture, texture } =
    useTextureChangeStore();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { selectedMesh } = useMeshSelectionStore();

  // Load textures from apparel on page load
  useEffect(() => {
    const textureUrls = apparel.materials.map((material) =>
      renderImageUrl(material.textures.patternFile.url),
    );
    setTextureImages(textureUrls); // Set initial texture URLs
  }, [apparel, setTextureImages]);

  // Handle file input change
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file); // Create image preview URL
      setTextureImages([...textureImages, imageUrl]); // Add the new texture preview to the list
      setSelectedFile(file);
    }
  };

  // Handle applying a texture
  const handleApplyTexture = (imageUrl: string) => {
    setTexture(imageUrl);
  };

  return (
    <>
      {apparel.models.length == 0 ? (
        <></>
      ) : (
        <div className="absolute left-[1.4rem] z-[3] flex h-full flex-col justify-center pb-[240px] pt-[65px] sm:pl-[5.75rem]">
          <div className="flex flex-col items-center gap-[10px]">
            <h1 className="self-center text-[0.8rem] font-[700] text-primary-100">
              Material
            </h1>

            <div className="flex flex-col gap-[20px]">
              {apparel.materials.map((material) => (
                <div key={material._id} className="flex flex-col gap-[20px]">
                  <div className="flex flex-col gap-[10px] rounded-full bg-transparent-white-200 px-[10px] py-[15px] backdrop-blur-md">
                    {textureImages.map((imageUrl, index) => (
                      <div
                        key={index}
                        className="h-[2.5rem] w-[2.5rem] cursor-pointer overflow-hidden rounded-full border-[2px] border-solid border-transparent duration-200 hover:border-primary-100"
                        onClick={() => handleApplyTexture(imageUrl)} // Apply texture when clicked
                      >
                        <Image
                          height={200}
                          width={200}
                          alt={`Texture ${index}`}
                          src={imageUrl}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                    <div className="relative flex h-[2.5rem] w-[2.5rem] cursor-pointer items-center justify-center overflow-hidden rounded-full border-[2px] border-solid border-transparent bg-white duration-200 hover:border-primary-100">
                      <Plus className="scale-90" />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="absolute z-[3] h-full w-full cursor-pointer opacity-0"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ApparelEditMobile;