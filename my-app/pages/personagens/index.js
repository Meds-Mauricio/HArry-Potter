import React from 'react'
import style from "./styles.module.css"
import { useState, useEffect } from 'react'
import axios from 'axios'
import Modal from '../../Componentes/Modal';



export default function Personagens() {


    const [detalhes, setDetalhes] = useState(false);
    const [resposta, setResposta] = useState();
    const [openModal, setOpenModal] = useState(false)

       const persons = (personagem) => {
        setResposta(true);
          axios
             .get(
                `hhttps://hp-api.herokuapp.com/api/characters${personagem}`
             )
             .then((resposta)=>{
                setDetalhes(resposta.data.results);
                console.log(resposta.data, "abacaxi");

             })
             
       }

    useEffect(() => {
        axios
            .get(
                'https://hp-api.herokuapp.com/api/characters'
            )
            .then((response) => {
                setResposta(response.data);
                console.log(response.data, "pera");

            });

    }, []);

    const click = () => {
        window.location.href = "/"
    }
    
    return (
        <section className={style.containerPersonagens}>
            <div className={style.headerPersonagens}>
                <div>
                    {resposta && (
                        <Modal
                            imagem={resposta.image} alt="lista" 
                            nome={resposta.name}
                            casa={resposta.house}
                            Espécie={resposta.species}
                            Data de Nasc={resposta.dateOfBirth}
                            Gênero={resposta.gender}
                            Patrous={resposta.patronus}
                            Varinha={resposta.wand}
                            Madeira={resposta.wand?.wood}
                            Núcleo={resposta.wand?.core}
                            Comprimento={resposta.wand?.length}
                            Ancestralidade={resposta.ancestry}
                            Ator={resposta.actor}
                            setOpenModal={setOpenModal}
                        />
                    )}
                </div>
                <div onClick={() =>
                    click()} className={style.imgTopo}></div>
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
                                    <div className={style.listPersonagens} onClick={() =>setOpenModal()} >
                    
                                        <img alt="lista" src={characters.image} />
                                        <p className={style.personagemNome}>{characters.name}</p>
                                    </div>
                                </div>
                            )

                        }
                        )
                    }

                </div>
                <div>
                   
                </div>
            </div>
        </section >

    )
} 