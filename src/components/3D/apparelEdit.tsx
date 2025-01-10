// components/ApparelEdit.tsx
import { NextPage } from "next";
import MeshListCard from "./meshListCard";
import Image from "next/image";
import { Apparel } from "@/types";
import { Plus } from "lucide-react";
import { useState } from "react";
import * as THREE from "three";
import { useTextureChangeStore } from "@/store/textureChangeStore";
import { Button } from "../ui/button";

interface Props {
  apparel: Apparel;
}

const ApparelEdit: NextPage<Props> = ({ apparel }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const setTexture = useTextureChangeStore((state) => state.setTexture);
  const { texture } = useTextureChangeStore();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleApplyTexture = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const textureLoader = new THREE.TextureLoader();
        const newTexture = textureLoader.load(e.target?.result as string);
        setTexture(newTexture); // Set texture to Zustand store
      };
      reader.readAsDataURL(selectedFile);
      setSelectedFile(null);
    }
  };

  console.log("texture", texture);

  return (
    <>
      <div className="absolute left-0 h-full flex flex-col justify-center sm:pl-[5.75rem] z-[3]">
        <div className="flex flex-col gap-[1.56rem] min-w-[18.125rem]">
          <div className="rounded-[1.6rem] bg-transparent-100 flex flex-col gap-[1.56rem] p-[1.56rem]">
            <div className="">
              <h1 className="text-[0.8rem] text-primary-100 font-[700]">
                Material
              </h1>
              <div className="flex flex-col gap-[20px]">
                {apparel.materials.map((material) => (
                  <div key={material._id} className="flex flex-col gap-[20px]">
                    <div className="flex flex-col gap-[20px]">
                      <div className="flex flex-col gap-[10px]">
                        <p className="">{material.type}</p>
                        <div className="flex flex-row gap-[10px]">
                          <div className="h-[2.5rem] w-[2.5rem] cursor-pointer border-[2px] duration-200 border-solid border-transparent hover:border-primary-100 rounded-full overflow-hidden">
                            <Image
                              height={200}
                              width={200}
                              alt={material.textures.name}
                              src={material.textures.patternFile.url}
                              className="object-cover h-full w-full"
                            />
                          </div>
                          <div className="relative overflow-hidden h-[2.5rem] w-[2.5rem] cursor-pointer border-[2px] duration-200 border-solid border-transparent hover:border-primary-100 rounded-full bg-white flex justify-center items-center">
                            <Plus className="scale-90" />
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleFileChange}
                              className="absolute z-[3] h-full w-full opacity-0 cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-[10px]">
                        <p>Color</p>
                        <div className="flex flex-row gap-[10px] items-center">
                          {material.colorVariants.map((color) => (
                            <div
                              key={color.hexCode}
                              className="h-[2.5rem] w-[2.5rem] cursor-pointer border-[2px] duration-200 border-solid border-transparent hover:border-primary-100 rounded-full"
                              style={{ backgroundColor: color.hexCode }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {texture ? (
                <Button
                  className="rounded-full bg-primary-100 mt-[20px]"
                  onClick={handleApplyTexture}
                >
                  Apply Texture
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApparelEdit;
