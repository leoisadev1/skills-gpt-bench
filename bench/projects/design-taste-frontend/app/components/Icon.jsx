"use client";

import {
  Aperture,
  ArrowRight,
  Backpack,
  BatteryCharging,
  BellRinging,
  CalendarBlank,
  Camera,
  ChartLineUp,
  CheckCircle,
  ClipboardText,
  Compass,
  CreditCard,
  FileText,
  Gauge,
  GearSix,
  LockKey,
  MagnifyingGlass,
  MapTrifold,
  Notebook,
  Package,
  RadioButton,
  Ruler,
  Scales,
  ShieldCheck,
  Signpost,
  SlidersHorizontal,
  Truck,
  UserCircleGear,
  Warning,
  Warehouse
} from "@phosphor-icons/react";

const iconMap = {
  Aperture,
  ArrowRight,
  Backpack,
  BatteryCharging,
  BellRinging,
  CalendarBlank,
  Camera,
  ChartLineUp,
  CheckCircle,
  ClipboardText,
  Compass,
  CreditCard,
  FileText,
  Gauge,
  GearSix,
  LockKey,
  MagnifyingGlass,
  MapTrifold,
  Notebook,
  Package,
  RadioButton,
  Ruler,
  Scales,
  ShieldCheck,
  Signpost,
  SlidersHorizontal,
  Truck,
  UserCircleGear,
  Warning,
  Warehouse
};

export function Icon({ name, size = 20, weight = "duotone", ...props }) {
  const Component = iconMap[name];
  return <Component aria-hidden="true" focusable="false" size={size} weight={weight} {...props} />;
}
