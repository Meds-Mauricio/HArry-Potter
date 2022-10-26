import React from 'react'
import style from './styles.module.css'

export default function Modal (props) {
  return (
    <section className={style.container}>
      <div className={style.modalCompleto}>
        {/* <div className={style.headerContent}> */}

        {/* </div> */}
        <div className={style.modal}>
          <img
            className={style.imgModalHb}
            width={'256px'}
            height={'356px'}
            src={props.personagemAtual?.image}
          />
          <div className={style.modaNomes}>
            <p>Nome:{props.personagemAtual?.name}</p>
            <p>
              Casa:<span>{props.personagemAtual?.house}</span>
            </p>
            <p>
              Espécie:<span>{props.personagemAtual?.species}</span>
            </p>
            <p>
              Data de Nasc:
              <span>{props.personagemAtual?.dateOfBirth}</span>
            </p>
            <p>
              Gênero:<span>{props.personagemAtual?.gender}</span>
            </p>
            <p>
              Patronus:<span>{props.personagemAtual?.patronus}</span>
            </p>
            <p>
              varinha:<span></span>
            </p>
            <div className={style.alinhamento}>
              <p>
                - Madeira<span>{props.personagemAtual?.wand.wood}</span>
              </p>
              <p>
                - Núcleo<span>{props.personagemAtual?.wand.core}</span>
              </p>
              <p>
                - Comprimnto
                <span>{props.personagemAtual?.wand.length}</span>
              </p>
            </div>
            <p>
              Ancestralidade:<span>{props.personagemAtual?.ancestry}</span>
            </p>
            <p>
              Ator:<span>{props.personagemAtual?.actor}</span>
            </p>
          </div>
          <div className={style.fechar} onClick={props.handleClose}>
            X
          </div>
        </div>
      </div>
    </section>
  )
}
