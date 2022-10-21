import React from 'react'
import style from "./styles.module.css"
import { useState, useEffect } from 'react'
import axios from 'axios'


export default function Casa() {
        const params = new URLSearchParams(Window.location.search);
        let urlParams = undefined;
        params.forEach((value, key) => {
            urlParams = Object.assign({}, urlParams, {
                [key]: value.toString()
            });
        });
        console.log(urlParams, 'urlParams')
    
        const Gryffindor = () => {
            if (urlParams.loja === 'riachuello') {
                return (
                    <p>oi</p>
                )
            } else if (urlParams.loja === 'americanas') {
                return (
                    <p>oi</p>
                )
            } else if (urlParams.loja === 'magazine luiza') {
                return (
                    <p>olá</p>
                )
            } else {
                return <h1>Não tem mais lojas</h1>
            }
        }
        const Slytherin = () => {
            if (urlParams.cor === 'Azul') {
                return (
                    <section className='azul'>
                        <h1>azul</h1>
                    </section>
    
                )
            } else if (urlParams.cor === 'Amarelo') {
                return (
                    <section className='amarelo'>
                        <h1>amarelo</h1>
                    </section>
    
                )
            } else if (urlParams.cor === 'Vermelho') {
                return (
                    <section className='vermelho'>
                        <h1>vermelho</h1>
                    </section>
    
                )
            } else {
                return <h1>não tem mais cores</h1>
            }
        }
        const Hufflepuff = () => {
            if (urlParams.comodo === 'Cozinha') {
                return (
                    <>
                    a
                    </>
                )
            } else if (urlParams.comodo === 'sala') {
                return (
                    <>
                    b
                    </>
                )
            } else if (urlParams.comodo === 'quarto') {
                return (
                    <>
                        <img src='https://blog.iazamoveisdemadeira.com.br/wp-content/uploads/2016/05/1_Quarto-de-casal.jpg' />
                    </>
                )
            } else {
                return <h1>Não tem mais comodos</h1>
            }
        }
        const Ravenclaw = () => {
            if (urlParams.fornecedor === 'madeira-madeira') {
                return (
                    <section>
                        <h1>madeiramadeira</h1>
                        <p>A melhor para você</p>
                    </section>
                )
            } else if (urlParams.fornecedor === 'bonatto') {
                return (
                    <section>
                        <h1>Móveis Bonatto</h1>
                        <p>Qualidade com Estilo</p>
                    </section>
                )
            } else if (urlParams.fornecedor === 'philco') {
                return (
                    <section>
                        <h1>Philco</h1>
                        <p>Tem coisas que só a Philco faz Pra você</p>
                    </section>
                )
            } else {
                return <h1>não tem mais Fornecedores</h1>
            }
        }
    
        return (
            <section className={style.casas}>
                <div className={style.grifinoria}>
                    {Gryffindor()}
                </div>
    
                <div className={style.sensorina}>
                    {Slytherin()}
                </div>
                <div className={style.lufaLufa}>
                    {Hufflepuff()}
                </div>
    
                <div className={style.corvinal}>
                    {Ravenclaw()}
                </div>
            </section>
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