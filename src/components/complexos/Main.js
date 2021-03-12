/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import Home from '../paginas/Home'
import Contato from '../paginas/Contato'
import Sobre from '../paginas/Sobre'
import Precos from '../paginas/Precos'

export default (props) => {

    const constPage = props.setOpPage

    return (
        <main className='app-main'>
            {
                props.opPage === 1 ? <Home setOpPage={constPage} /> :
                props.opPage === 2 ? <Sobre /> :
                props.opPage === 3 ? <Precos /> : 
                props.opPage === 4 ? <Contato /> : null
            }
        </main>
    )
}