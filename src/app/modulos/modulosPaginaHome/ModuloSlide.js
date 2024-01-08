/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, Autoplay, A11y } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/autoplay"

import styleHome from "../../style/homeStyle/home.module.css"
import styleSlide from "../../style/homeStyle/slider.module.css"

export default function ModuloSlider() {
    const urlImg = [
        "https://i.imgur.com/MqWtnmE.jpg",
        "https://i.imgur.com/8l43xj8.jpg",
        "https://i.imgur.com/sMAeVrZ.jpg",
        "https://i.imgur.com/9F3lOyG.jpg"
    ]
    const texto = [
        "Aqui na Sublime personalizados você encontra as melhores canecas pelo melhor preço !",
        "Não perca tempo e compre já !",
        "Canecas de Chopp personalizadas com o seu gosto !",
        "Está treinando ? Compre já a sua Squize !"
    ]

    return (
        <>
            <section className={styleHome.slide + " " + styleSlide.containerSlider}>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay, A11y]}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                >
                    <SwiperSlide className={styleSlide.divSlide}>
                        <img src={urlImg[0]} className={styleSlide.imgSlide + " " + styleSlide.img1} />
                        <p className={styleSlide.textoSlide}>{texto[0]}</p>
                    </SwiperSlide>
                    <SwiperSlide className={styleSlide.divSlide}>
                        <img src={urlImg[1]} className={styleSlide.imgSlide + " " + styleSlide.img2} />
                        <p className={styleSlide.textoSlide}>{texto[1]}</p>
                    </SwiperSlide>
                    <SwiperSlide className={styleSlide.divSlide}>
                        <img src={urlImg[2]} className={styleSlide.imgSlide + " " + styleSlide.img3} />
                        <p className={styleSlide.textoSlide}>{texto[2]}</p>
                    </SwiperSlide>
                    <SwiperSlide className={styleSlide.divSlide}>
                        <img src={urlImg[3]} className={styleSlide.imgSlide + " " + styleSlide.img4} />
                        <p className={styleSlide.textoSlide}>{texto[3]}</p>
                    </SwiperSlide>
                </Swiper>
            </section >
        </>
    )
}