"use client";
import React from 'react'
import styles from "./nav.module.css"
import { usePathname } from 'next/navigation'
import Link from 'next/link';
const NavLink = ({item}) => {

  const pathname =usePathname();

  return (
    <Link href={item.path} className={`${styles.container} ${ pathname=== item.path && styles.active}`} >
      {item.title}
    </Link>

  )
}

export default NavLink