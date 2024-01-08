import Link from "next/link"

import style from "../style/NavBar.module.css"

import Home from "../page.js"

export default function NavBar() {

    return (
        <>
            <ul className={style.ulClass}>
                <li className={style.liClass}><Link href="/">Inicio</Link></li>
                <li className={style.liClass}><Link href="/produtos">Produtos</Link></li>
            </ul>
        </>
    )
}