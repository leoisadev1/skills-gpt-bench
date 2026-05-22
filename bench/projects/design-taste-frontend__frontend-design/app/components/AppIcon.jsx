"use client";

import {
  ArrowRight,
  Binoculars,
  Briefcase,
  CalendarCheck,
  CheckCircle,
  Compass,
  CreditCard,
  FileMagnifyingGlass,
  FileText,
  Gauge,
  House,
  Keyhole,
  LockKey,
  MagnifyingGlass,
  MapPinArea,
  MapTrifold,
  Package,
  Plus,
  Scales,
  ShieldCheck,
  UserCircle,
  UsersThree,
  WarningCircle
} from "@phosphor-icons/react";

const icons = {
  ArrowRight,
  Binoculars,
  Briefcase,
  CalendarCheck,
  CheckCircle,
  Compass,
  CreditCard,
  FileMagnifyingGlass,
  FileText,
  Gauge,
  House,
  Keyhole,
  LockKey,
  MagnifyingGlass,
  MapPinArea,
  MapTrifold,
  Package,
  Plus,
  Scales,
  ShieldCheck,
  UserCircle,
  UsersThree,
  WarningCircle
};

export function AppIcon({ name, size = 18, weight = "regular", ...props }) {
  const Icon = icons[name];
  if (!Icon) return null;
  return <Icon size={size} weight={weight} {...props} />;
}
