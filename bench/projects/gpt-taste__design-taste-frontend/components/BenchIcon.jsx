"use client";

import {
  ArrowRight,
  Bank,
  Binoculars,
  Camera,
  ChartLineUp,
  CheckCircle,
  Clock,
  Compass,
  CreditCard,
  FileText,
  Gauge,
  LockKey,
  MapTrifold,
  NotePencil,
  Notebook,
  Package,
  RadioButton,
  ShieldCheck,
  SlidersHorizontal,
  Truck,
  UserCircle,
  Warehouse,
  WarningCircle
} from "@phosphor-icons/react";

const icons = {
  ArrowRight,
  Bank,
  Binoculars,
  Camera,
  ChartLineUp,
  CheckCircle,
  Clock,
  Compass,
  CreditCard,
  FileText,
  Gauge,
  LockKey,
  MapTrifold,
  NotePencil,
  Notebook,
  Package,
  RadioButton,
  ShieldCheck,
  SlidersHorizontal,
  Truck,
  UserCircle,
  Warehouse,
  WarningCircle
};

export function BenchIcon({ name, size = 18, weight = "bold", className }) {
  const Icon = icons[name];

  if (!Icon) {
    return null;
  }

  return <Icon size={size} weight={weight} className={className} aria-hidden="true" />;
}
