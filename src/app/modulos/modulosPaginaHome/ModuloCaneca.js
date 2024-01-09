/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client"

import styleHome from "../../style/homeStyle/home.module.css"
import styleCaneca from "../../style/homeStyle/caneca.module.css"

import React, { useState, useEffect, useRef } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper/modules"

import itens from "../../../../public/JSON/arquivoFotos.json"
import Link from "next/link"

export default function ModuloCaneca() {

    const secCaneca = useRef(null)

    let [largura, setLargura] = useState()

    useEffect(() => {
        setLargura(secCaneca.current.offsetWidth)
    }, [])
    return (
        <>
            <section className={styleHome.caneca} ref={secCaneca}>
                <h3 className={styleHome.textoPadrao}>Canecas</h3>
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
                                if (el.categoria == "canecas") {
                                    return <SwiperSlide key={el.id}>
                                        <Link href={"/produtos/canecas/" + el.categoria + el.id} className={styleCaneca.divCaneca}>
                                            <img src={el.url} className={styleCaneca.imgCaneca} />
                                            <h5 className={styleCaneca.textoCaneca}>{el.nome}</h5>
                                            <h3 className={styleCaneca.precoCaneca}>Por apenas: <span>R$ {el.preco}</span></h3>
                                            <div className={styleCaneca.linkCaneca}>Ver Mais...</div>
                                        </Link>
                                    </SwiperSlide>
                                }
                            }
                        })
                    }
                    <SwiperSlide>
                        <Link href={"/produtos/canecas/"} className={styleCaneca.divCaneca} style={{display: "flex",justifyContent: "center",backgroundColor: "var(--cor-secundaria)"}}>
                            <div className={styleCaneca.linkCaneca}>Ver Mais...</div>
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    )
}