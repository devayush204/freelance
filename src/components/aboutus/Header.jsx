/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import AuthButtons from "./AuthButtons";

function Header() {
  return (
    <header className="flex items-start self-stretch pr-5 pb-px pl-8 text-base bg-white border-b border-zinc-100 max-md:pl-5">
      <div className="flex flex-wrap gap-5 justify-between px-16 pt-3.5 min-w-[240px] w-[1380px] max-md:px-5 max-md:max-w-full">
        <Logo />
        <Navigation />
        <AuthButtons />
      </div>
    </header>
  );
}

export default Header;
