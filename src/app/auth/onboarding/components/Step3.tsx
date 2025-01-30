// components/onboarding/Step3.tsx
import { useCreatorStore } from "@/store/creatorStore";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Step3 = () => {
  const { updateField, setStep } = useCreatorStore();

  return (
    <div className="p-6 text-center max-w-lg bg-transparent-white-300 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Apparel Specialization</h1>
      <p className="mb-6">
        If applicable, tell us about your specialization (e.g., Women’s Wear,
        Men’s Wear, Kidswear, Accessories, Footwear).
      </p>
      <Input
        placeholder="Your Specialization"
        onChange={(e) => updateField({ specialization: e.target.value })}
      />
      <div className="mt-6 flex justify-between">
        <Button onClick={() => setStep(2)}>Back</Button>
        <Button onClick={() => setStep(4)}>Next</Button>
      </div>
    </div>
  );
};

export default Step3;
