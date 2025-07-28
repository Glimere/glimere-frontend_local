import ApparelEdit from "@/components/3D/apparelEdit";
import ApparelViewer from "@/components/3D/apparelView";
import ApparelCheckout from "@/components/apparel/ApparelCheckout";
import { ApparelCheckoutSkeleton } from "@/components/skeletons/ApparelCheckoutSkeleton";
import ApparelDetails from "@/components/apparel/ApparelDetails";
// Import skeleton components
import { ApparelDetailsSkeleton } from "@/components/skeletons/ApparelDetailsSkeleton";
import ApparelEditBar from "@/components/apparel/ApparelEditBar";
import ProductViewCarousel from "@/components/carousel/ProductViewCarousel";
import GlimereLoader from "@/components/loader/spinnerLoader";
import { useMeshSelectionStore } from "@/store/meshSelectStore";
import { Apparel } from "@/types";
import { NextPage } from "next";

interface Props {
  apparel: Apparel | null; // Allow null for loading state
  threedToggle: boolean;
  editToggle: boolean;
  setThreedToggle: (toggle: boolean) => void;
  setEditToggle: (toggle: boolean) => void;
  modelUrl: string;
  loading?: boolean;
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
      ) : (
        <ApparelDetailsSkeleton />
      )}

      {apparel ? (
        <>
          <ApparelCheckout apparel={apparel} />
          {apparel.models.length === 0 ? (
            <></>
          ) : (
            <ApparelEditBar
              threeDToggle={threedToggle}
              setThreeDToggle={setThreedToggle}
              editToggle={editToggle}
              setEditToggle={setEditToggle}
            />
          )}
        </>
      ) : (
        <ApparelCheckoutSkeleton />
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
