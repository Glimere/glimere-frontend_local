"use client";

import DashboardSearch from "@/components/dash-search";
import NavSheet from "@/components/nav-sheet";
import { usePathname } from "next/navigation";

import DashboardBreadcrumbs from "./dash-breadcrumbs";

export default function Header() {
  const navBarItems = [
    { name: "Dashboard", href: "/creators" },
    { name: "Orders", href: "/creators/orders" },
    { name: "Products", href: "/creators/products" },
    { name: "Customers", href: "/creators/customers" },
  ];

  const pathname = usePathname();
  const isDashboard = pathname === "/creators" || pathname === "/creators/";
  return (
    <header className="bg-background sticky top-0 z-30 flex h-14 items-center gap-4 border-b px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-[5.75rem]">
      <NavSheet />

      {isDashboard ? (
        <ul className="flex flex-row items-center gap-[30px] text-[14px] text-dark">
          {navBarItems.map((item) => (
            <li key={item.name} className="hidden sm:block">
              <a
                href={item.href}
                className={`duration-150 ${
                  pathname === item.href
                    ? "text-primary-100 hover:text-amber-800"
                    : "text-primary"
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <DashboardBreadcrumbs />
      )}
      <DashboardSearch />
    </header>
  );
}
