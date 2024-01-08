import styleHome from "../../style/homeStyle/home.module.css"
import styleMaisProdutos from "../../style/homeStyle/maisProdutos.module.css"

import itens from "../../../../public/JSON/arquivoFotos.json"
import { createElement } from "react"

import Link from "next/link"

export default function ModuloMaisProdutos() {
    return (
        <>
            <section className={styleHome.moduloMaisProdutos + " " + styleMaisProdutos.secMaisProdutos}>
                <h3 className={styleHome.textoPadrao}>Mais Produtos</h3>
                {
                    itens.map((el) => {
                        if (el.id > 4 && el.id < 10 && el.categoria != "promocoes") {
                            const imagemItem = createElement("img", {
                                className: styleMaisProdutos.imagemItem,
                                src: el.url
                            })
                            const textoItem = createElement("h5", {
                                className: styleMaisProdutos.textoItem
                            },
                                el.nome
                            )
                            const linkMaisProdutos = createElement("div", {
                                className: styleMaisProdutos.linkMaisProdutos
                            },
                                "Ver Mais..."
                            )
                            const divItem = createElement(Link, {
                                className: styleMaisProdutos.divItem,
                                key: el.categoria + el.id,
                                href: `/produtos/${el.categoria.toLowerCase()}/${el.categoria + el.id}`
                            },
                                imagemItem,
                                textoItem,
                                linkMaisProdutos
                            )

                            return divItem
                        }
                    })
                }
                <Link href={"/produtos"} className={styleMaisProdutos.textoVerTodosOsProdutos}>Ver Todos os Produtos</Link>
            </section>
        </>
    )
}