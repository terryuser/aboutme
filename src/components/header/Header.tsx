import { FC, useRef, useEffect } from "react";
import { NavMenu, MobileNav } from "@components/header";
import { Logo } from "@images/svgx";

import { useIsMobile, useIsTablet } from "@hook/useWindowSize";

import { useGlobalContext } from "@src/context/GlobalContext";

const Header: FC = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isDesktop = !isMobile && !isTablet;

  const { location, setHeaderHeight } = useGlobalContext();

  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!document || !headerRef) return;

    setHeaderHeight(headerRef.current?.offsetHeight ?? 0);

    const handlerResize = () => {
      const height = headerRef.current?.offsetHeight ?? 0;
      setHeaderHeight(height);
    };

    document.addEventListener("resize", handlerResize);

    return () => document.removeEventListener("resize", handlerResize);
  }, []);

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 w-full py-2">
      <div className="flex items-center justify-between max-md:px-5">
        <div className="lg:px-5 py-2">
          <Logo width={50} height={50} fill={"white"} />
        </div>
        {isDesktop ? <NavMenu /> : <MobileNav />}
      </div>
    </header>
  );
};

export default Header;
