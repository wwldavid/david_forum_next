'use client'
import * as actions from '@/actions'
import {
  NavbarItem, 
  Popover, 
  PopoverTrigger, 
  PopoverContent, 
  Button, 
  Avatar} from "@heroui/react";
import { useSession } from "next-auth/react";
import Spinner from './spinner';


export default function HeaderAuth() {
  const { data: session, status } = useSession()
  let authContent: React.ReactNode
  if(status === 'loading'){
    authContent = <Spinner/>
  } else if(session?.user){
     authContent = (
      <Popover placement="bottom" >
        <PopoverTrigger>
     <Avatar  src={session.user.image || "https://i.pravatar.cc/150?u=a042581f4e29026024d"} />
     </PopoverTrigger>
     <PopoverContent>
      <form className="p-4" action={actions.signOut}>
        <button type="submit" >logout</button>
      </form>
     </PopoverContent>
     </Popover>
    )
  } else {
    authContent = <>
       <NavbarItem className="hidden lg:flex">
       <form action={actions.signIn} >
          <Button type="submit" color="secondary" href="#" variant="bordered">
            Sign In
          </Button>
       </form>
        </NavbarItem>
        <NavbarItem>
        <form action={actions.signIn} >
          <Button type="submit" color="secondary" href="#">
            Sign Up
          </Button>
          </form>
        </NavbarItem>
    </>
  }
  return authContent;
}
