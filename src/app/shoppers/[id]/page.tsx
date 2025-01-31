import ViewApparel from "@/components/shoppers/apparel/ViewApparel";

interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {


  return <ViewApparel params={params}/>
}