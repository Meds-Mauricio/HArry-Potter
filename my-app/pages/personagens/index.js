import React from 'react'
import style from "./styles.module.css"
import { useState, useEffect } from 'react'
import axios from 'axios'
import Modal from '../../Componentes/Modal';
import LogosMain from '../../Componentes/LogosMain';



export default function Personagens() {


    const [detalhes, setDetalhes] = useState(false);
    const [resposta, setResposta] = useState();
    const [openModal, setOpenModal] = useState(false)

    const persons = (personagem) => {
        setResposta(true);
        axios
            .get(
                `https://hp-api.herokuapp.com/api/characters/${personagem}`,
            )
            .then((response) => {
                setResposta(response?.data.results);
                console.log(response?.data.results, "abacaxi");
                setOpenModal(true);

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
                <section className={style.containerModal}>
                    {openModal && resposta.ccharacters && (
                        <Modal
                            imagem={resposta.characters.image} alt="lista"
                            nome={resposta.characters.name}
                            casa={resposta.characters.house}
                            Espécie={resposta.characters.species}
                            Data de Nasc={resposta.characters.dateOfBirth}
                            Gênero={resposta.characters.gender}
                            Patrous={resposta.characters.patronus}
                            Varinha={resposta.characters.wand}
                            Madeira={resposta.characters.wand?.wood}
                            Núcleo={resposta.characters.wand?.core}
                            Comprimento={resposta.characters.wand?.length}
                            Ancestralidade={resposta.characters.ancestry}
                            Ator={resposta.actor}
                            setOpenModal={setOpenModal}
                        />
                    )}
                </section>
                <div onClick={() =>
                    click()} className={style.imgTopo}></div>
            </div>
            <div className={style.imgFundo}>
                <div className={style.containerLogosMain}></div>
                <div className={style.containerMain}></div>
                <div className={style.cardContainer}>
                    <section className={style.containerLogos}>
                        <LogosMain />
                    </section>

                    {resposta &&
                        resposta.map((characters, index) => {
                            return (
                                <div key={index}>
                                    <div className={style.listPersonagens} onClick={(e) => setOpenModal()}>

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