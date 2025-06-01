
export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen w-full bg-white">
      <div className="relative z-[3]">{children}</div>
    </div>
  );
}
