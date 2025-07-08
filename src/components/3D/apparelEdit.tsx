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

const ApparelEdit: NextPage<Props> = ({ apparel }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { textureImages, setTextureImages, setTexture, texture } =
    useTextureChangeStore();
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

  console.log("selectedFile:", selectedFile);

  return (<>
  {apparel.models.length == 0 ? <></> : <div className="absolute left-0 z-[3] flex h-full flex-col justify-center sm:pl-[5.75rem]">
      <div className="flex min-w-[18.125rem] flex-col gap-[1.1rem]">
        <div className="flex w-full justify-center rounded-full bg-transparent-white-200 px-[20px] py-[10px] backdrop-blur-md">
          <p className="font-medium text-primary-100">{selectedMesh}</p>
        </div>
        <div className="flex flex-col gap-[1.56rem] rounded-[1.6rem] bg-transparent-white-200 p-[1.56rem] backdrop-blur-md">
          <div>
            <h1 className="text-[0.8rem] font-[700] text-primary-100">
              Material
            </h1>
            <div className="flex flex-col gap-[20px]">
              {apparel.materials.map((material) => (
                <div key={material._id} className="flex flex-col gap-[20px]">
                  <div className="flex flex-col gap-[10px]">
                    <p>{material.type}</p>
                    <div className="flex flex-row gap-[10px]">
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>}
  </>
    
  );
};

export default ApparelEdit;
