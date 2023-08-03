import { FC } from "react";
import { NavItems } from "@components/header";
import { NavItemsList } from "@constant/header";
import { NavItemProps } from "@components/header/nav/type";

import { LayoutGroup } from "framer-motion";

import { useGlobalContext } from "@src/context/GlobalContext";

const NavMenu: FC = () => {
  const { location, setLocation } = useGlobalContext();

  const onClick = ({ label }: NavItemProps) => {
    setLocation(label);
    console.log("label", label);
  };

  return (
    <div>
      <ul className="flex list-none border-b-2">
        <LayoutGroup>
          {NavItemsList.map((item) => (
            <NavItems
              onClick={onClick}
              isCurrent={location === item.label}
              {...item}
            />
          ))}
        </LayoutGroup>
      </ul>
    </div>
  );
};

export default NavMenu;
