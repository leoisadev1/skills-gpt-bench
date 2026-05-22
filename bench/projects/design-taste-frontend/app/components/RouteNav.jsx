import Link from "next/link";
import { routes } from "../../lib/content";
import { Icon } from "./Icon";

export function RouteNav() {
  return (
    <nav className="route-nav" aria-label="Benchmark routes">
      <Link href="/" className="wordmark" aria-label="Design Taste Frontend home">
        <span className="mark" aria-hidden="true" />
        <span>Design Taste</span>
      </Link>
      <div className="route-nav__links">
        {routes.map((route) => (
          <Link key={route.href} href={route.href}>
            {route.label}
          </Link>
        ))}
      </div>
      <Link href="/suite" className="nav-action">
        Atlas <Icon name="ArrowRight" size={16} />
      </Link>
    </nav>
  );
}
