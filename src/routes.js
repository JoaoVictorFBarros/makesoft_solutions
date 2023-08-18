import {Routes, Route} from "react-router-dom"
import Whoweare from "./components/whoweare/whoweare"
import Services from "./components/home/home"
import Contactform from "./components/form/form"

export const relativepath = "/MakeSoft"

export default function Approutes(props){
    return(
        <Routes>
            <Route path="*" element={<Services mobile={props.mobile}/>} redirect/>
            <Route exact path={relativepath} element={<Services mobile={props.mobile}/>}/>
            <Route exact path={relativepath + "/QuemSomos"} element={<Whoweare mobile={props.mobile}/>}/>
            <Route exact path={relativepath + "/Contato"} element={<Contactform mobile={props.mobile}/>}/>
        </Routes>
    )
}