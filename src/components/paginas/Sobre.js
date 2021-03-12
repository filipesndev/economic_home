/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from 'react'
import './Sobre.css'
import Sobre1 from '../../assets/images/Sobre1.jpeg'
import Sobre2 from '../../assets/images/Sobre2.jpeg'
import Sobre3 from '../../assets/images/Sobre3.jpeg'
import Aos from 'aos'

export default (props) => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return (
        <div className="sobre">
            <div  data-aos="fade-right"  className="sobre_title">
                <h1>Quem somos?</h1>
            </div>
            <div className="sobre_container">
                <div className="sobre_container-up">
                    <div  data-aos="fade-left" className="text1">
                        <p>
                            A NorteLink Tecnologia é uma empresa especializada em desenvolvimento de software, que tem como principal foco disponibilizar soluções para gestão comercial de média, micro e pequenas empresas do comércio varejista e atacadista, com o compromisso de contribuir para o aumento de produtividade, redução de custos e crescimento do negócio.
                        </p>
                    </div>
                    <div  data-aos="fade-in" className="image_box imgbox1">
                        <img src={Sobre1} alt="sobre1"/>
                        <div className="caption">MISSÃO</div>
                        <div className="overlay_boximg">
                            Desenvolver e comercializar software na área de gestão comercial com excelência, oferecendo às empresas ferramentas e soluções tecnológicas inovadoras que lhes permitam automatizar e gerenciar com qualidade os seus processos e atender com agilidade e eficiência aos seus clientes.
                        </div>
                    </div>
                    <div data-aos="fade-in" className="image_box imgbox2">
                        <img src={Sobre2} alt="sobre2"/>
                        <div className="caption">VISÃO</div>
                        <div className="overlay_boximg">
                            Tornar-se uma referência como empresa de desenvolvimento de software de gestão comercial e financeira, que apoia e valoriza o comércio e empreendedorismo regional, oferecendo soluções de qualidade, inovadoras, que estejam sempre à frente das necessidades e desejos dos seus clientes, contribuindo para o desenvolvimento e prosperidade do seu negócio.
                        </div>
                    </div>
                    <div data-aos="fade-in" className="image_box imgbox3">
                        <img src={Sobre3} alt="sobre3"/>
                        <div className="caption">VALORES</div>
                        <div className="overlay_boximg">
                            Honestidade - Ética - Compromisso - Melhoria contínua - Inovação - Simplicidade - Qualidade - Transparência
                        </div>
                    </div>
                    <div data-aos="fade-left" className="text2">
                        <p>
                            Hoje, num mercado cada vez mais competitivo, as empresas comerciais precisam de ferramentas que melhorem sua produtividade e lhes permitam oferecer um serviço eficiente no atendimento aos seus clientes. Isto não é apenas uma questão de vantagem competitiva, e sim um fator decisivo para garantir a sua permanência no mercado. Ciente deste fato, A NorteLink Tecnologia procura não apenas simplesmente comercializar software. Mais do que isso, nos tornamos “parceiros” de nossos clientes e trabalhamos juntos buscando sempre o crescimento e o sucesso do seu negócio.
                        </p>
                    </div>
                </div>
                <div className="sobre_container-down">
                    <h1  data-aos="fade-right" >Nossa equipe de suporte</h1>
                    <p  data-aos="fade-right" >
                        Contamos com uma equipe técnica de analistas e desenvolvedores experientes que estão constantemente buscando melhorar a qualidade de nossos produtos, acompanhando as mudanças e adaptações de mercado, as exigências fiscais e tributárias e as novidades tecnológicas. Além disso, trabalhamos em parceria com outras empresas de tecnologia da informação e profissionais especializados em gestão comercial, financeira e contábil, tudo isso, para garantir que nossos clientes tenham suas necessidades realmente atendidas, à medida que utilizam nossos softwares de modo mais produtivo e eficaz.
                    </p>
                </div>
            </div>
        </div>
    )
}