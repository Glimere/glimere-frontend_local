import ApparelViewer from '@/components/3D/apparelView'
import ApparelEditBar from '@/components/apparel/ApparelEditBar'
import ProductViewCarousel from '@/components/carousel/ProductViewCarousel'
import SpinnerLoader from '@/components/loader/spinnerLoader'
import { Apparel } from '@/types'
import { NextPage } from 'next'
import ApparelEditMobile from './ApparelEditMobile'
import { useMeshSelectionStore } from '@/store/meshSelectStore'
import ApparelDrawer from '../ApparelDrawer'

interface Props {
    apparel: Apparel
    threedToggle: boolean
    editToggle: boolean
    setThreedToggle: (toggle: boolean) => void
    setEditToggle: (toggle: boolean) => void
    modelUrl: string
}

const ApparelMobile: NextPage<Props> = ({
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
            <div className="w-full h-[50px] fixed top-[75px] z-[4] flex justify-center">
                <h1 className="absolute  text-[18px] font-medium text-center">{apparel.apparel_name}</h1>
            </div>

            <ApparelEditBar
                threeDToggle={threedToggle}
                setThreeDToggle={setThreedToggle}
                editToggle={editToggle}
                setEditToggle={setEditToggle}
            />
            {threedToggle && editToggle && apparel ? (
                <>
                    {selectedMesh && <ApparelEditMobile apparel={apparel} />}
                </>
            ) : null}

            {threedToggle ? (
                modelUrl ? (
                    <ApparelViewer modelUrl={modelUrl} editToggle={editToggle} />
                ) : (
                    <SpinnerLoader />
                )
            ) : apparel ? (
                <ProductViewCarousel apparel={apparel} />
            ) : (
                <SpinnerLoader />
            )}

            <ApparelDrawer apparel={apparel}/>

        </>
    )
}

export default ApparelMobile