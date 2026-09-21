import {
  Target,
  GraduationCap,
  BookOpen,
  Feather,
  Compass,
  Newspaper,
  Table2,
  Wifi,
  Plug,
  BookMarked,
  Droplet,
  ParkingSquare,
  Bookmark,
  Armchair,
  Printer,
  Monitor,
  Snowflake,
  Users,
  UtensilsCrossed,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  target: Target,
  cap: GraduationCap,
  book: BookOpen,
  feather: Feather,
  compass: Compass,
  news: Newspaper,
  table: Table2,
  wifi: Wifi,
  plug: Plug,
  magazine: BookMarked,
  drop: Droplet,
  parking: ParkingSquare,
  bookmark: Bookmark,
  seat: Armchair,
  printer: Printer,
  computer: Monitor,
  ac: Snowflake,
  discussion: Users,
  lunch: UtensilsCrossed,
  shield: ShieldCheck,
};

export default function Icon({ name, size = 20 }: { name: string; size?: number }) {
  const Cmp = icons[name] ?? BookOpen;
  return <Cmp size={size} strokeWidth={1.75} aria-hidden="true" />;
}
