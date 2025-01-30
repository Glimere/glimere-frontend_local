// components/onboarding/Step6.tsx
import { useCreatorStore } from "@/store/creatorStore";
import { Button } from "@/components/ui/button";

const Step6 = () => {
  const { setStep, ...creatorInfo } = useCreatorStore();

  const handleSubmit = () => {
    console.log("Submitting creator information:", creatorInfo);
    setStep(7);
  };

  return (
    <div className="p-6 text-center max-w-lg bg-transparent-white-300 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Review Your Information</h1>
      <p className="mb-6">Please review the information you’ve entered:</p>
      <ul className="text-left mb-6">
        <li>
          <strong>Full Name:</strong> {creatorInfo.fullName}
        </li>
        <li>
          <strong>Email:</strong> {creatorInfo.email}
        </li>
        <li>
          <strong>Phone:</strong> {creatorInfo.phone || "N/A"}
        </li>
        <li>
          <strong>Business Name:</strong> {creatorInfo.businessName || "N/A"}
        </li>
        <li>
          <strong>Business Registered:</strong>{" "}
          {creatorInfo.isBusinessRegistered ? "Yes" : "No"}
        </li>
        <li>
          <strong>Social Media Links:</strong>
          <ul>
            {creatorInfo.socialMediaLinks.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </li>
        <li>
          <strong>Apparel Type:</strong> {creatorInfo.apparelType}
        </li>
        <li>
          <strong>Specialization:</strong> {creatorInfo.specialization || "N/A"}
        </li>
        <li>
          <strong>Experience:</strong> {creatorInfo.experience || "N/A"}
        </li>
        <li>
          <strong>Communication Preference:</strong>{" "}
          {creatorInfo.communicationPreference}
        </li>
      </ul>
      <div className="flex justify-between">
        <Button onClick={() => setStep(5)}>Back</Button>
        <Button onClick={handleSubmit}>Submit Application</Button>
      </div>
    </div>
  );
};

export default Step6;
