
import React from 'react'
import styles from "./styles.module.css"

export default function Modal(props) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.headercontent}>
                    <div className={styles.fechar} onClick={props.handleClose}>X</div>
                </div>
                <div className={styles.main}>

                    <div className={styles.img}>
                        <div className={styles.styleImg}>
                            <img width={'256px'} height={'356px'} src={props.personagemAtual?.image} />
                        </div>
                    </div>
                    <div className={styles.props}>
                        <p className={styles.text}>Nome:<span className={styles.color}>{props.personagemAtual?.name}</span></p>
                        <p className={styles.text}>Casa:<span className={styles.color}>{props.personagemAtual?.house}</span></p>
                        <p className={styles.text}>Espécie:<span className={styles.color}>{props.personagemAtual?.species}</span></p>
                        <p className={styles.text}>Data de Nasc:<span className={styles.color}>{props.personagemAtual?.dateOfBirth}</span></p>
                        <p className={styles.text}>Gênero:<span className={styles.color}>{props.personagemAtual?.gender}</span></p>
                        <p className={styles.text}>Patronus:<span className={styles.color}>{props.personagemAtual?.patronus}</span></p>
                        <p className={styles.text}>varinha:<span className={styles.color}></span></p>
                        <div className={styles.Alinhar}>
                            <p className={styles.text}>- Madeira<span className={styles.color}>{props.personagemAtual?.wand?.wood}</span></p>
                            <p className={styles.text}>- Núcleo<span className={styles.color}>{props.personagemAtual?.wand?.core}</span></p>
                            <p className={styles.text}>- Comprimnto<span className={styles.color}>{props.personagemAtual?.wand?.length}</span></p>
                        </div>
                        <p className={styles.text}>Ancestralidade:<span className={styles.color}>{props.personagemAtual?.ancestry}</span></p>
                        <p className={styles.text}>Ator:<span className={styles.color}>{props.personagemAtual?.actor}</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}