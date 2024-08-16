"use client";
import { useState } from "react";
import React from 'react'
import Link from "next/link";
import styles from "./links.module.css"
import NavLink from './navbarlink/navlink';
import Image from "next/image";



const links = [

    {
        title: "HomePage",
        path: "/",

    },
    {
        title: "About",
        path: "/about",

    },
    {
        title: "Contact",
        path: "/contact",
    },

    {
        title: "Blog",
        path: "/blog",
    },
    {
        title: "Projects",
        path: "/Projects",
    },
    {
        title: "OurOffers",
        path: "/Offer",
    },

];


const Links = ({ session }) => {
    const [open, setOpen] = useState(false);

    // TEMPORARY
    // const session = true;
    // // const isAdmin = false;

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link) => (
                    <NavLink item={link} key={link.title} />
                ))}
                {session?.user ? (
                    <>
                        {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
                        {/* <form action={handleLogout}> */}
                        <button className={styles.logout}>Logout</button>
                        {/* </form> */}
                    </>
                ) : (
                    <NavLink item={{ title: "Login", path: "/login" }} />
                )}
            </div>
            <button  onClick={() => setOpen((prev) => !prev)}>Menu</button>
            {open && (
                <div className={styles.mobileLinks}>
                    {links.map((link) => (
                        <NavLink item={link} key={link.title} />
                    ))}
                </div>
            )}
        </div>
    );
};
export default Links;