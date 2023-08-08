import { FC, Dispatch, SetStateAction } from "react";
import { useLocation } from "react-router-dom";
import { NavItemsList } from "@constant/header";
import { Drawer } from "@mui/material";

import { MobileNavItem } from "./MobileNavItem";

import { checkIsCurrent } from "./NavMenu";

interface MobileNavMenuPropsType {
  open?: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
}

export const MobileNavMenu: FC<MobileNavMenuPropsType> = (props) => {
  const { open = false, toggle } = props;

  const location = useLocation();

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={() => toggle(false)}
      PaperProps={{
        style: {
          backgroundColor: "var(--main-text-color)",
        },
      }}
    >
      {NavItemsList.map((item) => (
        <MobileNavItem
          isCurrent={checkIsCurrent(location.hash, item.sectionID)}
          onClick={() => toggle(false)}
          {...item}
        />
      ))}
    </Drawer>
  );
};
