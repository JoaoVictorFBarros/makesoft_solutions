import "./whoweare.css"
import { Link } from "react-router-dom"
import { relativepath } from "../../routes"
import Presentation from "../presentation/presentation"
import Iconspresentation from "../iconspresentation/iconspresentation"
import target from "../../images/target.png"
import graphic from "../../images/graphic.png"
import hand from "../../images/hand.png"

const p1 = "Somos membros da empresa júnior do Campus Divinópolis do Centro Federal de Educação Tecnológica de Minas Gerais, também conhecido como CEFETMG. Acreditamos que a aprendizagem prática é fundamental para o desenvolvimento pessoal e profissional de nossos membros, por isso a nossa empresa é composta exclusivamente por estudantes universitários apaixonados por tecnologia e inovação."
const p2 = "Além de proporcionar oportunidades de aprendizado para nossos membros, também oferecemos serviços de alta qualidade a preços acessíveis para nossos clientes. Ao escolher trabalhar conosco, você estará apoiando o desenvolvimento de jovens empreendedores e terá acesso a ótimas soluções tecnológicas."
const p3 = "Em nosso site, você encontrará informações detalhadas sobre nossos serviços, projetos e equipe. Fique à vontade para explorá-lo e não hesite em entrar em contato conosco caso tenha alguma dúvida ou precise de ajuda. Agradecemos a sua visita e esperamos ter a oportunidade de trabalhar juntos em breve!"

const title1 = "MISSÃO"
const description1 = "Fomentar o avanço da sociedade oferecendo soluções de engenharia excelentes e capacitando nossos membros para se tornarem líderes empreendedores."

const title2 = "VISÃO"
const description2 = "Buscamos o reconhecimento na sociedade pela nossa excelência em soluções de engenharia, enquanto aspiramos ser uma EJ de referência"

const title3 = "VALORES"
const description3 = <ul><li>Comprometimento total </li><li>Espírito de liderança </li><li>Colaboração em equipe </li><li>Diálogo aberto e transparência </li><li>Dedicação ao cliente Respeito incondicional</li></ul>

export default function Whoweare(props){
    return(
        <div className="whoweare">
            <Presentation title={"Quem somos"} paragraphs={[p1,p2,p3]} mobile={props.mobile}/>
            <Iconspresentation title="Por que contratar nossos serviços" blocks={[[target,title1,description1],[graphic,title2,description2],[hand,title3,description3]]} bgcolor="#EBE3D6" color="black" flexdir="column" maxwidth={props.mobile ? "100%" : "60%"}/>
            <Link to={relativepath + "/Contato"} className='subheader' key={'Contato'} onClick={()=>window.scrollTo({ top: 0, behavior: "smooth" })}>Quero ser cliente</Link>
        </div>
    )
}