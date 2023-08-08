import { FC } from "react";
import { useLocation } from "react-router-dom";
import { NavItems } from "@components/header";
import { NavItemsList } from "@constant/header";

import { LayoutGroup } from "framer-motion";

import { useGlobalContext } from "@src/context/GlobalContext";

const NavMenu: FC = () => {
  const location = useLocation();

  const { setHashScrolling } = useGlobalContext();

  return (
    <div>
      <ul className="flex list-none border-b-2">
        <LayoutGroup>
          {NavItemsList.map((item) => (
            <NavItems
              isCurrent={checkIsCurrent(location.hash, item.sectionID)}
              {...item}
            />
          ))}
        </LayoutGroup>
      </ul>
    </div>
  );
};

export default NavMenu;

export function checkIsCurrent(currentHash: string, itemID: string) {
  const isHomeHash = currentHash === "#" || !currentHash || currentHash === "";
  if (isHomeHash && itemID === NavItemsList[0].sectionID) return true;
  return currentHash === `#${itemID}`;
}
