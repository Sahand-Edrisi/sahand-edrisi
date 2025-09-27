"use client";
import { PageItem } from "@/utils/types/Types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCode,
  faFolderOpen,
  faBriefcase,
  faEnvelope,
  faHomeAlt,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const items: PageItem[] = [
  { icon: faHomeAlt, id: 1, href: "" },
  { icon: faUser, id: 2, href: "" },
  { icon: faCode, id: 3, href: "" },
  { icon: faFolderOpen, id: 4, href: "" },
  { icon: faBriefcase, id: 5, href: "" },
  { icon: faEnvelope, id: 6, href: "" },
];

const Navbar = () => {
  return (
    <>
      <div className="bg-gray-700 fixed w-full bottom-0">
        <div className="flex text-lg font-medium justify-around">
          {items.map((item) => (
            <Link
              href={item.href}
              key={item.id}
              className="flex m-1  text-lg p-2 border rounded-full cursor-pointer "
            >
              <FontAwesomeIcon icon={item.icon} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
