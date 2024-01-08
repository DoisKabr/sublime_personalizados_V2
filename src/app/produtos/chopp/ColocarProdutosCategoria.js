"use client"

import { createElement } from "react"
import Link from "next/link"

import itens from "../../../../public/JSON/arquivoFotos.json"

import style from "../../style/produtos.module.css"

export default function ColocarProdutosCategoria( props ) {
    return (
        <>
            {
                itens.map((el) => {
                    if (el.categoria == "chopp") {
                        // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
                        const imgImage = createElement("img", {
                            src: el.url,
                            className: style.produtosImage
                        })

                        const stringTema = createElement("span", {
                            style: {
                                color: "red",
                                margin: "0px 5px",
                                fontWeight: "bold"
                            }
                        },
                            "Tema:"
                        )
                        const produtoTitulo = createElement("div", {
                            className: style.produtosTitulo
                        },
                            stringTema,
                            el.nome
                        )

                        const verMais = createElement("div", {
                            className: style.buttonVerMais,
                            onClick: () => { console.log(el) }
                        },
                            "Ver Mais"
                        )

                        return createElement(Link, {
                            className: style.divFora,
                            key: el.id,
                            href: `/produtos/chopp/` + el.categoria + el.id
                        },
                            imgImage,
                            produtoTitulo,
                            verMais)
                    }
                })
            }
        </>
    )
}