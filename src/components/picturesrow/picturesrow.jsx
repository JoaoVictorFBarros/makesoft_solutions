import "./picturesrow.css"
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { useState } from "react"

import picture1 from "../../images/image0.jpeg"
import picture2 from "../../images/image1.jpeg"
import picture3 from "../../images/image0.jpeg"
import picture4 from "../../images/image1.jpeg"

const pictures = [picture1,picture2,picture3,picture4]
const scrollrate = 20

export default function Picturesrow(props) {

    var [picoffset, setpicoffset] = useState(0)

    function handlerightarrowclick() {

        if (picoffset <= -100){
            setpicoffset(-100)
        }
        else{
            setpicoffset(picoffset - scrollrate)
        }
    }
    function handleleftarrowclick() {

        if (picoffset >= 0){
            setpicoffset(0)
        }
        else{
            setpicoffset(picoffset + scrollrate)
        }
    }

    return (
        <div className="picturesrow">
            <h2>{props.title}</h2>
            <AiOutlineArrowLeft
                className={props.mobile ? "mobilearrowicon" : "arrowicon"}
                style={picoffset >= 0? {color:"#EBE3D6"}:""}
                onClick={handleleftarrowclick}
            />
            <div className="pictures-container">
                <div style={{transform: `translateX(${picoffset}em)`, transition: `${30 * scrollrate}ms`}} className="pictures-subcontainer">
                    {pictures.map((picture, index) => (
                        <img
                            key={index}
                            className={props.mobile ? "mobilepicture" : "picture"}
                            src={picture}
                            alt=""
                        />
                    ))}
                </div>
            </div>
            <AiOutlineArrowRight
                className={props.mobile ? "mobilearrowicon" : "arrowicon"}
                style={picoffset <= -100? {color:"#EBE3D6"}:""}
                onClick={handlerightarrowclick}
            />
        </div>

    )
}