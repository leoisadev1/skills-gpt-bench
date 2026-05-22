import Link from "next/link";
import { topRoutes } from "../../lib/content";
import { AppIcon } from "./AppIcon";

const routeIcons = {
  "/landing": "House",
  "/dashboard": "Gauge",
  "/product": "Package",
  "/suite": "Compass"
};

export function RouteNav({ active }) {
  return (
    <nav className="route-nav" aria-label="Benchmark surfaces">
      <Link className="route-nav__brand" href="/">
        <span className="mark" aria-hidden="true" />
        <span>Skill Bench</span>
      </Link>
      <div className="route-nav__links">
        {topRoutes.map((route) => {
          return (
            <Link
              key={route.href}
              className="route-link"
              data-active={active === route.href}
              href={route.href}
            >
              <AppIcon name={routeIcons[route.href]} size={17} weight="regular" aria-hidden="true" />
              <span>{route.label}</span>
            </Link>
          );
        })}
      </div>
      <Link className="icon-button" href="/suite" aria-label="Open Northstar Atlas">
        <AppIcon name="ArrowRight" size={18} weight="bold" aria-hidden="true" />
      </Link>
    </nav>
  );
}
