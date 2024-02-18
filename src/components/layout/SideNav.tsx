import React from "react";
import Image from "next/image";
import Link from "next/link";
import Person from "../icons/person";
import ClipboardIcon from "../icons/clipboardIcon";
import Category from "../icons/plura-category";
import Info from "../icons/info";
import Home from "../icons/home";
import Database from "../icons/database";
import { HiChevronUpDown } from "react-icons/hi2";
import { LiaAngleRightSolid } from "react-icons/lia";

type Props = {};

function SideNav({}: Props) {
  return (
    <aside>
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
      <div>
        <ul className="pl-2 pr-0 pt-0 pb-3 [&_div]:flex [&_div]:items-center [&_div]:gap-2 [&_li]:ease-in-out [&_li]:list-none [&_a]:font-medium [&_li]:text-slate-500 hover:[&_li]:text-white  mt-4 [&_p]:hidden md:[&_p]:block [&_a]:flex [&_a]:items-center [&_a]:justify-between [&_a]:text-xs [&_li]:p-2 [&_span]:text-lg hover:[&_li]:bg-blue-700 [&_li]:rounded-l-sm transition-all">
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
            <Link href="">
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
            <Link href="">
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
            <Link href="">
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
            <Link href="">
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
  );
}

export default SideNav;
