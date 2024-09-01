import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import image3 from "../../img/image3.png";
import image2 from "../../img/image2.jpeg";
import image1 from "../../img/image1.jpg";
import './sobre.css'



function Sobre(){

    return(
        <><Header />
        <div className="zero">
        <div className="main-content">
            <h2>Criação do Projeto</h2>
            <p>Nosso projeto foi implementado para atender às necessidades dos moradores do bairro, proporcionando uma plataforma para que eles possam interagir com as melhorias da comunidade e reportar quaisquer questões ou sugestões. A iniciativa visa promover um ambiente mais seguro e organizado, facilitando a comunicação entre os residentes e a administração local.</p>

            <h2>Objetivos do Projeto</h2>
            <p>O principal objetivo do projeto é permitir que os moradores do bairro tenham uma maneira eficiente de se comunicar com a administração sobre questões relacionadas à segurança, infraestrutura e serviços públicos. Através da nossa plataforma, é possível:</p>
            <ul>
                <li>Relatar problemas de infraestrutura, como buracos nas ruas e iluminação pública</li>
                <li>Receber atualizações sobre melhorias e eventos no bairro</li>
                <li>Participar de discussões e sugerir melhorias para a comunidade</li>
            </ul>

            <h2>Galeria de Imagens</h2>
            <div className="image-gallery">
                <img src={image3} alt="Imagem do Projeto 1" />
                <img src={image2} alt="Imagem do Projeto 2" />
                <img src={image1} alt="Imagem do Projeto 3" />
            </div>
        </div>
    </div>
        
        
        <Footer /></>

    )
}


export default Sobre;
