import React from 'react'
import { useState } from 'react'

export default function QueryString() {
    
    const [characters, setCharacters] = useState('selecione')
        return (
            <section>
                <select onChange={(e) => setCharacters(e.target.value)}>
                    <option value="Griffinor">Grifinória</option>
                    <option value="Slytherin">Sonserina</option>
                    <option value="Hufflepuff">Lufa-Lufa</option>
                    <option value="Ravenclaw">Corvinal</option>
                </select>
                    <button onClick={(personagensCasa) => window.location.href = `/${characters}&house=${house}`}>Filtrar</button>
            </section>
        )
    }