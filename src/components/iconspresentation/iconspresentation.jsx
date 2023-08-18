import "./iconspresentation.css"
export default function Iconspresentation(props) {
    return (
        <div className="iconsdescription">
            <div className="servicesdescription" style={{backgroundColor:props.bgcolor, color:props.color}}>
                <h3>{props.title}</h3>
                <div className="descriptionsrow" style={{flexDirection:props.flexdir, maxWidth:props.maxwidth}}>
                    {props.blocks.map((block)=>{
                        return(
                            <div>
                                <div className="description">
                                    <img src={block[0]} alt="" />
                                    <div className="descriptionbox">
                                        <h4>{block[1]}</h4>
                                        <p>{block[2]}</p>
                                    </div>
                                </div>
                            </div>
                        )})
                    }
                </div>
            </div>
        </div>
    )
}