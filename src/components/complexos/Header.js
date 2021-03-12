/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import Logo from '../../assets/images/Logo.png'
import './Header.css'

export default (props) => {
    return (
        <div className="header">
            <a className="header_left-login" href="http://localhost:3000/" ><i className="fas fa-user-lock header_left-loginicon"></i></a>
            <div className="header_left">
                <a onClick = { e => props.setOpPage(1) } href="/#" >
                    <img className="header_left-logo" src={Logo} alt="logo"/>
                </a>
            </div>
            <div className="header_right">
                <a onClick = { e => props.setOpPage(1) } href="/#" className="header_right-button login">Home</a>
                <a onClick = { e => props.setOpPage(2) } href="/#" className="header_right-button">Sobre</a>
                <a onClick = { e => props.setOpPage(3) } href="/#" className="header_right-button">Preço</a>
                <a onClick = { e => props.setOpPage(4) } href="/#" className="header_right-button">Contato</a>
                <a href="http://localhost:3000/" className="header_right-button login">Login</a>
            </div>
        </div>
    )
}