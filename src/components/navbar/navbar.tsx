import React from 'react'
import MainRoutes from './main-routes'
import Logo from './logo'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'

const auth_routes = [
  {
    label: "Sign In",
    href: "/sign-in"
  },
  {
    label: "Sign Up",
    href: "/sign-up"
  },


]

export default function Navbar () {
  return (
    <header className='w-full h-auto border py-2 bg-white'>
      <nav className="width-container flex items-center justify-between"> 
        {/* Logo */}
        <Logo />

        {/* Main Routes */}
        <div className="hidden md:block">
          <MainRoutes />
        </div>
        

        {/* Authentication Routes */}
        <div className="flex items-center justify-center gap-4">
          <div className="hidden md:flex items-center justify-centear gap-2 md:gap-4">
            {auth_routes.map((route) => (
              <Link 
              href={route.href} 
              key={route.href} 
              >
                <Button 
                variant="outline" className={cn("md:text-sm text-xs cursor-pointer  hover:bg-neutral-200", route.label === "Sign Up" && "text-white bg-blue-600 hover:bg-blue-600/50")}>
                  {route.label}
                </Button>
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu />
              </SheetTrigger>
              <SheetContent className='w-full'>
                <MainRoutes />
                <div className="md:hidden flex flex-col md:items-center md:justify-center items-start justify-start gap-2 md:gap-4">
                    {auth_routes.map((route) => (
                      <Link 
                      href={route.href} 
                      key={route.href}
                      className='py-2 px-4 w-full cursor-pointer  hover:bg-neutral-200' 
                      >
                        <div 
                        className={cn("md:text-md text-md", route.label === "Sign Up" && "")}>
                          {route.label}
                        </div>
                      </Link>
                    ))}
          </div>
              </SheetContent>
            </Sheet>
            </div>
            
        </div>
      </nav>
    </header>
  )
}
