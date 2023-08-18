import './header.css'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from "react-icons/ai"
import logo from '../../images/logo.png'
import { useState } from 'react'
import { relativepath } from '../../routes'
import { SiGmail, SiInstagram, SiLinkedin } from "react-icons/si"

export default function Header(props) {

    const [linksvisibility, setlinksvisibility] = useState(false)

    const urltotext = {
        "" : "Home",
        "/": "Home",
        "/QuemSomos": "Quem somos",
        "/Contato": "Contato"
    }

    function texttourl(value) {
        for (const key in urltotext) {
            if (urltotext[key] === value) {
                return key;
            }
        }
    }

    return (
        <div className={props.mobile ? "mobileheader" : "header"}>
            <div className='logoandtitle'>
                <img className={props.mobile ? 'mobilelogo' : 'logo'} src={logo} alt='logo' />
                <h1>{props.mobile ? "" : <div className='logotext'> <p className='headertitle'>Makesoft</p><p className='headersubtitle'>Solutions</p></div>}</h1>
            </div>
            <div className='subheadersandicons'>
                {props.mobile ?
                    <div className='mobilemenu'>
                        <AiOutlineMenu className="mobileheaders" onClick={() => { setlinksvisibility(!linksvisibility) }} />
                        <div className='mobilesubheaders' style={{ display: linksvisibility ? '' : 'none' }} onDragLeave={() => { setlinksvisibility(false) }}>
                            {props.titles.map((title) => {
                                return (
                                    <Link to={relativepath + texttourl(title)} className='mobilesubheader' id={urltotext[props.path.toString().replace(relativepath, "")] === title.toString() ? 'active' : 'inactive'} key={title} onClick={() => {
                                        setlinksvisibility(!linksvisibility)
                                        window.scrollTo({ top: 0, behavior: "smooth" })
                                    }}>{title}</Link>
                                )
                            })}
                        </div>
                    </div>
                    :
                    <div className='headers'>
                        {props.titles.map((title) => {
                            return (
                                <Link to={relativepath + texttourl(title)} className='subheader' id={urltotext[props.path.toString().replace(relativepath, "")] === title.toString() ? 'active' : 'inactive'} onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }} key={title}>{title}</Link>
                            )
                        })}
                    </div>
                }
                <div className='headericons'>
                    <Link to={props.redirects[0]} target="_blank" className={props.mobile ?"mobilelink" :"subheader"}>
                        <SiGmail className="icon" />
                    </Link>
                    <Link to={props.redirects[1]} target="_blank" className={props.mobile ?"mobilelink" :"subheader"}>
                        <SiInstagram className="icon" />
                    </Link>
                    <Link to={props.redirects[2]} target="_blank" className={props.mobile ?"mobilelink" :"subheader"}>
                        <SiLinkedin className="icon" />
                    </Link>
                </div>
            </div>
        </div>
    )
}