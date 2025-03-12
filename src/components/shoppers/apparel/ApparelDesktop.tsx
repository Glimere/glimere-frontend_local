import ApparelEdit from "@/components/3D/apparelEdit";
import ApparelViewer from "@/components/3D/apparelView";
import ApparelCheckout from "@/components/apparel/ApparelCheckout";
import ApparelDetails from "@/components/apparel/ApparelDetails";
import ApparelEditBar from "@/components/apparel/ApparelEditBar";
import ProductViewCarousel from "@/components/carousel/ProductViewCarousel";
import GlimereLoader from "@/components/loader/spinnerLoader";
import { useMeshSelectionStore } from "@/store/meshSelectStore";
import { Apparel } from "@/types";
import { NextPage } from "next";

interface Props {
  apparel: Apparel;
  threedToggle: boolean;
  editToggle: boolean;
  setThreedToggle: (toggle: boolean) => void;
  setEditToggle: (toggle: boolean) => void;
  modelUrl: string;
}

const ApparelDesktop: NextPage<Props> = ({
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

      {threedToggle && editToggle && apparel ? (
        <>{selectedMesh && <ApparelEdit apparel={apparel} />}</>
      ) : apparel ? (
        <ApparelDetails apparel={apparel} />
      ) : null}

      {apparel && (
        <>
          <ApparelCheckout apparel={apparel} />
          <ApparelEditBar
            threeDToggle={threedToggle}
            setThreeDToggle={setThreedToggle}
            editToggle={editToggle}
            setEditToggle={setEditToggle}
          />
        </>
      )}
      {threedToggle ? (
        <ApparelViewer modelUrl={modelUrl} editToggle={editToggle} />
      ) : apparel ? (
        <ProductViewCarousel apparel={apparel} />
      ) : (
        <GlimereLoader />
      )}
    </>
  );
};

export default ApparelDesktop;
