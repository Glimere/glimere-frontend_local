import { Card } from '@/components/ui/card'
import { Brand } from '@/types'
import { NextPage } from 'next'
import Image from 'next/image'

interface Props {
    brand: Brand;
}

const BrandCard: NextPage<Props> = ({ brand }) => {
    return (
        <Card key={brand._id} className="h-[200px] relative p-6 flex flex-col items-center justify-between rounded-[18px]">


            <div></div>
            <div className="h-[40px] w-[40px] rounded-full self-start overflow-hidden shadow-sm">
                <Image
                    src={brand.logo.url}
                    alt={brand.name}
                    height={150}
                    width={150}
                    className="w-full object-cover"
                />
            </div>

        </Card>)
}

export default BrandCard