import style from "../style/header.module.css"

import NavBar from "./navBar.js"

export default function Header() {
    return (
        <header className={style.headerStyle}>
            <h1 className={style.titulo}>Sublime Personalizados</h1>
            <NavBar />
        </header>
    )
}