import {useState} from "react";
import {questions} from "../data/questions.ts";

type GameScreenProps = {
    onEnd: () => void;
}

const GameScreen = ({onEnd} : GameScreenProps) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const currentQuestion = questions[currentQuestionIndex];
    return (
        <div className="game-container">
            <h2>Hangisi Yapay Zekâ?</h2>
            <p>Aşağıdaki 3 görselden birini seç:</p>
            <div className="images-wrapper">
                {currentQuestion.options.map((option) => (
                    <div key={option.id} className="image-card">
                        <img
                            src={option.url}
                            alt="Tahmin Seçeneği"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                        />
                    </div>
                ))}
            </div>
            <button onClick={onEnd}>
                Başa Dön
            </button>
        </div>
    )
}

export default GameScreen