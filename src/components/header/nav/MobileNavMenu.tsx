import { FC } from "react";
import { Backdrop } from "@mui/material";

interface MobileNavMenuPropsType {
  open?: boolean;
}

export const MobileNavMenu: FC<MobileNavMenuPropsType> = (props) => {
  const { open = false } = props;

  return <Backdrop open={open}>Menu</Backdrop>;
};
