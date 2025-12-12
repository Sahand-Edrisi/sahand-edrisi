export interface IContactMe {
  id: number;
  icon: string;
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
    icon: "/icons/gmail.png",
    text: "Email ME",
    width: widthImage,
    height: heightImage,
    alt: "gmail",
    href: "mailto:sahand.edc@gmail.com",
  },
  {
    id: 2,
    icon: "/icons/phone-call.png",
    text: "+98 919 581 2500",
    width: widthImage,
    height: heightImage,
    alt: "Phone number",
    href: "tel:+989195812500",
  },
];
