import urlSite1 from "../../../../funcoes/urlSite"

import style from "../../style/produtos.module.css"

import ColocarProdutosCategoria from "./ColocarProdutosCategoria"

export const metadata = {
  title: "Sublime - Canecas",
  description: "Encontre os melhores produtos personalizados para você ou para a sua marca !",
  alternates: {
    canonical: `${urlSite1}produtos/canecas`
  },
  keywords: "produtos, sublime, personalizados, brasil, canecas, squize, caneca, chopp"
}

export default function Categorias() {

  return (
    <main>
      <h1 className="tituloInicial"> Canecas </h1>
      <section className={style.secImg1}>
        {
          <ColocarProdutosCategoria />
        }
      </section>
    </main>
  )
}
