"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

export default function DashboardBreadcrumbs() {
  const pathname = usePathname();

  // Split the pathname into segments and filter out empty segments
  const pathSegments = pathname.split("/").filter(Boolean);

  // Optional: Map or transform segments to more user-friendly names
  const breadcrumbs = pathSegments.map((segment, index) => {
    // Create a path up to the current segment
    const href = "/" + pathSegments.slice(0, index + 1).join("/");
    // Optional: Replace or format segment text here
    const formattedSegment = segment.charAt(0).toUpperCase() + segment.slice(1);
    return { href, text: formattedSegment };
  });

  return (
    <div className="hidden md:flex w-full font-bold pt-5">
      <Breadcrumb className="hidden md:flex">
        <BreadcrumbList>
          {breadcrumbs.map(({ href, text }, index) => (
            <Fragment key={href}>
              {index > 0 && <BreadcrumbSeparator />}
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  {/* Last breadcrumb should not be a link */}
                  {index === breadcrumbs.length - 1 ? (
                    <BreadcrumbPage>{text}</BreadcrumbPage>
                  ) : (
                    <Link href={href}>{text}</Link>
                  )}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
