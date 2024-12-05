import { navbarItemType } from "@/types/navbar.types";

export default function NavBarItem({ item }: { item: navbarItemType }) {
  return (
    item.text &&
    item.url && (
      <li>
        <a
          href={item.url}
          className="text-white capitalize text-base font-light"
        >
          {item.text}
        </a>
      </li>
    )
  );
}
