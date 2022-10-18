import React from 'react'
import style from "./styles.module.css"
import { useState, useEffect } from 'react'
import axios from 'axios'


export default function pelaCasa() {


    // const [data, setData] = useState();
    // const [detalhes, setDetalhes] = useState(false);
    // const [valores, setValores] = useState();

    // const modal = (personagens) => {
    //     setDetalhes(true);
    //     axios
    //         .get(
    //             `hhttps://hp-api.herokuapp.com/api/characters/${personagens}`,
    //         )
    //         .then((preview) => {
    //             setValores(preview.data);
    //              console.log(preview.data, abacaxi);
    //         })
    // }

    // useEffect(() => {
    //     axios
    //         .get(
    //             'https://hp-api.herokuapp.com/api/characters',
    //             {
    //                 headers: {},
    //             }
    //         )
    //         .then((preview) => {
    //             setData(preview.data.results);
    //             console.log(preview.data.results, "oioioi");

    //         });

    // }, []);

    return (
        <>
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
            </section>
        </>
    )
}


{/* <>
                        <a className={style.linkVoltar} href="/">Voltar</a>
                    </>            <section className={style.harryLista}>
                        {detalhes && valores && (
                     <div className={style.harryModal}>
                         <div className={style.harryHabilidades}>
                             <div className={style.fecharModal} onClick={() => {
                                 setDetalhes(false);
                             }
                             }>X</div>
                             <div className={style.harryNomes}>
                                 <div className={style.harryInfo1}>
                                     <p className={style.InfoId}>{valores.name} {valores.id}</p>
                                 </div>
                                 {valores.stats.map((stats) => {
                                     return (
                                         <div className={style.harryInfo}>
                                             <p className={style.harryHp}>{stats.stat.name}=
                                                 {stats.base_stat}</p>
                                        </div>
                                     )
                                }
                                 )}
                                 {valores.abilities.map((abilities) => {
                                     return (
                                         <div className={style.harryInfo2}>
                                             <p>{abilities.ability.name}</p>
                                         </div>
                                     );
                                 }
                                 )}
                                 {valores.types.map((types) => {
                                     return (
                                         <div className={style.harryTipo}>
                                             <p>Type= {types.type.name}</p>
                                         </div>
                                     );
                                 }
                                 )}
                            </div>
                             <img className={style.imgPersonagens} src={valores.sprites.other.dream_world.front_default} />
                        </div>
                     </div>
                 )}
                <div className={style.harrylist}>
                     {
                         data?.map((Harry, img) => {
                           const name = Personagens.name;
                             return (
                                 <div className={style.listPersonagens} onClick={() => {
                                     modal(name);
                                 }}>
                                     <p className={style.HarryNome}>name}</p>
                                     <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${img + 1}.png`} />
                                 </div>
                             )
                         })
                     }
                 </div>
            </section>
        // </section >
                </>
               )
} */}