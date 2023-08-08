import { FC, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { MobileNavMenu } from "./MobileNavMenu";

export const MobileNav: FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <>
      <Hamburger color="white" hideOutline toggled={isOpen} toggle={setOpen} />
      <MobileNavMenu open={isOpen} toggle={setOpen} />
    </>
  );
};
