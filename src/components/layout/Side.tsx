"use client"
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Person from "../icons/person";
import ClipboardIcon from "../icons/clipboardIcon";
import Category from "../icons/plura-category";
import Info from "../icons/info";
import Home from "../icons/home";
import Database from "../icons/database";
import { HiChevronUpDown } from "react-icons/hi2";
import { LiaAngleRightSolid } from "react-icons/lia";

type Props = {};

function Side({}: Props) {
  const [active, setActive] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  console.log(active);

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      if (navRef.current && !navRef?.current?.contains(e.target as Node)) {
        setActive(true);
      }
    };
    document.addEventListener("mousedown", handleMouseDown);
    return document.removeEventListener("mousedown", handleMouseDown);
  }, []);
  return (
    <div className="w-[200px]">
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        onClick={() => setActive(!active)}
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm rounded-lg sm:hidden hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-zinc-700"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-[200px] h-screen transition-transform ${active == true ? "-translate-x-full" : "sm:translate-x-0"}`}
        aria-label="Sidebar"
        ref={navRef}
      >
        <div className="h-full pl-3 py-4 overflow-y-auto bg-card border-r-[1px]">
          <div className="py-2 pt-9 flex items-center justify-between px-5">
            <Link href="/dashboard/landing">
              <Image
                src="/assets/logo.png"
                alt="logo"
                width={400}
                height={700}
                className="w-[115px] h-[60px] object-contain"
              />
            </Link>
            <span className="hidden md:block">
              <HiChevronUpDown />
            </span>
          </div>
          <p className="uppercase text-slate-500 text-[10px] py-2 pr-6 hidden md:block">
            Menu Links
          </p>
          <hr />
          <ul className="pl-2 pr-0 pt-0 pb-3 [&_div]:flex [&_div]:items-center [&_div]:gap-2 [&_li]:ease-in-out [&_li]:list-none [&_a]:font-medium [&_li]:text-primary/50 hover:[&_li]:text-white  mt-4 [&_a]:flex [&_a]:items-center [&_a]:justify-between [&_a]:text-xs [&_li]:p-2 [&_span]:text-lg hover:[&_li]:bg-blue-700 [&_li]:rounded-l-full transition-all">
            <li className="group">
              <Link href="/dashboard/landing/post">
                <div>
                  <span>
                    <Person />
                  </span>
                  <p>Post</p>
                </div>
                <i className="group-hover:translate-x-[5px] transition ease-in-out duration-300">
                  <LiaAngleRightSolid />
                </i>
              </Link>
            </li>
            <li className="group">
              <Link href="/dashboard/landing/hero">
                <div>
                  <span>
                    <Home />
                  </span>
                  <p>Hero</p>
                </div>
                <i className="group-hover:translate-x-[5px] transition ease-in-out duration-300">
                  <LiaAngleRightSolid />
                </i>
              </Link>
            </li>
            <li className="group">
              <Link href="/dashboard/landing/category">
                <div>
                  <span>
                    <Category />
                  </span>
                  <p>Category</p>
                </div>
                <i className="group-hover:translate-x-[5px] transition ease-in-out duration-300">
                  <LiaAngleRightSolid />
                </i>
              </Link>
            </li>
            <li className="group">
              <Link href="/dashboard/landing/aboutUs">
                <div>
                  <span>
                    <ClipboardIcon />
                  </span>
                  <p>About Us</p>
                </div>
                <i className="group-hover:translate-x-[5px] transition ease-in-out duration-300">
                  <LiaAngleRightSolid />
                </i>
              </Link>
            </li>
            <li className="group">
              <Link href="/dashboard/landing/courses">
                <div>
                  <span>
                    <Database />
                  </span>
                  <p>Courses</p>
                </div>
                <i className="group-hover:translate-x-[5px] transition ease-in-out duration-300">
                  <LiaAngleRightSolid />
                </i>
              </Link>
            </li>
            <li className="group">
              <Link href="/dashboard/landing/video">
                <div>
                  <span>
                    <Info />
                  </span>
                  <p>Video</p>
                </div>
                <i className="group-hover:translate-x-[5px] transition ease-in-out duration-300">
                  <LiaAngleRightSolid />
                </i>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Side;
