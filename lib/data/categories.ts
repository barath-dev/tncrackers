import type { ComponentType } from "react";
import {
  AppstoreOutlined,
  BulbOutlined,
  ClusterOutlined,
  EditOutlined,
  GiftOutlined,
  GoldOutlined,
  LinkOutlined,
  RiseOutlined,
  RocketOutlined,
  SoundOutlined,
  StarOutlined,
  SyncOutlined,
  TeamOutlined,
  ThunderboltFilled,
  ThunderboltOutlined,
} from "@ant-design/icons";

export interface Category {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  /** Card-sized photo (public/images/card/*) used in grids and product covers. */
  image: string;
  /** Wide banner photo (public/images/wide/*) used on category page headers. */
  banner: string;
}

export const categories: Category[] = [
  {
    slug: "sparklers",
    name: "Sparklers",
    tagline: "Hand-held light for every celebration",
    description:
      "Bright, long-burning sparklers in a range of sizes, perfect for kids and family gatherings alike.",
    icon: BulbOutlined,
    image: "/images/card/sparklers.jpg",
    banner: "/images/wide/sparklers.jpg",
  },
  {
    slug: "flower-pots",
    name: "Flower Pots",
    tagline: "Ground fountains in vivid colour",
    description:
      "Ground fountains that bloom into tall, colourful sprays — a festival favourite for every age group.",
    icon: GoldOutlined,
    image: "/images/card/flower-pots.jpg",
    banner: "/images/wide/flower-pots.jpg",
  },
  {
    slug: "ground-spinners",
    name: "Ground Spinners",
    tagline: "Whirling chakkars for the courtyard",
    description:
      "Spinning ground wheels that throw off rings of sparks — easy to light and always a crowd-pleaser.",
    icon: SyncOutlined,
    image: "/images/card/ground-spinners.jpg",
    banner: "/images/wide/ground-spinners.jpg",
  },
  {
    slug: "aerial-rockets",
    name: "Aerial Rockets",
    tagline: "Skyward whistles and colour bursts",
    description:
      "Single and multi-stage rockets that climb high before bursting into colour, sound, or a soft whistle.",
    icon: RocketOutlined,
    image: "/images/card/aerial-rockets.jpg",
    banner: "/images/wide/aerial-rockets.jpg",
  },
  {
    slug: "sound-crackers",
    name: "Sound Crackers",
    tagline: "Classic single-shot crackers",
    description:
      "Traditional single-sound crackers, sized from starter packs to the bigger, deeper-toned varieties.",
    icon: SoundOutlined,
    image: "/images/card/diwali-fireworks.jpg",
    banner: "/images/wide/diwali-fireworks.jpg",
  },
  {
    slug: "sound-bombs",
    name: "Sound Bombs",
    tagline: "Deep, resonant celebration bursts",
    description:
      "Heavier-bodied crackers built for a louder, deeper report — popular for big festival moments.",
    icon: ThunderboltOutlined,
    image: "/images/card/diwali-fireworks.jpg",
    banner: "/images/wide/diwali-fireworks.jpg",
  },
  {
    slug: "chain-crackers",
    name: "Chain Crackers",
    tagline: "Continuous strings of celebration",
    description:
      "Linked strings of small crackers that burst in a continuous chain — a traditional festival staple.",
    icon: LinkOutlined,
    image: "/images/card/diwali-fireworks.jpg",
    banner: "/images/wide/diwali-fireworks.jpg",
  },
  {
    slug: "electric-crackers",
    name: "Electric Crackers",
    tagline: "Sharp, rapid-fire snaps",
    description:
      "Compact, rapid-fire crackers known for their sharp, quick snap — sold in convenient pack sizes.",
    icon: ThunderboltFilled,
    image: "/images/card/diwali-fireworks.jpg",
    banner: "/images/wide/diwali-fireworks.jpg",
  },
  {
    slug: "matchbox-crackers",
    name: "Matchbox Crackers",
    tagline: "Boxed sets for effortless celebration",
    description:
      "Neatly boxed assortments that bundle several small crackers together for easy gifting and use.",
    icon: AppstoreOutlined,
    image: "/images/card/diwali-fireworks.jpg",
    banner: "/images/wide/diwali-fireworks.jpg",
  },
  {
    slug: "pencil-crackers",
    name: "Pencil Crackers",
    tagline: "Slim ground crackers with a steady spark",
    description:
      "Slender ground-standing crackers that release a steady shower of sparks over several seconds.",
    icon: EditOutlined,
    image: "/images/card/diwali-fireworks.jpg",
    banner: "/images/wide/diwali-fireworks.jpg",
  },
  {
    slug: "multi-shot-cakes",
    name: "Multi-Shot Cakes",
    tagline: "Layered bursts, one continuous show",
    description:
      "Pre-linked cakes that fire a sequence of aerial shots automatically — a compact fireworks display.",
    icon: ClusterOutlined,
    image: "/images/card/aerial-burst-gold.jpg",
    banner: "/images/wide/aerial-burst-gold.jpg",
  },
  {
    slug: "sky-shots",
    name: "Sky Shots",
    tagline: "Tall aerial shells in classic gold and silver",
    description:
      "Single aerial shells that rise high and open into wide, glittering canopies of light.",
    icon: RiseOutlined,
    image: "/images/card/aerial-burst-gold.jpg",
    banner: "/images/wide/aerial-burst-gold.jpg",
  },
  {
    slug: "colour-sky-shots",
    name: "Colour Sky Shots",
    tagline: "Vivid multi-colour aerial displays",
    description:
      "Aerial shells engineered for rich, layered colour — a step up for a more dramatic night sky.",
    icon: StarOutlined,
    image: "/images/card/aerial-burst-colour.jpg",
    banner: "/images/wide/aerial-burst-colour.jpg",
  },
  {
    slug: "family-combo-packs",
    name: "Family Combo Packs",
    tagline: "A little bit of everything, boxed together",
    description:
      "Curated assortments spanning sound, light, and aerial crackers — built for a full evening of celebration.",
    icon: TeamOutlined,
    image: "/images/card/aerial-burst-colour.jpg",
    banner: "/images/wide/aerial-burst-colour.jpg",
  },
  {
    slug: "gift-combo-boxes",
    name: "Gift Combo Boxes",
    tagline: "Ready-to-gift celebration sets",
    description:
      "Premium, gift-wrapped combo boxes that make it easy to send festive cheer to friends and family.",
    icon: GiftOutlined,
    image: "/images/card/aerial-burst-colour.jpg",
    banner: "/images/wide/aerial-burst-colour.jpg",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
