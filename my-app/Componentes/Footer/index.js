import React from 'react'
import style from "./styles.module.css"

export default function Footer() {
    return (
        <section>
            <div className={style.footer}>
                <div className={style.imgGrifinoria}></div>
                <div className={style.imgSonserina}></div>
                <div className={style.imgLufaLufa}></div>
                <div className={style.imgCorvinal}></div>
            </div>
        </section>






    )
}




export default function MainCharacters(characters) {



    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setResposta(response.data);
        })
    }, [])

    return (
        <main>
            <ul className={styles.ulCards}>
                <div className={styles.container}>
                    {resposta &&
                        resposta.map((characters, index) => {
                            return (
                                <li>
                                    <div key={index}>
                                        <div className={styles.divImageCard}><img alt='teste' src={characters.image} width='163px' height='227px'></img></div>
                                        <div className={styles.divCharactersName}><h3 className={styles.charactersName}>{characters.name}</h3></div>
                                    </div>
                                </li>
                            )
                        })}
                </div>
            </ul>
        </main>
    )
}

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




</section>