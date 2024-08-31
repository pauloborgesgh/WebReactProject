import '../Container/container.css'

function Container() {
  return (
    <section className='container'>
      <div className='content'>
        <div className='image-container'>
          
          <img className='img-dengue' src="../dist/assets/img/img_menu.jpg" alt="Prevenção contra a Dengue" />
          <br></br>
        </div>
        <div className='info-container'>
          <p className='dengue-info'>
            A dengue é um problema sério. Faça sua parte eliminando focos de água parada. Juntos, podemos combater a doença e proteger nossa comunidade!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Container
