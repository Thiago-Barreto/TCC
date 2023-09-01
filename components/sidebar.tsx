"use-client"

import Link from 'next/link'
import Image from 'next/image'
import { Montserrat } from "next/font/google"
import { cn } from '@/lib/utils'
import { LayoutDashboard, MessagesSquare } from 'lucide-react'

const montserrat = Montserrat({
    weight: "600",
    subsets: ["latin"]
})

const route = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500"
    },
    {
        label: "Gerar Texto",
        icon: MessagesSquare,
        href: "/dashboard",
        color: "text-sky-500"
    },
]

const Sidebar = () => {
    return (
        <div
            className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white"
        >
            <div
                className="px-3 py-2 flex-1"
            >
                <Link
                className="flex items-center pl-3 mb-14"
                href="/dashboard"
            >
                <div
                    className="relative w-8 h-8 mr-4"
                >
                    <Image
                        fill
                        alt="Logo"
                        src="/logo.png"
                    />
                </div>
                <h1
                    className={cn('text-2xl font-bold', montserrat.className)}
                >MultiSIA</h1>
            </Link>
            <div
                className='space-y-1'
            >
                {route.map((route) => (
                    <Link
                    href={route.href}
                    key={route.href}
                    className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition"
                >
                    <div
                        className="flex items-center flex-1"
                    >
                        <route.icon
                            className={cn("h-5 w-5 mr-3", route.color)}
                        />
                        {route.label}
                    </div>
                </Link>
                ))}
            </div>
            </div>
        </div>
    );
}
 
export default Sidebar;