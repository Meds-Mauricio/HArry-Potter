import { RESPONSE_LIMIT_DEFAULT } from 'next/dist/server/api-utils';
import React from 'react'
import LogosMain from '../../Componentes/LogosMain';


export default function Casa() {
    const params = new URLSearchParams('Window.location.search');
    let urlParams = undefined;
    params.forEach((value, key) => {
        urlParams = Object.assign({}, urlParams, {
            [key]: value.toString()
        });
    });
    // console.log(urlParams, 'urlParams')

    const Gryffindor = () => {
        if (typeof window !== undefined) {
            return (
                <section >
                    <h1>azul</h1>
                </section>

            )
        } else if (urlParams.loja === 'Gryffindor') {
            return (
                <p></p>
            )
        } else if (urlParams.loja === 'Slytherin') {
            return (
                <p>olá</p>
            )
        } else {
            return <h1>Não tem mais lojas</h1>
        }
    }

    const Slytherin = () => {
        if (urlParams.characters?.house.Gryffindor === 'Grifinólia') {
            return (
                <div className='azul'>
                    <>{resposta.characters.house}</>
                </div>

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
        if (typeof window !== undefined) {
            return (
                <div>
                    <LogosMain />
                </div>
            )
        } else if (urlParams.comodo === 'sala') {
            return (
                <>
                    b
                </>
            )
        } else if (urlParams.comodo === 'quarto') {
            return (
                <div>
                    <img src='https://blog.iazamoveisdemadeira.com.br/wp-content/uploads/2016/05/1_Quarto-de-casal.jpg' />
                </div>
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
        <section className='casas'>
            <div>
            </div>
            <div className='grifinoria'>
                <>resposta.characters.house.Gryffindor()</>
            </div>

            <div className='sensorina'>
                {Slytherin()}
            </div>
            <div className='lufaLufa'>
                {Hufflepuff()}
            </div>

            <div className='corvinal'>
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