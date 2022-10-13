import React from 'react'
import{ Container } from './styles';

export default function Header({ children }) {
    return (
        <Container>
            {children}
            {/* <section className={style.containerHeader}>
                <div className={style.header}>
                </div>
            </section> */}
        </Container>

    )
}