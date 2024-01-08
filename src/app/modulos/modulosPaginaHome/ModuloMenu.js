import { createElement } from "react"
import Link from "next/link"
import itens from "../../../../public/JSON/arquivoFotos.json"

import styleHome from "../../style/homeStyle/home.module.css"
import styleMenu from "../../style/homeStyle/menu.module.css"

export default function ModuloMenu() {
    return (
        <>
            <section className={styleMenu.sectionMenu + " " + styleHome.menu1}>
                <h3 className={styleHome.textoPadrao}>Promoções</h3>
                {
                    itens.map((el) => {
                        if (el.categoria == "promocoes") {

                            const texto = createElement("h4", {
                                className: styleMenu.textoPromocoes
                            },
                                el.nome
                            )
                            const linkPromocoes = createElement(Link, {
                                className: styleMenu.linkPromocoes,
                                href: `/produtos/${el.categoria.toLowerCase()}/${el.categoria + el.id}`
                            },
                                "Ver Promoção ..."
                            )

                            const textoDivPromocoes = createElement("div", {
                                className: styleMenu.textoDivPromocoes
                            },
                                texto,
                                linkPromocoes
                            )

                            const imgPromocoes = createElement("img", {
                                className: styleMenu.imgPromocoes,
                                src: el.url
                            })

                            return createElement("div", {
                                className: styleMenu.divPromocoes
                            },
                                imgPromocoes,
                                textoDivPromocoes
                            )
                        }
                    })
                }
            </section>
        </>
    )
}