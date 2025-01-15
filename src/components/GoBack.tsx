import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";



interface GoBackProps {
  text: string;
}

const GoBack = ({ text }: GoBackProps) => {
  const router = useRouter();

  return (
    <div
      className="flex flex-row items-center gap-[20px] mt-[20px] p-2 cursor-pointer self-start"
      onClick={() => router.back()}
    >
      <ArrowLeft /> <p className="mt-2">{text}</p>
    </div>
  );
};

export default GoBack;
