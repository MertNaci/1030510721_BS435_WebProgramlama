import {useState} from "react";
import {questions, type ImageOption} from "../data/questions";

type GameScreenProps = {
    onEnd: () => void;
}

const GameScreen = ({onEnd}: GameScreenProps) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [guessStatus, setGuessStatus] = useState<"idle" | "correct" | "wrong">("idle");
    const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null);
    const currentQuestion = questions[currentQuestionIndex];

    const handleImageClick = (option: ImageOption) => {
        if (guessStatus !== 'idle') return;

        setSelectedOptionId(option.id);

        if (option.isAi) {
            setGuessStatus('correct');
        } else {
            setGuessStatus('wrong');
        }
    };

    return (
        <div className = "game-container">
            <h2>Hangisi Yapay Zeka?</h2>
            <p>Aşağıdaki 3 görselden birini seç:</p>

            <div className = "images-wrapper">
                {currentQuestion.options.map((option) => (
                    <div
                        key = {option.id}
                        onClick = {() => handleImageClick(option)}
                        className = "image-card"
                        style = {{
                            border: selectedOptionId === option.id
                                ? (guessStatus === "correct" ? "4px solid green" : "4px solid red")
                                : "4px solid transparent",
                            cursor: guessStatus === "idle" ? "pointer" : "default"
                        }}
                    >
                        <img
                            src = {option.url}
                            alt = "Tahmin Seçeneği"
                            style = {{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
                        />
                    </div>
                ))}
            </div>

            {guessStatus === "wrong" && (
                <div style = {{ marginTop: "20px", color: "red" }}>
                    <h3>Yanlış Cevap!</h3>
                    <p><strong>İpucu:</strong> {currentQuestion.options.find(opt => opt.isAi)?.hint}</p>
                </div>
            )}

            {guessStatus === "correct" && (
                <div style = {{ marginTop: "20px", color: "green" }}>
                    <h3>Tebrikler! Doğru Bildin.</h3>
                    <button onClick = {() => alert("Sonraki seviye kodunu henüz yazmadık :)")}>
                        Sonraki Tur
                    </button>
                </div>
            )}

            <button className = "back-btn" onClick={onEnd} style={{marginTop: "20px"}}>
                Oyunu Bitir
            </button>
        </div>
    )
}

export default GameScreen;