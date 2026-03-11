import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";

// Create a functional React component called Navbar
export const Navbar = () => {
  // React state that tracks if the mobile drawer menu is open
  // mobileDrawerOpen = current value
  // setMobileDrawerOpen = function to update it
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  // Function that toggles the mobile menu open/closed
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    // Navigation container
    // sticky = navbar stays at top when scrolling
    // top-0 = position at very top
    // z-50 = keeps it above other elements
    // backdrop-blur-lg = background blur effect
    // border-b = bottom border
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      {/* Main content container */}
      <div className="container px-4 mx-auto relative text-sm">
        {/* Flex container for navbar layout */}
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <div className="flex items-center flex-shrink-0">
            {/* Logo image */}
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />

            {/* Brand name */}
            <span className="text-xl tracking-tight">CodeCraft</span>
          </div>

          {/* Desktop Navigation Links */}
          {/* hidden = hidden by default */}
          {/* lg:flex = becomes visible as flex on large screens */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {/* Loop through navItems array and render links */}
            {navItems.map((item, index) => (
              // key helps React track list elements efficiently
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          {/* Desktop Sign In / Create Account buttons */}
          {/* Hidden on small screens, visible on large screens */}
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            {/* Sign in button */}
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>

            {/* Gradient button */}
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              Create an Account
            </a>
          </div>

          {/* Mobile Menu Button */}
          {/* Only visible on smaller screens */}
          <div className="lg:hidden md:flex flex-col justify-end">
            {/* When clicked it toggles the mobile menu */}
            <button onClick={toggleNavbar}>
              {/* If menu is open show X icon, otherwise show hamburger menu */}
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {/* Only renders if mobileDrawerOpen = true */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            {/* Mobile Navigation Links */}
            <ul>
              {/* Loop through navItems again for mobile menu */}
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>

            {/* Mobile buttons */}
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>

              <a
                href="#"
                className="py-2 px-3 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md"
              >
                {/* &nbsp prevents the words from splitting */}
                Create an&nbsp;Account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
