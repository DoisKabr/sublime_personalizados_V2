/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styleFooter from "../style/footer.module.css"

export default function footer() {
    return (
        <footer className={styleFooter.sectionFooter}>
            <h4 className={styleFooter.textoSobre}>Nós da sublime Personalizados trabalhamos para que todos os nossos clientes fiquem satisfeitos e tenham a melhor experiência Possível !</h4>
            <img src="/imagens/icone/sublime.jpg" className={styleFooter.imgSublime} />
        </footer>
    )
}