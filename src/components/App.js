/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import Header from './complexos/Header'
import Main from './complexos/Main'
import Footer from './complexos/Footer'
import { useState } from 'react'
import './App.css'

export default (props) => {

    const [opPage, setOpPage] = useState(1)

    return (
        <div>
            <Header setOpPage={setOpPage} />
            <Main opPage={opPage} setOpPage={setOpPage} />
            <Footer />
        </div>
    )
}