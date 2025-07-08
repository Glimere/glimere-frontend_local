import ApparelViewer from "@/components/3D/apparelView";
import ApparelEditBar from "@/components/apparel/ApparelEditBar";
import ProductViewCarousel from "@/components/carousel/ProductViewCarousel";
import GlimereLoader from "@/components/loader/spinnerLoader";
import { useMeshSelectionStore } from "@/store/meshSelectStore";
import { Apparel } from "@/types";
import { NextPage } from "next";



import ApparelEditMobile from "./ApparelEditMobile";


interface Props {
  apparel: Apparel;
  threedToggle: boolean;
  editToggle: boolean;
  setThreedToggle: (toggle: boolean) => void;
  setEditToggle: (toggle: boolean) => void;
  modelUrl: string;
}

const ApparelMobile: NextPage<Props> = ({
  apparel,
  threedToggle,
  editToggle,
  setThreedToggle,
  setEditToggle,
  modelUrl,
}) => {
  const { selectedMesh } = useMeshSelectionStore();

  return (
    <>
      {apparel.models.length == 0 ? (
        <></>
      ) : (
        <ApparelEditBar
          threeDToggle={threedToggle}
          setThreeDToggle={setThreedToggle}
          editToggle={editToggle}
          setEditToggle={setEditToggle}
        />
      )}
      {threedToggle && editToggle && apparel ? (
        <>{selectedMesh && <ApparelEditMobile apparel={apparel} />}</>
      ) : null}

      {threedToggle ? (
        modelUrl ? (
          <ApparelViewer modelUrl={modelUrl} editToggle={editToggle} />
        ) : (
          <GlimereLoader />
        )
      ) : apparel ? (
        <ProductViewCarousel apparel={apparel} />
      ) : (
        <GlimereLoader />
      )}
    </>
  );
};

export default ApparelMobile;