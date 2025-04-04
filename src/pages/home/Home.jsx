import { Conteiner, Welcome, SectionText, SectionImagem, About, SectionCard, Category, Option } from "./style";
import { FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";

import imagemNissan from "../../assets/img/nissan.png";
import imagemMitsubishi from "../../assets/img/mitsubishi.png";
import imagemList from "../../assets/img/list.png";

import imagemSedan from "../../assets/img/car1.jpeg";
import imagemCompact from "../../assets/img/car2.jpeg";
import imagemSport from "../../assets/img/car3.jpeg";
import imagemSuv from "../../assets/img/car4.jpeg";

import { Header } from "../../components/header/Header";
import { Button } from "../../components/button/button";
import { Card } from "../../components/card/card";
import { ButtonOption } from "../../components/buttonOption/buttonOption";

export function Home(){

    return(
        <Conteiner>
            <Header />

            <main> 
            <Welcome>
               <SectionText>
                    <h1><span>Bem-</span>Vindo</h1>
                    <h2>Comece agora e dirija rumo ao seu próximo veículo!</h2>
        
                    <p className="paragraph" > 
                        Bem-vindo à Mcardir, o melhor lugar para comprar e vender carros novos e 
                        usados com segurança e praticidade! Aqui, conectamos compradores e vendedores 
                        de forma simples e eficiente, garantindo as melhores ofertas do mercado. 
                        Seja você um particular ou uma concessionária, nosso objetivo é tornar 
                        sua experiência de compra e venda rápida
                    </p>
                    <a href="#category"> 
                        <Button 
                            title="Comprar"
                            icon={<FaDollarSign/>} 
                        />
                    </a>
               </SectionText>

               <SectionImagem>
                    <img id="nissan" src={imagemNissan} alt="nissan.png" />
                </SectionImagem>
            </Welcome>

            <About>
                <SectionImagem>
                    <img id="mitsubishi" src={imagemMitsubishi} alt="mitsubishi.png" />
                    <img id="backgraund" src={imagemList} alt="list.png" />

                </SectionImagem>

                <SectionText>
                    <h1>Sobre <span>Nós</span></h1>
                    <h2>Conte com a gente para fazer um ótimo negócio!.</h2>

                    <p className="paragraph" >
                        No Mcardir, somos apaixonados por conectar pessoas ao carro 
                        dos seus sonhos. Com anos de experiência no mercado automotivo, 
                        criamos uma plataforma confiável e intuitiva para facilitar a compra e venda 
                        de veículos novos e usados.
                    </p>

                    <SectionCard>

                        <Card title="Compra e Venda Fácil"/>
                        <Card title="Segurança e Confiabilidade"/>
                        <Card title="Variedade de Opções"/>
                     
                    </SectionCard>

                </SectionText>
            </About>

            <Category id="category" >
                <h1>Categorias</h1>
                <Option>
                    
                    <Link to="/cars/sedan" >
                        <ButtonOption 
                            title="Sedan" 
                            background={imagemSedan}
                        />
                    </Link>

                    <Link to="/cars/compact" >
                        <ButtonOption 
                            title="Compact" 
                            background={imagemCompact} 
                        />
                    </Link>
                    
                    <Link to="/cars/sport" >
                        <ButtonOption 
                            title="Sport" 
                            background={imagemSport} 
                        />
                    </Link>
                    
                    <Link to="/cars/suv" >
                        <ButtonOption 
                            title="Suv" 
                            background={imagemSuv}
                        />
                    </Link>
                    
                </Option>
            </Category>

            </main>
            <footer>
                
            </footer>
        </Conteiner>
    )
}