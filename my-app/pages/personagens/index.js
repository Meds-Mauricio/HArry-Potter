import React from 'react'
import style from "./styles.module.css"
import { useState, useEffect } from 'react'
import axios from 'axios'
import Modal from '../../Componentes/Modal';

export default function Personagens() {


    const [house, setHouse] = useState(false);
    const [resposta, setResposta] = useState();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [personagemAtual, setPersonagemAtual] = useState({});

    const persons = (personagem) => {
        setResposta(true);
        axios
            .get(
                `https://hp-api.herokuapp.com/api/characters/${personagem}`,
            )
            .then((response) => {
                setResposta(response?.data.results);
                console.log(response?.data.results, "abacaxi");
                setOpenIsModal(true);

            })

    }

    useEffect(() => {
        axios
            .get(
                'https://hp-api.herokuapp.com/api/characters'
            )
            .then((response) => {
                setResposta(response.data);

            });

    }, []);
    useEffect(() => {
      if (typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search);
        let urlParams = undefined;
        params.forEach((value, key) => {
          urlParams = Object.assign({}, urlParams, {
            [key]: value.toString(),
          });
        });
        setHouse(urlParams)
      }
    }, []);

    const click = () => {
        window.location.href = "/"
    }
    const handleOpenModal = (personagem) => {
      setPersonagemAtual(personagem);
      setModalIsOpen(true)
    };

    const casas = () => {
      switch (house?.house) {
        case 'gryffindor': return (
          <>
            <p>grifinória</p>
          </>
        );
        case 'slytherin': return (
          <>
            <p>soncerina</p>
          </>
        );
        case 'hufflepuff': return (
          <>
            <p>lufa-lufa</p>
          </>
        );
        case 'ravenclaw': return (
          <>
            <p>corvinal</p>
          </>
        );
        case 'personagens': return (
          <>
            <p>personagens</p>
          </>
        );
      }
    }
    return (
        <section className={style.containerPersonagens}>
            <div className={style.headerPersonagens}>                
                <div onClick={click} className={style.imgTopo}></div>
            </div>
            <div className={style.imgFundo}>
                <div className={style.containerMain}>
                <div className={style.logoLinha}>
                        <div className={style.imgLogo1}></div>
                        <p className={style.p1}>{casas()}</p>
                        <div className={style.imgLinha}></div>
                    </div>
                </div>
                <div className={style.cardContainer}>
                    
                    {resposta &&
                        resposta.map((characters, index) => {
                            return (
                                <div key={index}className={style.chave}>
                                
                                    <div className={style.onclick} onClick={() => handleOpenModal(characters)}>

                                        <img className={style.imgPersonagens} alt="lista" src={characters?.image} />
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
            {
          modalIsOpen &&
          <Modal handleClose={() => setModalIsOpen(false)} personagemAtual={personagemAtual} />
        }
        </section >

    )
} 