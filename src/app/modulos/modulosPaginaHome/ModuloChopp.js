/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client"

import styleHome from "../../style/homeStyle/home.module.css"
import styleChopp from "../../style/homeStyle/chopp.module.css"

import { useState, useEffect, useRef } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper/modules"

import itens from "../../../../public/JSON/arquivoFotos.json"
import Link from "next/link"

export default function ModuloChopp(props) {

    const secChopp = useRef(null)

    let [largura, setLargura] = useState()

    useEffect(() => {
        setLargura(secChopp.current.offsetWidth)
    }, [])
    return (
        <>
            <section className={styleHome.chopp} ref={secChopp}>
                <h3 className={styleHome.textoPadrao}>Canecas de Chopp</h3>
                <Swiper
                    modules={[Pagination, Navigation]}
                    slidesPerView={
                            largura <= 500 ? 2 :
                            largura <= 1200 ? 3 : 4
                    }
                    navigation
                >
                    {
                        itens.map(el => {
                            if (el.id <= 10) {
                                if (el.categoria == "chopp") {
                                    return <SwiperSlide key={el.id}>
                                        <Link href={"/produtos/chopp/" + el.categoria + el.id} className={styleChopp.divChopp}>
                                            <img src={el.url} className={styleChopp.imgChopp} />
                                            <h5 className={styleChopp.textoChopp}>{el.nome}</h5>
                                            <div className={styleChopp.linkChopp}>Ver Mais...</div>
                                        </Link>
                                    </SwiperSlide>
                                }
                            }
                        })
                    }
                    <SwiperSlide>
                        <Link href={"/produtos/chopp/"} className={styleChopp.divChopp} style={{display: "flex",justifyContent: "center",backgroundColor: "var(--cor-secundaria)"}}>
                            <div className={styleChopp.linkChopp}>Ver Mais...</div>
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    )
}