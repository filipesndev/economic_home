/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from 'react'
import './Precos.css'
import Precosimg from '../../assets/images/Precos.jpg'
import Aos from 'aos'


export default (props) => {

    useEffect(() => {
        Aos.init({ duration:1000 })
    }, [])

    return (
        <div className="precos">
            <img src={Precosimg} alt="" />
            <div  data-aos="zoom-in"  className="precos_card">
                <div className="precos_card-top">
                    <h1>Plano Economic Base</h1>
                    <h2>R$5,50 por Mês</h2>
                </div>
                <div className="precos_card-middle">
                    <ul>
                        <li><i className="fas fa-check"></i>Acesso total ao sistema</li>
                        <li><i className="fas fa-check"></i>Organização rápida e segura</li>
                        <li><i className="fas fa-check"></i>Interface intuitiva</li>
                        <li><i className="fas fa-check"></i>Funcionamento Web</li>
                        <li><i className="fas fa-check"></i>Suporte Técnico</li>
                    </ul>
                </div>
                <div className="precos_card-bottom">
                    <a className="precos_button" href="/#">Assine agora</a>
                </div>
            </div>
        </div>
    )
}