import Iconspresentation from "../iconspresentation/iconspresentation"
import letter from "../../images/letter.png"
import graphic from "../../images/graphic_white.png"
import gears from "../../images/gears.png"
import hands from "../../images/hands.png"

const title1 = "Contato"
const description1 = "Preencha o formulário acima para solicitar o atendimento."

const title2 = "Avaliação"
const description2 = "Analisamos suas necessidades e determinamos a solução mais apropriada."

const title3 = "Construção"
const description3 = "Trabalhamos no desenvolvimento do projeto."

const title4 = "Entrega"
const description4 = "Entregamos o projeto com os itens definidos no contrato."

export default function Contactform(props){

    let form

    if (props.mobile){
        form = <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf8n2XHqAWfL9sbM0ekdHjqpJpB95ff99kNXSZyrb55KHqp2w/viewform?embedded=true"  width="400em" height="1000em" frameborder="0" marginheight="0" marginwidth="0" title="Mobileform">Carregando…</iframe>
    }
    else{
        form = <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf8n2XHqAWfL9sbM0ekdHjqpJpB95ff99kNXSZyrb55KHqp2w/viewform?embedded=true"  width="800em" height="800em" frameborder="0" marginheight="0" marginwidth="0" title="form">Carregando…</iframe>
    }
    
    return(
        <div className="contactform">
            {form}
            <Iconspresentation title="Etapas do processo de consultoria" blocks={[[letter,title1,description1],[graphic,title2,description2],[gears,title3,description3],[hands,title4,description4]]} bgcolor="#16472A" color="white" flexdir="column" maxwidth={props.mobile ? "100%" : "60%"}/>
        </div>
    )
}