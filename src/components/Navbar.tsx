import type React from "react"
import { useState } from "react"

interface MenuItem {
    title: string
    items: { title: string; href: string }[]
  }  

const menuItems: MenuItem[] = [
  {
    title: "Registration",
    items: [
      { title: "Create Profile", href: "#create-profile" },
      { title: "View Profile", href: "#view-profile" },
    ],
  },
  {
    title: "Angel's Profile",
    items: [
      { title: "Access Profile", href: "#create-profile" },
    ],
  },
]

export const Navbar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  const toggleMenu = (title: string) => {
    setOpenMenu(openMenu === title ? null : title)
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-5 ">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img src="/Meow.jpg" alt="Daycare Logo" className="left-7 h-25 w-25 mr-2" />
            <span className="text-3xl font-bold text-blue-100">Guardian Angel</span>
          </div>
          <div className="hidden md:flex space-x-4">
            {menuItems.map((item) => (
              <div key={item.title} className="relative group">
                <button
                  className="text-lg text-gray-600 hover:text-gray-800 font-medium px-2"
                  onClick={() => toggleMenu(item.title)}
                >
                  {item.title}
                </button>
                {openMenu === item.title && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                    <div className="py-1">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem.title}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {subItem.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="md:hidden">
            {/* Mobile menu button */}
            <button className="text-gray-600 hover:text-gray-800">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

