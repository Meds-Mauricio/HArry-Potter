import React from 'react'
import style from "./styles.module.css"
import { useState, useEffect } from 'react'
import axios from 'axios'


export default function Personagens() {


    const [data, setData] = useState();
    const [detalhes, setDetalhes] = useState(false);
    const [resposta, setResposta] = useState();

    const persons = (personagem) => {
        setDetalhes(true);
        axios
            .get(
                `hhttps://hp-api.herokuapp.com/api/characters${personagem}`,
            )
            .then(function (resposta) {
                setResposta(resposta.data);
                // console.log(resposta.data, "abacaxi");
            })
    }

    useEffect(() => {
        axios
            .get(
                'https://hp-api.herokuapp.com/api/characters',
            )
            .then((resposta) => {
                setData(resposta.data);
                console.log(resposta.data, "oioioi");

            });

    }, []);

    return (
        <section className={style.containerPersonagens}>
            <div className={style.headerPersonagens}>
                <div className={style.imgTopo}></div>
            </div>
            <div className={style.imgFundo}>
                <div className={style.logoLinha}>
                    <div className={style.imgLogo1}></div>
                    <p className={style.p1}>Personagens</p>
                    <div className={style.imgLinha}></div>
                </div>
            </div>

            <div>
                <a className={style.linkVoltar} href="/">Voltar</a>
            </div>
            <section className={style.harryLista}>
                {detalhes && resposta && (
                    <div className={style.harryModal}>
                        <div className={style.harryHabilidades}>
                            <div className={style.fecharModal} onClick={() => {
                                setDetalhes(false);
                            }
                            }>X</div>
                            <div className={style.harryNomes}>
                                <div className={style.harryInfo1}>
                                    <p className={style.InfoId}>{resposta.name} {resposta.id}</p>
                                </div>
                                {resposta.data.map((data) => {
                                    return (
                                        <div className={style.harryInfo}>
                                            <p className={style.harryHp}>{stats.stat.name}=
                                                {stats.base_stat}</p>
                                        </div>
                                    )
                                }
                                )}
                                {resposta.data.map((alternate_names) => {
                                    return (
                                        <div className={style.harryInfo2}>
                                            <p>{alternate_names.alternate_names.ability.name}</p>
                                        </div>
                                    );
                                }
                                )}
                                {resposta.types.map((types) => {
                                    return (
                                        <div className={style.harryTipo}>
                                            <p>Type= {types.type.name}</p>
                                        </div>
                                    );
                                }
                                )}
                            </div>
                            <img className={style.imgPersonagens} src={resposta.name.alternate_names.wand.patronus.hogwartsStudent.actor.alternate_actors} />
                        </div>
                    </div>
                )}
                <div className={style.harrylist}>
                    {
                        data?.map((harryPoter, image) => {
                            const name = persons.name;
                            return (
                                <div className={style.listPersonagens} onClick={() => {
                                    persons(name);
                                }}>
                                    <p className={style.HarryNome}>{name}</p>
                                    <img src={`htps://hp-api.herokuapp.com/api/characters/$.png`} />
                                </div>
                            )


                        }
                        )
                    }
                </div>
            </section>
        </section>

    )
} 