import "./home.css"
import { Link } from 'react-router-dom'
import { relativepath } from '../../routes'
import Picturesrow from "../picturesrow/picturesrow"
import printer3d from "../../images/3d-printer.png"
import lasercut from "../../images/maquina-de-corte-a-laser.png"
import customise from "../../images/customise.png"
import modeling3d from "../../images/modeling-3d.png"
import tools from "../../images/tools.png"
import pig from "../../images/pig.png"
import clock from "../../images/clock.png"
import Iconspresentation from "../iconspresentation/iconspresentation"

const prototypeP = "Na área de prototipagem, oferecemos serviços de modelagem 3D, impressão de protótipos feitos de ABS, PLA ou TPU, e montagem de protótipos funcionais. Permitindo que nossos clientes testem suas ideias de forma rápida e eficiente, reduzindo os custos e o tempo de desenvolvimento."
const printingP = "Para a impressão 3D, utilizamos tecnologia de ponta para produzir peças em ABS, PLA ou TPU. Isso permite que nossos clientes produzam peças personalizadas, sob demanda, e reduzam os custos de produção."
const lasercutP = "Em relação ao corte a laser, oferecemos serviços de corte e gravação em diversos materiais, como madeira, acrílico, MDF, couro, tecido entre outros. Com isso, nossos clientes podem criar peças personalizadas e exclusivas, de alta qualidade."
const personalizationP = "Nossos serviços são personalizados de acordo com as necessidades de cada cliente. Temos um compromisso com a excelência e qualidade em todos os nossos serviços, buscando sempre superar as expectativas."

const title1 = "TEMOS AS FERRAMENTAS NECESSÁRIAS"
const description1 = "A MakeSoft está equipada com as ferramentas necessárias para todos os serviços."

const title2 = "CUSTO-BENEFÍCIO"
const description2 = "Escolha a nossa Empresa Júnior para economizar recursos. Receba serviços excelentes enquanto apoia o desenvolvimento de futuros profissionais."

const title3 = "RECEBA NO PRAZO "
const description3 = "Contamos com um time totalmente dedicado para resolver o seu problema no prazo combinado."

export default function Services(props) {
    return (
        <div className="services">

            <Picturesrow title={""} mobile={props.mobile} />
            <div className={props.mobile ? "mobileservicessubheader" : "servicessubheader"}>
                <h2>Empresa júnior de Engenharia</h2>
                <Link to={relativepath + "/Contato"} className='subheader' key={'Contato'} onClick={()=>window.scrollTo({ top: 0, behavior: "smooth" })}>contratar</Link>
            </div>
            <div className="servicesbackground">

                <h3>Nossos serviços</h3>
                <ul className={props.mobile ? "mobileservicesrow" : "servicesrow"}>
                    <li>
                        <img className="serviceicon" src={printer3d} alt="Impressão 3D" />
                        <h4>Impressão 3D</h4>
                        <p>{printingP}</p>
                    </li>
                    <li>
                        <img className="serviceicon" src={lasercut} alt="Corte a Laser" />
                        <h4>Corte a laser</h4>
                        <p>{lasercutP}</p>
                    </li>
                    <li>
                        <img className="serviceicon" src={modeling3d} alt="Modelagem" />
                        <h4>Prototipagem</h4>
                        <p>{prototypeP}</p>
                    </li>
                    <li>
                        <img className="serviceicon" src={customise} alt="Personalização" />
                        <h4>Personalização</h4>
                        <p>{personalizationP}</p>
                    </li>
                </ul>
                <Iconspresentation title="Por que contratar nossos serviços" blocks={[[tools, title1, description1], [pig, title2, description2], [clock, title3, description3]]} bgcolor="#16472A" color="white" flexdir={props.mobile ? "column" : "row"} />
                <div className="partners">
                    <h3>Parceiros</h3>
                    <div>
                        <p>texto</p>
                    </div>

                </div>

            </div>
        </div>
    )
}