type GameScreenProps = {
    onEnd: () => void;
}

const GameScreen = ({onEnd} : GameScreenProps) => {
    return (
        <div className="game-container">
            <h1>Oyun Başladı!</h1>
            <p>Burada görseller yer alacak.</p>
            <button onClick={onEnd}>
                Başa Dön
            </button>
        </div>
    )
}

export default GameScreen