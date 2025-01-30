// components/onboarding/Step1.tsx
import { useCreatorStore } from "@/store/creatorStore";
import { Button } from "@/components/ui/button";

const Step1 = () => {
  const { updateField, setStep } = useCreatorStore();

  const handleSelection = (type: string) => {
    updateField({ apparelType: type });
    setStep(2);
  };

  return (
    <div className="p-6 text-center max-w-lg bg-transparent-white-300 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Welcome to Glimere!</h1>
      <p className="mb-6">Let’s get started by selecting your apparel type.</p>
      <div className="flex flex-col gap-4">
        <Button onClick={() => handleSelection("Custom designs")}>
          I want to create Custom designs
        </Button>
        <Button onClick={() => handleSelection("Ready-to-Wear")}>
          I want to sell Ready-to-Wear apparel
        </Button>
      </div>
    </div>
  );
};

export default Step1;
