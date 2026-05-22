import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/ssr";

export function NavLink({
  href,
  children,
  className = ""
}) {
  return (
    <Link className={`nav-action ${className}`} href={href}>
      <span>{children}</span>
      <ArrowRight size={16} weight="bold" aria-hidden="true" />
    </Link>
  );
}
