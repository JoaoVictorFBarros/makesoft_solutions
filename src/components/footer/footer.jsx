import "./footer.css"

export default function Footer(props){
    return(
        <div className={props.mobile ? "mobilefooter" :"footer"}>
        <div>
            <h4>Makesoft Solutions</h4>
            <p>Empresa júnior CEFET-MG campus Divinópolis</p>
        </div>
        <div>
            <h4>Endereço</h4>
            <p>R. Álvares de Azevedo, 400 - Bela Vista, Divinópolis - MG</p>
        </div>
    </div>
    )
}