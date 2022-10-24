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
               <div>
                   <Image width={'256px'} height={'356px'} src={props.characters.image}/> 
                </div>
                {name && (
                    <div>
                        <p>resposta:{characters.name}</p>
                        <p>resposta:{characters.house}</p>
                        <p>resposta:{characters.species}</p>
                        <p>resposta:{characters.dateOfBirth}</p>
                        <p>resposta:{characters.gender}</p>
                        <p>resposta:{characters.patronus}</p>
                        <p>resposta:{characters.wand}</p>
                        <p>resposta:{characters.wand.wood}</p>
                        <p>resposta:{characters.wand.core}</p>
                        <p>resposta:{characters.wand.legend}</p>
                        <p>resposta:{characters.ancestry}</p>
                        <p>resposta:{characters.actor}</p>
                    </div>
                    
                )(
                    <div>
                        <button onClick={() => open(false)}>X</button>
                    </div>
                )}
            </div>


        </section >
    )
}