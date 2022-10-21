import React, { useState } from 'react'

const setOpenModal = true

export default function Modal({ image, name, house, species, dateOfBirth, gender, patronus, wand, ancestry, actor, setOpenModal = { setOpenModal } }) {
    return (
        <section>
            <div>
                {image &&
                    <div>
                        <img src={image} />
                    </div>
                }
                {name && (
                    <div>
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
                    </div>
                )(
                    <div>
                        <button onClick={() => setOpenModal(false)}>X</button>
                    </div>
                )}
            </div>


        </section >
    )
}