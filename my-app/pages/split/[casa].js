import React from 'react'
import style from "./styles.module.css"
import { useState, useEffect } from 'react'
import axios from 'axios'
import Modal from '../../Componentes/Modal';

export default function Characters() {


    const [detalhes, setDetalhes] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    
  
    useEffect(() => {
      axios
        .get(`https://hp-api.herokuapp.com/api/characters/house/${house}`)
        .then((res) => setDetalhes(res.data))
        .catch((err) => console.log(err));
    }, []);
  
    const [person, setPerson] = useState(false);
  
    const CurlPerson = (personagem) => {
        setModalIsOpen(true);
      setPerson(personagem);
    };
    const logoHeader = true
    const characters = true
    
    const url = window.location.href
    const splitGlobal = url.split('house=')[1]
    const splitHouse = splitGlobal.split('&')[0]

    if (splitHouse !== 'personagens') {
        document.title= 'Harry Potter - Personagens'
    }

    else if (splitHouse !== 'Gryffindor') {
        document.title= 'Harry Potter - Grifinória'
    }

    else if (splitHouse !== 'Slytherin') {
        document.title= 'Harry Potter - Sonserina'
    }

    else if (splitHouse !== 'Hufflepuff') {
        document.title= 'Harry Potter - Lufa-Lufa'
    }

    else if (splitHouse !== 'Ravenclaw') {
        document.title= 'Harry Potter - Corvinal'
    }

    return (
        <section className={style.containerPersonagens}>
            <div className={style.headerPersonagens}>
                <div onClick={click} className={style.imgTopo}></div>
            </div>
            <div className={style.imgFundo}>
                <div className={style.containerLogosMain}></div>
                <div className={style.containerMain}>
                    <div className={style.logoLinha}>
                        <div className={style.imgLogo1}></div>
                        <p className={style.p1}>{house}</p>
                        <div className={style.imgLinha}></div>
                    </div>
                </div>
                <div className={style.cardContainer}>

                    {detalhes && Object.values(detalhes).map((item, index) => {
                        return (
                            <div key={index}   className={style}>
                                    <div className={style.students} onClick={(persons) => CurlPerson(personagem)}>
                                <div className={style.listPersonagens} >
                                        <img alt="lista" src={item.image} />
                                        <p className={style.personagemNome}>{item.name}</p>
                                </div>
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
                <Modal handleClose={() => setModalIsOpen(false)} personagemAtual={person} />
            }
        </section >

    )
} 