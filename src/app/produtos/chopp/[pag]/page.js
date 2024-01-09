/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import style from "../../../style/paginaDinamica.module.css"

import itens from "../../../../../public/JSON/arquivoFotos.json"

import MaisProdutos from "./maisProdutos"

import urlSite1 from "../../../../../funcoes/urlSite"

import Link from "next/link"

let produto = {}

export async function generateMetadata({ params }) {

    let tituloCategoria
    let tituloNome
    let tituloId

    itens.map((el) => {
        if (el.categoria + el.id == params.pag) {
            tituloCategoria = el.categoria
            tituloNome = el.nome
            tituloId = el.id
        }
    })

    return {
        title: tituloCategoria + " | " + tituloNome,
        description: `Aqui na Sublime personalizados você encontra o melhor em ${tituloCategoria} personalizados(as) do jeitinho que você gosta !`,
        alternates: {
            canonical: `${urlSite1}produtos/${tituloCategoria}/${tituloCategoria + tituloId}`
        },
        keywords: `${tituloNome}, ${tituloCategoria}, ${tituloId}, sublime, personalizados, brasil`
    }
}

export default function Page({ params }) {
    itens.map((el) => {
        if (params.pag == el.categoria + el.id) {
            produto.id = el.id
            produto.nome = el.nome
            produto.categoria = el.categoria
            produto.url = el.url
            produto.preco = el.preco
        }
    })

    return (
        <>
            <section className={style.sectionProduto}>
                <img src={produto.url} alt={produto.nome} className={style.fotoProduto} />
                <div className={style.divConteudo}>
                    <h5>Categoria: <p className={style.letraInicialDestaque}>{produto.categoria}</p></h5>
                    <h2 className={style.tituloDescTexto}>Titulo: {produto.nome}</h2>
                    <h3 className={style.textoPrecoProduto}>Por apenas: <span>R$ {produto.preco}</span></h3>
                    <Link href={`https://wa.me/5511942164529?text=Olá,%20Gostaria%20de%20saber%20o%20preço%20das%20${produto.categoria}%20!`} className={style.botaoEntrarEmContato}>Entrar em Contato !</Link>
                </div>
            </section>
            <section className={style.sectionMaisInformacoes}>
                <div>
                    <h4>Na Sublime Personalizados todos os itens são testados e feitos com materiais da melhor qualidade !</h4>
                    <h5>Prezamos pela qualidade e satisfação de nossos clientes para proporcionar a melhor experiencia possível .</h5>

                    <h5>Forma de adquirir nossos produtos :</h5>

                    <p>1 - Faça contato com um de nossos atendentes.</p>
                    <p>2 - Combine uma arte para a personalização.</p>
                    <p>3 - Combine a forma de entrega ( Se a localização for em São paulo e região combinaremos a entrega por WhatsApp para que você possa recebe-lo o mais rápido possível ).</p>
                    <p>4 - Combine a forma de pagamento.</p>

                    <h6>Obs - Na tentativa de compra de um produto personalizado será pedido um sinal de 50% do valor do produto pois em caso de desistência por parte do cliente a Sublime personalizados não poderá sair lesada.</h6>
                </div>
            </section>
            <section className={style.secaoMaisProdutos}>
                <h3 className={style.produtosRelacionados}>Produtos relacionados !</h3>
                <section className={style.secaoMaisProdutosLinks}>
                    <MaisProdutos />
                </section>
            </section>
        </>
    )
}