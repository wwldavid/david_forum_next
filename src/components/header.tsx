import { auth } from "@/auth";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Input, Avatar} from "@heroui/react";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default async function Header() {
  const session = await auth()
  let authContent: React.ReactNode
  if(session?.user){
     authContent = <Avatar  src={session.user.image || "https://i.pravatar.cc/150?u=a042581f4e29026024d"} />
  } else {
    authContent = <>
       <NavbarItem className="hidden lg:flex">
        <Button as={Link} color="secondary" href="#" variant="bordered">
            Sign In
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="secondary" href="#">
            Sign Up
          </Button>
        </NavbarItem>
    </>
  }
  return (
    <Navbar className="border-b-1 border-gray-200">
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">DISCUSS</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Input />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {authContent}
      </NavbarContent>
    </Navbar>
  );
}
