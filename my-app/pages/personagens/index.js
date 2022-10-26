import React from 'react'
import style from './styles.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Modal from '../../Componentes/Modal'

export default function Personagens () {
  const [detalhes, setDetalhes] = useState(false)
  const [resposta, setResposta] = useState()
  const [openModal, setOpenModal] = useState([false])
  const [character, setCharacter] = useState({})

  const persons = personagem => {
    setResposta(true)
    axios
      .get(`https://hp-api.herokuapp.com/api/characters/${personagem}`)
      .then(response => {
        setResposta(response?.data.results)
        console.log(response?.data.results, 'abacaxi')
        setOpenModal(true)
      })
  }

  useEffect(() => {
    axios.get('https://hp-api.herokuapp.com/api/characters').then(response => {
      setResposta(response.data)
      console.log(response.data, 'pera')
    })
  }, [])

  const click = () => {
    window.location.href = '/'
  }

  return (
    <section className={style.containerPersonagens}>
      <div className={style.headerPersonagens}>
        <div onClick={() => click()} className={style.imgTopo}></div>
      </div>
      <div className={style.imgFundo}>
        <div className={style.containerLogosMain}></div>
        <div className={style.containerMain}>
          <div className={style.logoLinha}>
            <div className={style.imgLogo1}></div>
            <p className={style.p1}>Navegue pelas Casas</p>
            <div className={style.imgLinha}></div>
          </div>
        </div>
        <div className={style.cardContainer}>
          {resposta &&
            resposta.map((characters, index) => {
              return (
                <div key={index}>
                  <div
                    className={style.listPersonagens}
                    onClick={e => setOpenModal()}
                  >
                    <img alt='lista' src={characters.image} />
                    <p className={style.personagemNome}>{characters.name}</p>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
      {openModal && (
        <Modal handleClose={() => setOpenModal(false)} character={character} />
      )}
    </section>
  )
}
