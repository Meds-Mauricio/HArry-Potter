import style from "./styles.module.css"
import { useEffect, useState } from "react"
import axios from "axios"


export default function Casa () {
  const params = new URLSearchParams('Window.location.search')
  let urlParams = undefined
  params.forEach((value, key) => {
    urlParams = Object.assign({}, urlParams, {
      [key]: value.toString()
    })
  })

  


  const renderizarGrifinória = (item) => {
    if (urlParams.house !== 'Grifinoria') {
      return (
        <section className={style.casas}>
                    return (
                        <div>oioioi</div>
                    )
          
        </section>
      )
    } else {
      return <h1>Não tem mais griffinória</h1>
    }
  }

  const renderizarSlytherin = () => {
    if (urlParams.house !== 'Slytherin') {
      return (
        <section className={style.sonserina}>
          <p>ioioio</p>
        </section>
      )
    } else {
      return <h1>não tem mais sonserina</h1>
    }
  }

  const renderizarHufflepuff = () => {
    if (urlParams.house !== 'Hufflepuff') {
      return (
        <section>
          <p>Lufa-Lufa</p>
        </section>
      )
    } else {
      return <h1>Não tem mais lufa-lufa</h1>
    }
  }

  const renderizarRavenclaw = () => {
    if (urlParams.house !== 'Ravenclaw') {
      return (
        <section>
          <p>corvinal</p>
        </section>
      )
    } else {
      return <h1>não tem mais corvinal</h1>
    }
  }

  return (
    <section className='casas'>
      <div className='grifinoria'>{renderizarGrifinória()}</div>
      <div className='sensorina'>{renderizarSlytherin()}</div>
      <div className='lufaLufa'>{renderizarHufflepuff()}</div>
      <div className='corvinal'>{renderizarRavenclaw()}</div>
    </section>
  )
}
