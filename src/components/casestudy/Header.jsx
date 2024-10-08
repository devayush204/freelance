/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import Button from "./Button";

const Header = () => {
  const navItems = [
    { label: "Services", hasDropdown: true },
    { label: "About Clients", hasDropdown: true },
    { label: "About Us" },
    { label: "Contact Us" },
  ];

  return (
    <header className="flex items-start pr-5 pb-px pl-8 text-base bg-white border-b border-zinc-100 max-md:pl-5 max-md:mr-2.5">
      <nav className="flex flex-wrap gap-5 justify-between px-16 pt-3.5 min-w-[240px] w-[1380px] max-md:px-5 max-md:max-w-full">
        <div className="flex gap-2.5 items-center text-slate-900">
          <Logo />
          {navItems.map((item, index) => (
            <NavItem key={index} {...item} />
          ))}
        </div>
        <div className="flex gap-5 items-center my-auto">
          <button className="grow self-stretch my-auto text-slate-900">
            Login
          </button>
          <Button label="Sign up free →" />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fbbc90a4c2a14b911b4f564f7f2e80b8f64a5eefe36e006f8ea3dc4f28ddc7f0?placeholderIfAbsent=true&apiKey=0d7a153a28b9484c96314809a6915196"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto aspect-[1.5] w-[30px]"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
