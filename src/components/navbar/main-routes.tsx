import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'


const main_routes = [
  {
    label: "Events",
    href: "/events"
  },
  {
    label: "Categories",
    href: "/categories"
  },
  {
    label: "About",
    href: "/about"
  },
]


export default function MainRoutes() {

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-center justify-start items-start lg:gap-12 md:gap-8 gap-4 md:mt-0 mt-12">
          {main_routes.map((route) => (
            <Link href={route.href}
            key={route.href} 
            className={cn("md:text-md md:px-0 px-4 text-md capitalize w-full md:hover:bg-transparent hover:bg-neutral-100 py-2", )}>
                {route.label}
            </Link>
          ))}
        </div>
  )
}
