// stores/creatorStore.ts
import { create } from "zustand";

interface CreatorState {
  step: number;
  fullName: string;
  email: string;
  phone?: string;
  businessName?: string;
  isBusinessRegistered?: boolean;
  socialMediaLinks: string[];
  apparelType?: string;
  specialization?: string;
  experience?: string;
  communicationPreference?: string;
  setStep: (step: number) => void;
  updateField: (field: Partial<CreatorState>) => void;
  addSocialMediaLink: (link: string) => void;
}

export const useCreatorStore = create<CreatorState>((set) => ({
  step: 1,
  fullName: "",
  email: "",
  phone: undefined,
  businessName: undefined,
  isBusinessRegistered: undefined,
  socialMediaLinks: [""],
  apparelType: undefined,
  specialization: undefined,
  experience: undefined,
  communicationPreference: undefined,
  setStep: (step) => set({ step }),
  updateField: (field) => set((state) => ({ ...state, ...field })),
  addSocialMediaLink: (link) =>
    set((state) => ({ socialMediaLinks: [...state.socialMediaLinks, link] })),
}));
