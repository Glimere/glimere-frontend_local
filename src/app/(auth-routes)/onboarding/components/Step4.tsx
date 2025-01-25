// components/onboarding/Step4.tsx
import { useCreatorStore } from "@/store/creatorStore";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Step4 = () => {
  const { updateField, setStep } = useCreatorStore();

  return (
    <div className="p-6 text-center max-w-lg bg-transparent-white-300 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Design Experience</h1>
      <p className="mb-6">
        Briefly describe your design experience (e.g., &quot;Recent fashion
        graduate,&quot; &quot;Experienced designer with 5+ years in the industry,&quot;
        &quot;Hobbyist with a passion for design&quot;).
      </p>
      <Textarea
        placeholder="Describe your experience"
        onChange={(e) => updateField({ experience: e.target.value })}
      />
      <div className="mt-6 flex justify-between">
        <Button onClick={() => setStep(3)}>Back</Button>
        <Button onClick={() => setStep(5)}>Next</Button>
      </div>
    </div>
  );
};

export default Step4;
