// components/onboarding/Step2.tsx
import { useCreatorStore } from "@/store/creatorStore";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Step2 = () => {
    const { updateField, setStep } = useCreatorStore();
    const [links, setLinks] = useState([""]);

    const addNewLink = () => setLinks((prev) => [...prev, ""]);

    const handleLinkChange = (index: number, value: string) => {
        const updatedLinks = [...links];
        updatedLinks[index] = value;
        setLinks(updatedLinks);
    };

    const handleSubmit = () => {
        updateField({ socialMediaLinks: links.filter((link) => link) });
        setStep(3);
    };

    return (
        <div className="p-6 text-center max-w-lg min-w-[300px] bg-transparent-white-300 shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Basic Information</h1>
            <div className="flex flex-col gap-4">
                <Input
                    placeholder="Full Name"
                    onChange={(e) => updateField({ fullName: e.target.value })}
                />
                <Input
                    placeholder="Email Address"
                    onChange={(e) => updateField({ email: e.target.value })}
                />
                <Input
                    placeholder="Phone Number (Optional)"
                    onChange={(e) => updateField({ phone: e.target.value })}
                />
                <Input
                    placeholder="Business Name (Optional)"
                    onChange={(e) => updateField({ businessName: e.target.value })}
                />
                <div className="flex flex-row gap-[10px]">
                   <Input
                    type="checkbox"
                    className="h-[20px] w-[20px]"
                    onChange={(e) =>
                        updateField({ isBusinessRegistered: e.target.checked })
                    }
                /> 
                <label className="ml-2">Is your business registered?</label>
                </div>
                
                    
       
                <h3 className="text-lg font-medium mt-4">Social Media Links</h3>
                {links.map((link, index) => (
                    <Input
                        key={index}
                        placeholder={`Social Media Link ${index + 1}`}
                        value={link}
                        onChange={(e) => handleLinkChange(index, e.target.value)}
                    />
                ))}
                <Button variant="ghost" onClick={addNewLink}>
                    Add another link
                </Button>
            </div>
            <Button onClick={handleSubmit} className="mt-6">
                Next
            </Button>
        </div>
    );
};

export default Step2;
