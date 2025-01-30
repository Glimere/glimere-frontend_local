// components/onboarding/Step7.tsx
import { Button } from "@/components/ui/button";

const Step7 = () => {
  return (
    <div className="p-6 text-center max-w-lg bg-transparent-white-300 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Thank You!</h1>
      <p className="mb-6">
        We’ve received your application and will review it shortly. We’ll be in
        touch with further instructions.
      </p>
      <p className="mb-6">
        In the meantime, feel free to explore the Glimere platform and discover
        the possibilities.
      </p>
      <Button asChild>
        <a href="/">Return to Home</a>
      </Button>
    </div>
  );
};

export default Step7;
