import { NextPage } from "next";
import Image from "next/image";
import { Apparel } from "@/types";
import { Plus } from "lucide-react";
import { useState, useEffect } from "react";
import { useTextureChangeStore } from "@/store/textureChangeStore";
import { useMeshSelectionStore } from "@/store/meshSelectStore";
import { renderImageUrl } from "@/hooks/useRenderImageUrl";

interface Props {
    apparel: Apparel;
}

const ApparelEditMobile: NextPage<Props> = ({ apparel }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { textureImages, setTextureImages, setTexture, texture } = useTextureChangeStore();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { selectedMesh } = useMeshSelectionStore();

    // Load textures from apparel on page load
    useEffect(() => {
        const textureUrls = apparel.materials.map((material) => renderImageUrl(material.textures.patternFile.url));
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
        <div className="absolute left-[1.4rem] pt-[55%] flex flex-col justify-center sm:pl-[5.75rem] z-[3]">

            <div className="flex flex-col gap-[10px] items-center">
                <h1 className="text-[0.8rem] self-center text-primary-100 font-[700]">Material</h1>

                <div className="flex flex-col gap-[20px]">
                    {apparel.materials.map((material) => (
                        <div key={material._id} className="flex flex-col gap-[20px]">
                            <div className="flex flex-col bg-transparent-white-200 backdrop-blur-md rounded-full px-[10px] py-[15px] gap-[10px]">
                                {textureImages.map((imageUrl, index) => (
                                    <div
                                        key={index}
                                        className="h-[2.5rem] w-[2.5rem] cursor-pointer border-[2px] duration-200 border-solid border-transparent hover:border-primary-100 rounded-full overflow-hidden"
                                        onClick={() => handleApplyTexture(imageUrl)} // Apply texture when clicked
                                    >
                                        <Image
                                            height={200}
                                            width={200}
                                            alt={`Texture ${index}`}
                                            src={imageUrl}
                                            className="object-cover h-full w-full"
                                        />
                                    </div>
                                ))}
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

                    ))}
                </div>
            </div>

        </div>

    );
};

export default ApparelEditMobile;
