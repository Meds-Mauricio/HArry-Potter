import React from 'react'
import style from "./styles.module.css"

export default function Footer() {
   return (
      <section className={style.footerContainer}>
         <div className={style.imgGrifinoria} onClick={() => (window.location.href = '/personagens?house=gryffindor')} ></div>
         <div className={style.imgSonserina} onClick={() => (window.location.href = '/personagens?house=slytherin')} ></div>
         <div className={style.imgLufaLufa} onClick={() => (window.location.href = '/personagens?house=hufflepuff')}></div>
         <div className={style.imgCorvinal} onClick={() => (window.location.href = '/personagens?house=ravenclaw')}></div>
      </section>
   )
}