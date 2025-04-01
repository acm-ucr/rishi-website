"use client";
import { usePathname } from "next/navigation";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import { items } from "@/data/navigation";
import Image from "next/image";
import logo from "@/public/prishi-text-logo.webp";
import { FaBars } from "react-icons/fa";

const Navigation = () => {
  const pathname = usePathname();
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      fixed="top"
      className="bg-rishi-white px-4 flex justify-between z-10 items-center shadow-lg"
      aria-controls="responsive-navbar-nav"
    >
      <Navbar.Brand>
        <Link eventkey="1" className="p-0 flex items-center gap-2" href="/">
          <Image
            className="flex justify-between w-auto object-left h-[57px]"
            src={logo}
            alt="Rishi Logo"
          />
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle
        className="list-unstyled !text-transparent border-0"
        aria-controls="responsive-navbar-nav"
      >
        <FaBars className="text-rishi-green text-xl" />
      </Navbar.Toggle>

      <Navbar.Collapse className="items-center md:justify-end justify-center">
        <Nav className="w-12/12 flex items-center gap-x-10">
          {items.map(({ name, link }, index) => (
            <Nav.Link as={Link} key={index} href={link}>
              <div className="flex-col items-center font-urbanist font-light text-rishi-green hover:text-rishi-orange text-2xl">
                <div>{name}</div>

                <div className="flex justify-center">
                  <div
                    className={
                      pathname == link
                        ? "bg-rishi-orange p-1 rounded-full"
                        : "p-1"
                    }
                  ></div>
                </div>
              </div>
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
