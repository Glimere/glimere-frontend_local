import DashboardBreadcumbs from "@/components/dash-breadcrumbs";
import DashboardSearch from "@/components/dash-search";
import NavSheet from "@/components/nav-sheet";
import SideBar from "@/components/sidebar-bar";
import { TooltipProvider } from "@/components/ui/tooltip";
import UserMenu from "@/components/usermenu";
import { cn } from "@/lib/utils";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-background min-h-screen font-sans antialiased")}>
        <TooltipProvider>
          <div className="bg-muted/40 flex min-h-screen w-full flex-col">
            <SideBar />
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
              <header className="bg-background sticky top-0 z-30 flex h-14 items-center gap-4 border-b px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                <NavSheet />
                <DashboardBreadcumbs />
                <DashboardSearch />
                <UserMenu />
              </header>
              {children}
            </div>
          </div>
        </TooltipProvider>
      </body>
    </html>
  );
}
