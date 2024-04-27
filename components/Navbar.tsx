import Image from "next/image";
import Link from "next/link";
// import DarkMode from "../mode/DarkMode";
// import Logo from "./../../public/images/logo.png";
// import WhiteLogo from "./../../public/images/logo_white.png";
// import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
// import {
//   isChildrenPageActive,
//   isParentPageActive,
// } from "../../utils/daynamicNavigation";
import { useEffect, useState } from "react";
// import WalletButton from "../wallet-btn/WalletButton";
import { v4 as uuidv4 } from 'uuid';

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [isCollapse, setCollapse] = useState(null);
// const router = useRouter();
  // window resize
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) {
        setToggle(false);
      }
    });
  });

//   const route = useRouter();
  /* -------------------------------------------------------------------------- */
  /*                            daynamic navigations                            */
  /* -------------------------------------------------------------------------- */
  const home = {
    id: 1,
    name: "Home",
    pages: [
      {
        id: uuidv4(),
        name: "Home 1",
        path: "/",
      },
     
    ],
  };

 
  const explore = {
    id: 3,
    name: "Explore",
    pages: [
      {
        id: uuidv4(),
        name: "All NFTs",
        path: "/collection/explore_collection",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            className="h-4 w-4 fill-jacarta-700"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M22 12.999V20a1 1 0 0 1-1 1h-8v-8.001h9zm-11 0V21H3a1 1 0 0 1-1-1v-7.001h9zM11 3v7.999H2V4a1 1 0 0 1 1-1h8zm10 0a1 1 0 0 1 1 1v6.999h-9V3h8z" />
          </svg>
        ),
      },
      {
        id: uuidv4(),
        name: "Code Writer",
        path: "/config",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            className="h-4 w-4 fill-[#428AF8]"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M2 6c0-.552.455-1 .992-1h18.016c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.994.994 0 0 1 2 20V6zm2 1v12h16V7H4zm10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 2a5 5 0 1 1 0-10 5 5 0 0 1 0 10zM4 2h6v2H4V2z" />
          </svg>
        ),
      },
      {
        id: uuidv4(),
        name: "Template",
        path: "/codeTemplate",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            className="h-4 w-4 fill-[#10B981]"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 2c5.522 0 10 3.978 10 8.889a5.558 5.558 0 0 1-5.556 5.555h-1.966c-.922 0-1.667.745-1.667 1.667 0 .422.167.811.422 1.1.267.3.434.689.434 1.122C13.667 21.256 12.9 22 12 22 6.478 22 2 17.522 2 12S6.478 2 12 2zm-1.189 16.111a3.664 3.664 0 0 1 3.667-3.667h1.966A3.558 3.558 0 0 0 20 10.89C20 7.139 16.468 4 12 4a8 8 0 0 0-.676 15.972 3.648 3.648 0 0 1-.513-1.86zM7.5 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM12 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
          </svg>
        ),
      },
      {
        id: uuidv4(),
        name: "Chat",
        path: "/chat",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            className="h-4 w-4 fill-[#10B981]"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 2c5.522 0 10 3.978 10 8.889a5.558 5.558 0 0 1-5.556 5.555h-1.966c-.922 0-1.667.745-1.667 1.667 0 .422.167.811.422 1.1.267.3.434.689.434 1.122C13.667 21.256 12.9 22 12 22 6.478 22 2 17.522 2 12S6.478 2 12 2zm-1.189 16.111a3.664 3.664 0 0 1 3.667-3.667h1.966A3.558 3.558 0 0 0 20 10.89C20 7.139 16.468 4 12 4a8 8 0 0 0-.676 15.972 3.648 3.648 0 0 1-.513-1.86zM7.5 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM12 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
          </svg>
        ),
      }
    ],
  };

  const resource = {
    id: 4,
    name: "Resources",
    // pages: [
    //   {
    //     id: uuidv4(),
    //     name: "Help Center",
    //     path: "/help_center",
    //   },
    //   {
    //     id: uuidv4(),
    //     name: "Platform Status",
    //     path: "/platform_status",
    //   },
    //   {
    //     id: uuidv4(),
    //     name: "Partners",
    //     path: "/partners",
    //   },
    //   {
    //     id: uuidv4(),
    //     name: "Blog",
    //     path: "/blog",
    //   },
    //   {
    //     id: uuidv4(),
    //     name: "Single Post",
    //     path: "/single_post/post_1",
    //   },
    //   {
    //     id: uuidv4(),
    //     name: "Newsletter",
    //     path: "/newsletter",
    //   },
    // ],
  };

//   const mobileCollapse = (id) => {
//     if (isCollapse === id) {
//       return setCollapse(null);
//     }
//     setCollapse(id);
//   };

  return (
    <>
      {/* main desktop menu sart*/}
      <header className="js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors"
      style={{
        backdropFilter: 'blur(5px)',
        backgroundColor: 'rgba(246, 246, 252, 0.95)',
        boxShadow: 'rgba(31, 38, 135, 0.3) 0px 6px 32px 0px'
      }}>
        <div className="flex items-center px-6 py-6 xl:px-24 ">
          <Link legacyBehavior className="shrink-0" href="/">
            <a>
              <div className="dark:hidden">
              <svg id="logo-13" width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.98441 29.2899C1.98441 27.0299 2.42954 24.7919 3.29444 22.704C4.15935 20.6159 5.42701 18.7187 7.02513 17.1206C8.62324 15.5225 10.5204 14.2548 12.6084 13.3899C14.6965 12.5251 16.9344 12.0799 19.1945 12.0799V29.2899H1.98441Z" className="ccustom" fill="#442781"></path> <path d="M1.98441 29.2899C1.98441 31.55 2.42954 33.7879 3.29444 35.876C4.15935 37.964 5.42701 39.8612 7.02513 41.4593C8.62324 43.0574 10.5204 44.3251 12.6084 45.19C14.6965 46.0549 16.9344 46.5 19.1945 46.5V29.2899H1.98441Z" className="ccompli1" fill="#61459C"></path> <path d="M36.4043 29.2899C36.4043 31.55 35.9595 33.7879 35.0947 35.876C34.2298 37.964 32.9622 39.8612 31.3638 41.4593C29.7657 43.0574 27.8685 44.3251 25.7804 45.19C23.6925 46.0549 21.4545 46.5 19.1945 46.5V29.2899H36.4043Z" className="ccompli2" fill="#A992DB"></path> <path d="M47.0156 14.422C47.0156 21.5586 41.23 27.344 34.0935 27.344H21.1716V14.422C21.1716 7.2854 26.957 1.5 34.0935 1.5C41.23 1.5 47.0156 7.2854 47.0156 14.422Z" className="ccustom" fill="#FF7917"></path> </svg>
                {/* <Image
                  src={Logo}
                  height={28}
                  width={130}
                  alt="Xhibiter | NFT Marketplace"
                  className="max-h-7 h-auto "
                /> */}
              </div>
              <div className="hidden dark:block">
                {/* <Image
                  src={WhiteLogo}
                  height={28}
                  width={130}
                  alt="Xhibiter | NFT Marketplace"
                /> */}
              </div>
            </a>
          </Link>
          {/* End  logo */}

         

          <div className="js-mobile-menu dark:bg-jacarta-800 invisible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 lg:visible lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent">
            <nav className="navbar w-full">
              <ul  
              className="flex flex-col lg:flex-row">
                {/* home */}
                <li className="js-nav-dropdown group relative">
                  <button className="dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full">
                    <span
                    //   className={
                    //     isParentPageActive(home.pages, route.asPath)
                    //       ? "text-accent  dark:text-accent"
                    //       : ""
                    //   }
                    >
                      Home
                    </span>
                    <i className="lg:hidden">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="h-4 w-4 dark:fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                      </svg>
                    </i>
                  </button>
                  <ul
                  style={{background:"rgba(246, 246, 252, 0.95)",
                  borderColor:'transparent',
                  borderRadius:'30px',
                  boxShadow: 'rgba(31, 38, 135, 0.3) 0px 6px 32px 0px'
                 }}
                   className="dropdown-menu group-hover:visible lg:invisible -left-6 top-[85%] z-10 hidden grid-flow-row grid-cols-[repeat(2,_1fr)] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:opacity-100 dark:bg-jacarta-800 lg:absolute lg:!grid lg:translate-y-4 lg:py-8 lg:px-5 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2">
                    {home?.pages?.map((page) => (
                      <li key={page.id}>
                        <Link href={page.path}>
                          <p className="dark:hover:bg-jacarta-600  hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors justify-between ">
                            <span
                              // className={`font-display ${
                              //   isChildrenPageActive(page.path, route.asPath)
                              //     ? "text-accent dark:text-accent"
                              //     : "text-jacarta-700"
                              // } text-sm dark:text-white`}
                            >
                              {page.name}
                            </span>
                            {/* {page.condition ? (
                              <span className="rounded bg-green py-1 px-2 text-tiny font-bold uppercase leading-none text-white ml-4">
                                new
                              </span>
                            ) : undefined} */}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

           

                {/* explore */}
                <li className="js-nav-dropdown nav-item dropdown group relative">
                  <button className="dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full">
                    <span
                    //   className={
                    //     isParentPageActive(explore.pages, route.asPath)
                    //       ? "text-accent dark:text-accent"
                    //       : ""
                    //   }
                    >
                      Explore
                    </span>
                    <i className="lg:hidden">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="h-4 w-4 dark:fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                      </svg>
                    </i>
                  </button>
                  <ul style={{background:"rgba(246, 246, 252, 0.95)",
                  borderColor:'transparent',
                  borderRadius:'30px',
                  boxShadow: 'rgba(31, 38, 135, 0.3) 0px 6px 32px 0px'
                 }}
                    className="dropdown-menu  -left-6 top-[85%] z-10 hidden grid-flow-col grid-rows-5 gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:!grid lg:translate-y-4 lg:py-8 lg:px-5 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative"
                    aria-labelledby="navDropdown-1"
                  >
                   {explore?.pages?.map((page) => (
  <li key={page.id}>
    <Link legacyBehavior href={page.path}>
      <a className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors">
        <span className="bg-light-base mr-3 rounded-xl p-[0.375rem]">
          {page?.icon}
        </span>
        <span className="font-display text-jacarta-700 text-sm dark:text-white">
          {page?.name}
        </span>
      </a>
    </Link>
  </li>
))}

                  </ul>
                </li>

                {/* resource */}
                <li className="js-nav-dropdown group relative">
                  <button className="dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full">
                    <span
                    //   className={
                    //     isParentPageActive(resource.pages, route.asPath)
                    //       ? "text-accent dark:text-accent"
                    //       : ""
                    //   }
                    >
                      Premium Resources
                    </span>
                    <i className="lg:hidden">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="h-4 w-4 dark:fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                      </svg>
                    </i>
                  </button>
                  <ul
                  style={{background:"rgba(246, 246, 252, 0.95)",
                  borderColor:'transparent',
                  borderRadius:'30px',
                  boxShadow: 'rgba(31, 38, 135, 0.3) 0px 6px 32px 0px'
                 }}
                    className="dropdown-menu dark:bg-jacarta-800 left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative"
                    aria-labelledby="navDropdown-4"
                  >
                    {/* {resource?.pages?.map?.((page) => (
                      <li key={page.id}>
                        <Link href={page?.path}>
                          <a className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors">
                            <span
                              className={`font-display ${
                                isChildrenPageActive(page.path, route.asPath)
                                  ? "text-accent dark:text-accent"
                                  : "text-jacarta-700"
                              } text-sm dark:text-white`}
                            >
                              {page?.name}
                            </span>
                          </a>
                        </Link>
                      </li>
                    ))} */}
                  </ul>
                </li>

                {/* create */}
                <li className="group">
                  <Link legacyBehavior href="/create">
                    <a>
                      <button className="text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5">
                        <span
                        //   className={
                        //     isChildrenPageActive(route.asPath, "/create")
                        //       ? "text-accent dark:text-accent"
                        //       : ""
                        //   }
                        >
                          Create
                        </span>
                      </button>
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
            {/* End menu for desktop */}

            <div className="ml-8 hidden items-center lg:flex xl:ml-12">
              {/* <WalletButton /> */}
              {/* End metamask Wallet */}

              <div className="js-nav-dropdown group-dropdown relative">
                <button className="dropdown-toggle border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    className="fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />
                  </svg>
                </button>
                <div className="dropdown-menu dark:bg-jacarta-800 group-dropdown-hover:opacity-100 group-dropdown-hover:visible !-right-4 !top-[85%] !left-auto z-10 min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:shadow-2xl hidden lg:invisible lg:opacity-0">
                  <div>
                    <button className="js-copy-clipboard font-display text-jacarta-700 my-4 flex select-none items-center whitespace-nowrap px-5 leading-none dark:text-white">
                      <span>0x7a86c0b06417100...</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="dark:fill-jacarta-300 fill-jacarta-500 ml-auto mb-px h-4 w-4"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 0 1 2 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3zM4.003 9L4 20h11V9H4.003z" />
                      </svg>
                    </button>
                  </div>
                  <div className="dark:border-jacarta-600 border-jacarta-100 mx-5 mb-6 rounded-lg border p-4">
                    <span className="dark:text-jacarta-200 text-sm font-medium tracking-tight">
                      Balance
                    </span>
                    <div className="flex items-center">
                      {/* <svg className="icon icon-ETH -ml-1 mr-1 h-[1.125rem] w-[1.125rem]">
                        <use xlinkHref="/icons.svg#icon-ETH" />
                      </svg> */}
                      <span className="text-green text-lg font-bold">
                        10 ETH
                      </span>
                    </div>
                  </div>
                  <Link legacyBehavior href="/user/avatar_6">
                    <a className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />
                      </svg>
                      <span className="font-display text-jacarta-700 mt-1 text-sm dark:text-white">
                        My Profile
                      </span>
                    </a>
                  </Link>
                  <Link  legacyBehavior href="/profile/user_avatar">
                    <a className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M9.954 2.21a9.99 9.99 0 0 1 4.091-.002A3.993 3.993 0 0 0 16 5.07a3.993 3.993 0 0 0 3.457.261A9.99 9.99 0 0 1 21.5 8.876 3.993 3.993 0 0 0 20 12c0 1.264.586 2.391 1.502 3.124a10.043 10.043 0 0 1-2.046 3.543 3.993 3.993 0 0 0-3.456.261 3.993 3.993 0 0 0-1.954 2.86 9.99 9.99 0 0 1-4.091.004A3.993 3.993 0 0 0 8 18.927a3.993 3.993 0 0 0-3.457-.26A9.99 9.99 0 0 1 2.5 15.121 3.993 3.993 0 0 0 4 11.999a3.993 3.993 0 0 0-1.502-3.124 10.043 10.043 0 0 1 2.046-3.543A3.993 3.993 0 0 0 8 5.071a3.993 3.993 0 0 0 1.954-2.86zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>
                      <span className="font-display text-jacarta-700 mt-1 text-sm dark:text-white">
                        Edit Profile
                      </span>
                    </a>
                  </Link>
                  <Link legacyBehavior href="/login">
                    <a className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 11V8l-5 4 5 4v-3h8v-2H7z" />
                      </svg>
                      <span className="font-display text-jacarta-700 mt-1 text-sm dark:text-white">
                        Sign out
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
              {/* <DarkMode /> */}
            </div>
            {/* End header right content (metamask and other) for desktop */}
          </div>
          <form
            action="search"
            className="relative ml-12 mr-8 hidden basis-3/12 lg:block xl:ml-[8%]"
          >
            <input
              type="search"
              className="text-jacarta-700 placeholder-jacarta-500 focus:ring-accent border-jacarta-100 w-full rounded-2xl border py-[0.6875rem] px-4 pl-10 dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
              placeholder="Search"
            />
            <span className="absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                className="fill-jacarta-500 h-4 w-4 dark:fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
              </svg>
            </span>
          </form>
          {/* End Desktop search form */}
          {/* header menu conent end for desktop */}

          <div className="ml-auto flex lg:hidden">
            <Link legacyBehavior href="/profile/user_avatar">
              <a
                className="border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
                aria-label="profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  className="fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />
                </svg>
              </a>
            </Link>
            {/* <DarkMode /> */}
            <button
              className="js-mobile-toggle border-jacarta-100 hover:bg-accent dark:hover:bg-accent focus:bg-accent group ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
              aria-label="open mobile menu"
              onClick={() => setToggle(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                className="fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z" />
              </svg>
            </button>
          </div>
          {/* End header right content  for mobile */}
        </div>
        {/* End flex item */}
      </header>
      {/* main desktop menu end */}

      {/* start mobile menu and it's other materials  */}
      <div
        className={`lg:hidden js-mobile-menu dark:bg-jacarta-800 invisible fixed inset-0 z-20 ml-auto items-center bg-white opacity-0 lg:visible lg:relative lg:inset-auto lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent ${
          toggle ? "nav-menu--is-open" : "hidden"
        }`}
      >
        <div className="t-0 dark:bg-jacarta-800 fixed left-0 z-10 flex w-full items-center justify-between bg-white p-6 lg:hidden">
          <div className="dark:hidden">
            {/* <Image
              src={Logo}
              height={28}
              width={130}
              alt="Xhibiter | NFT Marketplace"
              className="max-h-7 h-auto "
            /> */}
          </div>

          <div className="hidden dark:block">
            {/* <Image
              src={WhiteLogo}
              height={28}
              width={130}
              alt="Xhibiter | NFT Marketplace"
            /> */}
          </div>

          <button
            className="js-mobile-close border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
            onClick={() => setToggle(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              className="fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
            </svg>
          </button>
        </div>
        {/* mobile menu top header content */}

        <form action="search" className="relative mt-24 mb-8 w-full lg:hidden">
          <input
            type="search"
            className="text-jacarta-700 placeholder-jacarta-500 focus:ring-accent border-jacarta-100 w-full rounded-2xl border py-3 px-4 pl-10 dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
            placeholder="Search"
          />
          <span className="absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              className="fill-jacarta-500 h-4 w-4 dark:fill-white"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
            </svg>
          </span>
        </form>

        <nav className="navbar w-full">
          <ul className="flex flex-col lg:flex-row">
   
    
          
          </ul>
        </nav>
    
      </div>
    </>
  );
}
