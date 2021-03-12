/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from 'react'
import './Contato.css'
import Aos from 'aos'

export default (props) => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return (
        <div className="contato">
            <div className="contato_top">
                <h1 data-aos="fade-right" >Fale conosco ou deixe uma mensagem.</h1>
                <h2 data-aos="fade-right" >Estamos esperando o seu contato.</h2>
                <h2 data-aos="fade-right" >Será um prazer lhe atender.</h2>
            </div>
            <div className="contato_bottom">
                <div  data-aos="fade-up" className="contato_bottom-box a1">
                    <h1><i className="fas fa-home"></i>ENDEREÇO:</h1>
                    <p>Avenida J**** , 2**</p>
                    <p>Ed. E*** Bus*****</p>
                    <p>Salas 1***/1**1</p>
                </div>
                <div data-aos="fade-up" className="contato_bottom-box a2">
                    <h1><i className="far fa-clock"></i>HORÁRIO:</h1>
                    <p>Segunda à Sexta: 08:00 às 18:00</p>
                    <p>Sábado: 08:00 às 12:00</p>
                </div>
                <div data-aos="fade-up" className="contato_bottom-box a3">
                    <h1><i className="fas fa-phone"></i>TELEFONES:</h1>
                    <p>Sede Te*****-P*: (86) 308*-****</p>
                    <p>Filial Ca*****-M*: (99) 352*-****</p>
                </div>
                <div data-aos="fade-up" className="contato_bottom-box a4">
                    <h1><i className="far fa-envelope"></i>E-MAILS:</h1>
                    <p>Comercial: comercial@*****.com.br</p>
                    <p>Financeiro: financeiro@*****.com.br</p>
                    <p>Suporte técnico: suporte@*****.com.br</p>
                    <p>Sugestões e reclamações: ouvidoria@*****.com.br</p>
                    <p>Contato: atendimento@*****.com.br</p>
                </div>
            </div>
        </div>
    )
}