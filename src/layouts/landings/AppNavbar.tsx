"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/utils";

export default function AppNavbar() {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="flex gap-4">
        <li>
          <Link className={cn("text-slate-800", pathname === "/" && "text-green-600")} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={cn("text-slate-800", pathname === "/cabins" && "text-green-600")} href="/cabins">
            Cabins
          </Link>
        </li>
        <li>
          <Link className={cn("text-slate-800", pathname === "/account" && "text-green-600")} href="/account">
            Account
          </Link>
        </li>
        <li>
          <Link className={cn("text-slate-800", pathname === "/about-us" && "text-green-600")} href="/about-us">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
