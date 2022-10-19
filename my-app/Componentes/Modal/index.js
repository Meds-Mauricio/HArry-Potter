import React from 'react'
import style from "./styles.module.css"

export default function Modal() {
    const [resposta, setResposta] = useState();
    const [showOptions, setShowOptions] = useState(false);
    function personagem() {
        useEffect(() => {
            axios
                .get(
                    'https://hp-api.herokuapp.com/api/characters',
                )
                .then((response) => {
                    setResposta(response.data);
                });
        }, []);
         //   console.log(resposta, "teste");

    const handleClick = () => {
        window.location.href = "/Personagens";
};
    console.log(showOptions, "showOptions");
        return (
            <section>
                <div className={style.headerModal}>
          
                    return (
                    <>
                        <div className={showOptions ? "principal" : " "}>
                            {resposta && (
                                <>
                                    {Object.values(resposta).map((item) => {
                                        <p>{item.nome}</p>;
                                    })}
                                    <>
                                        <div className="imagem-botões">
                                            <img
                                                src="https://hp-api.herokuapp.com/api/characters"
                                                alt="logo"
                                            />
                                        </div>
                                    </>
                                </>
                            )}
                        </div>
                        {!showOptions ? (
                            <>
                                <div className="Botões">
                                    <button
                                        className="estilização-botãoclick"
                                        onClick={() => setShowOptions(!showOptions)}
                                    >
                                        Click Here
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="Botões">
                                    <form>
                                        <div>
                                            <input
                                                onClick={(e) => {
                                                    e.target.value;
                                                }}
                                            />
                                            <button
                                                div
                                                className="Enter"
                                                onClick={() => {
                                                    alert("E'esse o seu Personagem");
                                                }}
                                            >
                                                Enter
                                            </button>
                                        </div>
                                    </form>
                                    <div>
                                        <button div className="Harry-Potter" onClick={handleClick}>
                                            Personagens
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </>
                    );

                </div>
            </section>








        )
    }