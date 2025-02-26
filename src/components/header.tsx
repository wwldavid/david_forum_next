
import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  Input} from "@heroui/react";
import HeaderAuth from "./header-auth";
import Logo from "./logo";



export default async function Header() {

  return (
    <Navbar className="border-b-1 border-gray-200">
      <NavbarBrand className="flex items-center space-x-2">
        <Logo/>
        <p className="font-bold text-inherit">DISCUSS</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Input />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}
