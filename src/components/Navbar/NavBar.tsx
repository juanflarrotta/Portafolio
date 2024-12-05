import { navbarItemType, navbarType } from "@/types/navbar.types";
import NavBarItem from "./NavBarItem";
import React from "react";

export default function NavBar({ items }: { items: navbarType }) {
  return (
    items.length > 0 && (
      <nav className="row-start-1 h-14 self-start">
        <ul className="flex flex-row flex-end justify-center gap-x-4 p-4">
          {items.map((item: navbarItemType) => {
            return (
              <React.Fragment key={item.text}>
                <NavBarItem item={item} />
              </React.Fragment>
            );
          })}
        </ul>
      </nav>
    )
  );
}
