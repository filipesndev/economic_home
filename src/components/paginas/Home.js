/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from 'react'
import Home2 from '../../assets/images/home2.jpg'
import Home3 from '../../assets/images/home3.jpg'
import Home4 from '../../assets/images/home4.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './Home.css'

export default (props) => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return (
        <div className="home">
            <div data-aos="fade-right" className="home_top">
                <h1><i>Economic</i></h1>
                <h2><i>Seu sistema de organização economica.</i></h2>
            </div>
            <div className="home_middle">
                <div data-aos="fade-left" className="home_middle-text1">
                    <h1>Organização rapida e prática.</h1>
                    <p>
                        Com o sistema Economic você, sua família ou seus amigos poderão organizar
                         e visualizar toda atividade econômica realizada. Com uma interface simples e intuitiva
                          o Economic oferece uma experiência fácil e rápida para registrar e organizar toda atividade
                           econômica, seja débito, ou crédito.
                    </p>
                </div>

                <img data-aos="fade-left" className="home_middle-image1" src={Home2} alt="ImgHome2"/>
                <img data-aos="fade-right" className="home_middle-image2"  src={Home3} alt="ImgHome3"/>

                <div data-aos="fade-right" className="home_middle-text2">
                    <h1>Organização a longo prazo.</h1>
                    <p>
                        Por meio do nosso sistema, será fácil interpretar e 
                        organizar o quanto sua família gasta todo mês. Com opções de adicionar tipos de pagamento, 
                        grupos e usuários de maneira ilimitada você poderá ver por mês um resumo do quanto foi gasto e ganho. 
                        Além disso também é possível visualizar as atividades em gráficos e imprimi-las.
                    </p>
                </div>

                <div data-aos="fade-left" className="home_middle-text3">
                    <h1>Funcionamento totalmente Online.</h1>
                    <p>
                        Por ser hospedado na internet, o Economic funciona de maneira rápida em qualquer local, 
                        seja para ver seus lançamentos como para realizar novos garantindo, assim, uma experiência dinâmica que
                         não irá atrapalhar as tarefas do dia.
                    </p>
                </div>

                <img data-aos="fade-left" className="home_middle-image3"  src={Home4} alt="ImgHome4"/>
            </div>
            <div className="home_bottom">
                <h1 >
                    <i>Veja nossos <a onClick={ e => props.setOpPage(3) } href="/#">preços </a> 
                     ou entre em <a onClick={ e => props.setOpPage(4) } href="/#">contato</a>!</i>
                </h1>
            </div>
        </div>
    )
}