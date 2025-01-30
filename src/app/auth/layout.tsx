import GradientBg from "@/components/gradient/gradientBg";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="relative h-screen w-full overflow-hidden">
    <GradientBg />
    <div className="relative z-[3]">{children}</div>
    
    </div>;
}
