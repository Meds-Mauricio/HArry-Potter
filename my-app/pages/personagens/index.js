import React from 'react'
import style from "./styles.module.css"
import { useState, useEffect } from 'react'
import axios from 'axios'
import Modal from '../../Componentes/Modal';



export default function Personagens() {


   const [detalhes, setDetalhes] = useState(false);
   const [resposta, setResposta] = useState();

//    const persons = (personagem) => {
//     setResposta(true);
//       axios
//          .get(
//             `hhttps://hp-api.herokuapp.com/api/characters${personagem}`
//          )
//          .then((resposta)=>{
//             setDetalhes(resposta.data);
//             console.log(resposta.data, "abacaxi");

//          })
//    }

   useEffect(() => {
      axios
         .get(
            `https://hp-api.herokuapp.com/api/characters`

         )
         .then((response) => {
            setResposta(response.data);
            console.log(response.data, "pera");

         });

   }, []);


   return (
      <section className={style.containerPersonagens}>
         <div className={style.headerPersonagens}>
            <div className={style.imgTopo}></div>
         </div>
         <div className={style.imgFundo}>
         <div>
            <a className={style.linkVoltar} href="/">Voltar</a>
         </div>
            <div className={style.logoLinha}>
               <div className={style.imgLogo1}></div>
               <p className={style.p1}>Personagens</p>
               <div className={style.imgLinha}></div>
            </div>
            <div className={style.cardContainer}>
               {resposta &&
                  resposta.map((characters, index) => {
                     return (
                        <div key={index}>
                            <Modal />
                           <div className={style.listPersonagens}>
                              <img alt="lista" src={characters.image} />
                              <p className={style.personagemNome}>{characters.name}</p>
                           </div>
                        </div>
                     )

                  }
                  )
               }
            </div>
         </div>
         <>
            {/* <div>
            <a className={style.linkVoltar} href="/">Voltar</a>
         </div> */}
         </>

        
      </section>

   )
} 