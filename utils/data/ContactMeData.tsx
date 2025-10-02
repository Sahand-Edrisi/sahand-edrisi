import Gmail from "@/public/icons/gmail.png";
import PhoneNumber from "@/public/icons/phone-call.png";
import { StaticImageData } from "next/image";
// import University from "@/public/icons/university.png"

export interface IContactMe {
  id: number;
  icon: StaticImageData;
  text: string;
  width: number;
  height: number;
  alt: string;
  href: string;
}
export type IContactMeType = IContactMe[];

const widthImage = 20;
const heightImage = 20;

export const ContactMeData: IContactMeType = [
  {
    id: 1,
    icon: Gmail,
    text: "Email ME",
    width: widthImage,
    height: heightImage,
    alt: "gmail",
    href: "mailto:sahand.edc@gmail.com",
  },
  {
    id: 2,
    icon: PhoneNumber,
    text: "+98 919 581 2500",
    width: widthImage,
    height: heightImage,
    alt: "Phone number",
    href: "tel:+989195812500",
  },
];
