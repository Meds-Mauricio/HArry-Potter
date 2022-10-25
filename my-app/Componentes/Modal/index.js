/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import Image from 'next/image'
import React, { useState } from 'react'

const open = true

export default function Modal({ image, name, house, species, dateOfBirth, gender, patronus, wand, ancestry, actor, setOpenModal = { setOpenModal } }) {
    return (
        <section>
            <div>

                {name && (
                    <div className={style.modal}>
                        <p>resposta:{name}</p>
                        <p>resposta:{house}</p>
                        <p>resposta:{species}</p>
                        <p>resposta:{dateOfBirth}</p>
                        <p>resposta:{gender}</p>
                        <p>resposta:{patronus}</p>
                        <p>resposta:{wand}</p>
                        <p>resposta:{wand.wood}</p>
                        <p>resposta:{wand.core}</p>
                        <p>resposta:{wand.legend}</p>
                        <p>resposta:{ancestry}</p>
                        <p>resposta:{actor}</p>
                        <div>
                            <Image width={'256px'} height={'356px'} src={props.characters.image} />
                        </div>
                    </div>
                )(


                    <div>
                        <button onClick={() => setOpenModal(openModal)}>X</button>
                    </div>
                )}
            </div>


        </section >
    )
}