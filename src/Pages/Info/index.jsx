import  { useState } from 'react';
import './info.css'; // Adapte o caminho do arquivo CSS conforme necessário
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const Info = ({ fotoService }) => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

 
  return (
    <><><Header /><div className="container">


      <main className="main-content">
        <h4>Algumas informações sobre: <i className="dengue">Dengue</i></h4>

        <div className="accordion-group">
          {[
            { title: "Tempo de duração da dengue?", content: "Varia de 3 a 15 dias, sendo, em média, de 5 a 6 dias. A transmissão ocorre enquanto houver presença de vírus no sangue do homem (período de viremia). Este período começa um dia antes do aparecimento da febre e vai até o 6º dia da doença." },
            { title: "Fase mais perigosa da dengue?", content: "Na fase crítica da dengue (entre o terceiro e o sexto dia após o início dos sintomas), podem surgir manifestações clínicas (sinais de alarme) correspondentes a uma complicação da doença potencialmente letal chamada dengue grave (conhecida anteriormente como dengue hemorrágica)." },
            { title: "1 º Causa", content: "A dengue é causada por um arbovírus (vírus transmitidos por artrópodes) que se apresenta em quatro tipos diferentes: DEN-1, DEN-2, DEN-3 e DEN-4. Atualmente os quatro sorotipos circulam no Brasil intercalando-se com a ocorrência de epidemias, geralmente associadas com a introdução de novos sorotipos em áreas anteriormente não atingidas ou alteração do sorotipo predominante." },
            { title: "2º Transmissão", content: "O vírus é transmitido pela picada de mosquitos da espécie Aedes que também são responsáveis pela transmissão da chikungunya, febre amarela e Zika." },
            { title: "3º Sintomas", content: "Durante a evolução da doença, destacam-se três fases: febril, crítica e de recuperação. Na fase crítica da dengue (entre o terceiro e o sexto dia após o início dos sintomas), podem surgir manifestações clínicas (sinais de alarme) correspondentes a uma complicação da doença potencialmente letal chamada dengue grave (conhecida anteriormente como dengue hemorrágica), que aparecem devido ao aumento da permeabilidade vascular e da perda de plasma, o que pode levar ao choque irreversível e à morte." },
            { title: "4º Diagnóstico", content: "O diagnóstico da dengue é feito comumente mediante sorologia para determinar a presença de anticorpos contra o vírus no sangue, mas não determina especificamente qual tipo de vírus é responsável pela infecção. Métodos de biologia molecular mais elaborados podem ser utilizados para detectar as proteínas do vírus." },
            { title: "5º Tratamento", content: "Não existe tratamento específico para dengue. Os cuidados terapêuticos consistem em tratar os sintomas: combater a febre e, nos casos graves, realizar hidratação por via intravenosa. O atendimento rápido para a identificação dos sinais de alarme e o tratamento oportuno podem reduzir o número de óbitos, chegando a menos de 1% dos casos." },
            { title: "6º Prevenção", content: "Desde o fim de 2015 a primeira vacina contra dengue foi registrada em diferentes países para ser usada em indivíduos de 9 a 45 anos vivendo em áreas endêmicas ou de risco. A OMS recomenda que os países considerem a introdução da vacina contra dengue apenas em zonas geográficas onde os dados epidemiológicos indicam um alto índice da doença. Outras vacinas com diferentes tipos do vírus se encontram em período de desenvolvimento. De modo geral as vacinas têm mostrado uma efetividade muito variável (entre 50% e 80%) dependendo do tipo de vírus que causa a infeção, do tipo de indivíduos vacinados e do local onde tem sido implementada; igualmente o tempo de duração da proteção está sendo estudado. Atualmente, a principal forma de prevenção é o combate aos mosquitos – eliminando os criadouros de forma coletiva com participação comunitária – e o estímulo à estruturação de políticas públicas efetivas para o saneamento básico e o uso racional de inseticidas." },
            { title: "7º Atividades", content: "MSF tem contribuído na vigilância e controle da doença em países atingidos por desastres naturais (Paquistão, Filipinas, Mianmar e Haiti), dado resposta a surtos sazonais (Cabo Verde, Honduras e El Salvador) e também realizado pesquisas sobre a epidemiologia da doença (Camboja). De igual maneira, MSF ajudou no passado a controlar surtos da doença no Brasil e atendeu pacientes com dengue na Unidade de Pronto Atendimento do Complexo do Alemão." },
            { title: "8º Atividades", content: "MSF tem contribuído na vigilância e controle da doença em países atingidos por desastres naturais (Paquistão, Filipinas, Mianmar e Haiti), dado resposta a surtos sazonais (Cabo Verde, Honduras e El Salvador) e também realizado pesquisas sobre a epidemiologia da doença (Camboja). De igual maneira, MSF ajudou no passado a controlar surtos da doença no Brasil e atendeu pacientes com dengue na Unidade de Pronto Atendimento do Complexo do Alemão." },
            { title: "9º Atividades", content: "MSF tem contribuído na vigilância e controle da doença em países atingidos por desastres naturais (Paquistão, Filipinas, Mianmar e Haiti), dado resposta a surtos sazonais (Cabo Verde, Honduras e El Salvador) e também realizado pesquisas sobre a epidemiologia da doença (Camboja). De igual maneira, MSF ajudou no passado a controlar surtos da doença no Brasil e atendeu pacientes com dengue na Unidade de Pronto Atendimento do Complexo do Alemão." },
            { title: "10º Atividades", content: "MSF tem contribuído na vigilância e controle da doença em países atingidos por desastres naturais (Paquistão, Filipinas, Mianmar e Haiti), dado resposta a surtos sazonais (Cabo Verde, Honduras e El Salvador) e também realizado pesquisas sobre a epidemiologia da doença (Camboja). De igual maneira, MSF ajudou no passado a controlar surtos da doença no Brasil e atendeu pacientes com dengue na Unidade de Pronto Atendimento do Complexo do Alemão." },
          ].map((item, index) => (
            <div className="accordion" key={index}>
              <button className="accordion-header" onClick={() => toggleAccordion(index)}>
                {item.title}
              </button>
              <div className={`accordion-content ${activeAccordion === index ? 'active' : ''}`}>
                <div className="card">
                  <div className="card-header">
                    <h4>{item.title}</h4>
                  </div>
                  <div className="card-body">
                    {item.content}
                  </div>
                </div>
              
              </div>
            </div>
          ))}
        </div>
      </main>


    </div>
    <br></br>  <br></br></><Footer /></>
  );
};

export default Info;
