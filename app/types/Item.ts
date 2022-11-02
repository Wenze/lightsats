import { Platform } from "types/Platform";

type ItemCategory =
  | "wallets"
  | "spend"
  | "earn"
  | "buy"
  | "save"
  | "send"
  | "tip"
  | "donate"
  | "learn";

export type Item = {
  name: string;
  link: string;
  slogan: string;
  image: string;
  languageCodes: string[];
  platforms: Platform[];
  category: ItemCategory;
  lightsatsRecommended?: boolean;
};