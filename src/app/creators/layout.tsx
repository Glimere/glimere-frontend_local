import GradientBg from "@/components/gradient/gradientBg";
import Header from "@/components/header";
import NavBar from "@/components/nav-bar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-alabaster font-sans antialiased")}>
        <TooltipProvider>
          <div className="bg-muted/40 relative flex min-h-screen w-full flex-col overflow-hidden">
            <GradientBg />
            <div className="z-[2] flex flex-col sm:gap-0 sm:py-4">
              <div className="flex flex-col gap-[10px] sm:gap-[27px]">
                <NavBar />
                <Header />
              </div>

              {children}
            </div>
          </div>
        </TooltipProvider>
      </body>
    </html>
  );
}
