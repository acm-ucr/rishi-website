"use client";
import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import { items } from "@/data/navigation";
import Image from "next/image";
import logo from "@/public/prishi-text-logo.webp";

const Navigation = () => {
  const [selected, setSelected] = useState("");
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      fixed="top"
      className="bg-rishi-white p-4"
    >
      <Navbar.Brand>
        <Link
          onClick={() => setSelected("")}
          eventkey="1"
          className="p-0 flex"
          href="/"
        >
          <Image
            src={logo}
            className=" flex justify-between object-scale-down object-left h-[57px]"
          ></Image>

          <Navbar.Toggle
            className="list-unstyled !text-transparent border-0"
            aria-controls="basic-navbar-nav"
          ></Navbar.Toggle>

          <Navbar.Collapse>
            <Nav className="flex items-center">
              {items.map((item, index) => (
                <Nav.Link
                  as={Link}
                  key={index}
                  href={item.link}
                  onClick={() => setSelected(item.name)}
                >
                  <div className="flex justify-between">
                    <div className=" font-urbanist font-light text-rishi-green hover:text-rishi-orange p-4 text-2xl">
                      {item.name}
                    </div>

                    <div className="flex justify-between items-end">
                      <div
                        className={
                          selected === item.name
                            ? " bg-rishi-orange p-1 rounded-full"
                            : "p-1"
                        }
                      ></div>
                    </div>
                  </div>
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Link>
      </Navbar.Brand>
    </Navbar>
  );
};

export default Navigation;
