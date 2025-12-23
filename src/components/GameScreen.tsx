import {useState} from "react";
import {questions, type ImageOption} from "../data/questions";

type GameScreenProps = {
    onEnd: (finalScore: number) => void;
}

const GameScreen = ({onEnd}: GameScreenProps) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [guessStatus, setGuessStatus] = useState<"idle" | "correct" | "wrong" | "lost">("idle");
    const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null);
    const [wrongGuessCount, setWrongGuessCount] = useState(0);
    const [wrongClickedIds, setWrongClickedIds] = useState<number[]>([]);

    const [score, setScore] = useState(0);

    const currentQuestion = questions[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === questions.length - 1;

    const handleNextQuestion = () => {
        if (isLastQuestion) {
            alert("Oyun Bitti! Tebrikler.");
            onEnd(score);
        } else {
            setCurrentQuestionIndex((prev) => prev + 1);
            setGuessStatus("idle");
            setSelectedOptionId(null);
            setWrongGuessCount(0);
            setWrongClickedIds([]);
        }
    };

    const handleImageClick = (option: ImageOption) => {
        if (guessStatus === 'correct' || guessStatus === 'lost' || wrongClickedIds.includes(option.id)) return;

        setSelectedOptionId(option.id);

        if (option.isAi) {
            setGuessStatus('correct');
            setScore((prevScore) => prevScore + 1);
        } else {
            const newWrongCount = wrongGuessCount + 1;
            setWrongGuessCount(newWrongCount);
            setWrongClickedIds((prev) => [...prev, option.id]);
            if (newWrongCount >= 2) {
                setGuessStatus('lost');
            } else {
                setGuessStatus('wrong');
            }
        }
    };

    return (
        <div className = "game-container">
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h2>Hangisi Yapay Zeka?</h2>
                <span style={{backgroundColor: '#646cff', padding: '5px 10px', borderRadius: '5px', color: 'white'}}>
                    Puan: {score}
                </span>
            </div>

            <div className = "images-wrapper">
                {currentQuestion.options.map((option) => {
                    const isAlreadyWrong = wrongClickedIds.includes(option.id);
                    const isSelected = selectedOptionId === option.id;
                    return (
                        <div
                            key={option.id}
                            onClick={() => handleImageClick(option)}
                            className="image-card"
                            style={{
                                border:
                                    ((guessStatus === "correct" || guessStatus === "lost") && option.isAi) ? "5px solid #4CAF50" :
                                        (isAlreadyWrong || (isSelected && guessStatus === "wrong")) ? "5px solid #F44336" :
                                            "4px solid transparent",
                                cursor: (isAlreadyWrong || guessStatus === "correct" || guessStatus === "lost") ? "default" : "pointer",
                                opacity: (isAlreadyWrong || (isSelected && guessStatus === "wrong")) ? 0.4 :
                                    ((guessStatus === "correct" || guessStatus === "lost") && !option.isAi ? 0.4 : 1),
                                pointerEvents: isAlreadyWrong ? 'none' : 'auto'
                            }}
                        >
                            {(guessStatus === "lost" || guessStatus === "correct") && option.isAi && (
                                <div style={{
                                    position: 'absolute', top: '10px', left: '10px',
                                    backgroundColor: 'rgba(76, 175, 80, 0.9)', color: 'white',
                                    padding: '5px', borderRadius: '5px', fontWeight: 'bold', zIndex: 10
                                }}>
                                    YAPAY ZEKA
                                </div>
                            )}
                            {(isAlreadyWrong || (isSelected && guessStatus === "wrong")) && (
                                <div style={{
                                    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                                    fontSize: '4rem', color: 'red', fontWeight: 'bold', textShadow: '0 0 5px black', zIndex: 20
                                }}>
                                    X
                                </div>
                            )}
                            <img
                                src={option.url}
                                alt="Tahmin Seçeneği"
                                style={{width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px"}}
                            />
                        </div>
                    );
                })}
            </div>

            <div className="feedback-area">

                {guessStatus === "wrong" && (
                    <div style={{ color: "orange" }}>
                        <h3>Dikkat! Yanlış Seçim.</h3>
                        <p>Son bir hakkın kaldı. <strong>İpucu:</strong> {currentQuestion.options.find(opt => opt.isAi)?.hint}</p>
                    </div>
                )}

                {guessStatus === "lost" && (
                    <div style={{ color: "red" }}>
                        <h3>Üzgünüm, Bilemedin!</h3>
                        <p>Doğru cevap işaretlendi.</p>
                        <button onClick={handleNextQuestion}>
                            {isLastQuestion ? "Sonuçları Gör" : "Sıradaki Soruya Geç"}
                        </button>
                    </div>
                )}

                {guessStatus === "correct" && (
                    <div style={{ color: "green" }}>
                        <h3>Tebrikler! Doğru Bildin.</h3>
                        <button onClick={handleNextQuestion}>
                            {isLastQuestion ? "Oyunu Bitir" : "Sonraki Tur"}
                        </button>
                    </div>
                )}
            </div>

            <button className="back-btn" onClick={() => onEnd(0)} style={{ marginTop: "20px", backgroundColor: "#555" }}>
                Ana Menüye Dön
            </button>
        </div>
    )
}
export default GameScreen;