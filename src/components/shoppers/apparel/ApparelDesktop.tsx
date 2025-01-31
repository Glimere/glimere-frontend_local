import { Apparel } from '@/types'
import { NextPage } from 'next'
import ApparelEdit from "@/components/3D/apparelEdit";
import GoBack from "@/components/GoBack";
import ApparelDetails from "@/components/apparel/ApparelDetails";
import ApparelCheckout from "@/components/apparel/ApparelCheckout";
import ApparelEditBar from "@/components/apparel/ApparelEditBar";
import ApparelViewer from "@/components/3D/apparelView";
import ProductViewCarousel from "@/components/carousel/ProductViewCarousel";
import SpinnerLoader from "@/components/loader/spinnerLoader";
import { useMeshSelectionStore } from '@/store/meshSelectStore';


interface Props {
    apparel: Apparel
    threedToggle: boolean
    editToggle: boolean
    setThreedToggle: (toggle: boolean) => void
    setEditToggle: (toggle: boolean) => void
    modelUrl: string
}

const ApparelDesktop: NextPage<Props> = ({
    apparel,
    threedToggle,
    editToggle,
    setThreedToggle,
    setEditToggle,
    modelUrl
}) => {

    const { selectedMesh } = useMeshSelectionStore();
    return (
        <>
            <div className="z-[4] absolute top-[50px] pl-[5.2rem]"><GoBack text="Back" /></div>

            {threedToggle && editToggle && apparel ? (
                <>
                    {selectedMesh && <ApparelEdit apparel={apparel} />}
                </>
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
                <SpinnerLoader />
            )}



        </>)
}

export default ApparelDesktop