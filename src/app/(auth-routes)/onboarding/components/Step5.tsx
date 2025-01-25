// components/onboarding/Step5.tsx
import { useCreatorStore } from "@/store/creatorStore";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const Step5 = () => {
    const { updateField, setStep } = useCreatorStore();

    return (
        <div className="p-6 text-center max-w-lg bg-transparent-white-300 shadow-lg rounded-lg flex flex-col justify-start">
            <h1 className="text-2xl font-bold mb-4">Account Preferences</h1>
            <p className="mb-6">How would you prefer to receive communications?</p>
            <RadioGroup
                onValueChange={(value) =>
                    updateField({ communicationPreference: value })
                }
            >
                <div className="flex gap-[10px]">
                    <RadioGroupItem value="Email" className="text-black" />
                    <Label htmlFor="Email">Email</Label>
                </div>
                <div className="flex gap-[10px]">
                    <RadioGroupItem value="In-App Notifications" className="text-black" />
                    <Label htmlFor="In-App Notifications">In-App Notifications</Label>
                </div>
                <div className="mt-6 flex justify-between">
                    <Button onClick={() => setStep(4)}>Back</Button>
                    <Button onClick={() => setStep(6)}>Next</Button>
                </div>
            </RadioGroup>
        </div>
    );
};

export default Step5;
