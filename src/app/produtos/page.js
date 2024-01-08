import urlSite1 from "../../../funcoes/urlSite"

import style from "../style/produtos.module.css"

import ColocarProdutos from "./ColocarProdutos.js"

export const metadata = {
  title: "Sublime - Produtos",
  description: "Encontre os melhores produtos personalizados para você ou para a sua marca !",
  alternates: {
    canonical: `${urlSite1}produtos`
  },
  keywords: "produtos, sublime, personalizados, brasil, canecas, squize, caneca, chopp"
}

export default function Produtos() {
  return (
      <main>
        <h1 className="tituloInicial"> Produtos </h1>
        <section className={style.secImg1}>
          <ColocarProdutos />
        </section>
      </main>
  )
}
