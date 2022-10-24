import React from 'react'


export default function LogosMain({ Gryffindor, Slytherin, Hufflepuff, Ravenclaw }) {
    return (
        <section>
            <div className='containerL'>
                <div className='imgLogo1'></div>
                <p className='p1'>Personagens</p>
                <div className='imgLinha'></div>
            </div>


            {Gryffindor && (
                <div>
                    <p>{Gryffindor}</p>
                </div>

            )

            }
        </section >
    )
}