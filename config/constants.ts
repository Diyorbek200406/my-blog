import { EngIcons, RusIcons, TurkIcons, UzbIcons } from "@/icons";
import { Youtube, Instagram, Linkedin, Facebook } from "lucide-react";
export const Navigation = [
  {
    title: "header_title_home",
    route: "/",
  },
  {
    title: "header_title_about",
    route: "/about",
  },
  {
    title: "header_title_projects",
    route: "/projects",
  },
  {
    title: "header_title_skills",
    route: "/skills",
  },
  {
    title: "header_title_blogs",
    route: "/blogs",
  },
  {
    title: "header_title_contacts",
    route: "/contacts",
  },
];

export const FooterIcons = [
  {
    title: "facebook",
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=100093070954618",
  },
  {
    title: "instagram",
    icon: Instagram,
    href: "https://www.instagram.com/diyorbek_dev_04/",
  },
  {
    title: "linkedin",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/diyorbek-erkinov-8a4032278/",
  },
  {
    title: "youtube",
    icon: Youtube,
    href: "https://www.youtube.com/",
  },
];

export const language = [
  { nativeLng: "English", lng: "en", icon: EngIcons },
  { nativeLng: "O'zbek", lng: "uz", icon: UzbIcons },
  { nativeLng: "Türkçe", lng: "tr", icon: TurkIcons },
  { nativeLng: "Русский", lng: "ru", icon: RusIcons },
];
