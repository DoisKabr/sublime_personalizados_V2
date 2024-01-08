/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import itens from "../../../../../public/JSON/arquivoFotos.json"

import style from "../../../style/paginaDinamica.module.css"


export default function maisProdutos() {
    let canecas = itens.filter((el) => {
        if (el.categoria == "promocoes") {
            return el
        }
    })
    const random = Math.floor(Math.random() * canecas.length)
    const random1 = Math.floor(Math.random() * canecas.length)
    const random2 = Math.floor(Math.random() * canecas.length)

    return (
        <>
            {
                canecas.map((el) => {
                    if (el.id == Number.parseInt(random)) {
                        return <Link href={`/produtos/promocoes/${el.categoria + el.id}`} key={"produtos" + el.id}>
                            <div className={style.divContainerMaisProdutos}>
                                <img src={el.url} alt={el.nome} className={style.imageMaisProdutos} />
                                <h4 className={style.texto}>{el.nome}</h4>
                                <div className={style.linkProdutos}>Ver Mais...</div>
                            </div>
                        </Link>
                    }
                })
            }
            {
                canecas.map((el) => {
                    if (el.id == Number.parseInt(random1)) {
                        return <Link href={`/produtos/promocoes/${el.categoria + el.id}`} key={"produtos" + el.id}>
                            <div className={style.divContainerMaisProdutos}>
                                <img src={el.url} alt={el.nome} className={style.imageMaisProdutos} />
                                <h4 className={style.texto}>{el.nome}</h4>
                                <div className={style.linkProdutos}>Ver Mais...</div>
                            </div>
                        </Link>
                    }
                })
            }
            {
                canecas.map((el) => {
                    if (el.id == Number.parseInt(random2)) {
                        return <Link href={`/produtos/promocoes/${el.categoria + el.id}`} key={"produtos" + el.id}>
                            <div className={style.divContainerMaisProdutos}>
                                <img src={el.url} alt={el.nome} className={style.imageMaisProdutos} />
                                <h4 className={style.texto}>{el.nome}</h4>
                                <div className={style.linkProdutos}>Ver Mais...</div>
                            </div>
                        </Link>
                    }
                })
            }
        </>
    )
}