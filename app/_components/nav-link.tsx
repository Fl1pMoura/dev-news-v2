"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      className="h-11 flex items-center relative hover:text-primary transition-colors group"
      href={href}
    >
      {children}
      <span
        className={cn(
          "h-px w-0 bg-white absolute bottom-0 left-0 opacity-0 group-hover:w-full group-hover:opacity-100 transition-all",
          isActive && "w-full opacity-100",
        )}
      ></span>
    </Link>
  );
};

export default NavLink;
