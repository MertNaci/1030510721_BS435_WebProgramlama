import {useState, useEffect} from "react";
import {questions, type ImageOption} from "../data/questions";
import {type GameMode} from "./StartScreen";

type GameScreenProps = {
    onEnd: (finalScore: number) => void;
    mode: GameMode;
}

const GameScreen = ({onEnd, mode}: GameScreenProps) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [guessStatus, setGuessStatus] = useState<"idle" | "correct" | "wrong" | "lost">("idle");
    const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null);
    const [wrongGuessCount, setWrongGuessCount] = useState(0);
    const [wrongClickedIds, setWrongClickedIds] = useState<number[]>([]);
    const [score, setScore] = useState(0);

    const TIME_LIMIT = 15;
    const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);

    const currentQuestion = questions[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === questions.length - 1;

    const isHardcore = mode === "hardcore";
    const isTimeAttack = mode === "time_attack";

    useEffect(() => {
        if (!isTimeAttack || (guessStatus === 'correct' || guessStatus === 'lost')) return;

        if (timeLeft <= 0) {
            setGuessStatus('lost');
            return;
        }

        const timerId = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timerId);
    }, [isTimeAttack, timeLeft, guessStatus]);

    const handleNextQuestion = () => {
        if (isLastQuestion) {
            onEnd(score);
        } else {
            setCurrentQuestionIndex((prev) => prev + 1);
            setGuessStatus("idle");
            setSelectedOptionId(null);
            setWrongGuessCount(0);
            setWrongClickedIds([]);
            setTimeLeft(TIME_LIMIT);
        }
    };

    const handleImageClick = (option: ImageOption) => {
        if (guessStatus === 'correct' || guessStatus === 'lost' || wrongClickedIds.includes(option.id)) return;

        setSelectedOptionId(option.id);

        if (option.isAi) {
            setGuessStatus('correct');
            setScore((prevScore) => prevScore + 1);
        } else {
            if (isHardcore) {
                setGuessStatus('lost');
                setWrongClickedIds((prev) => [...prev, option.id]);
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
        }
    };

    return (
        <div className="game-container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <div style={{ textAlign: 'left' }}>
                    <h2 style={{ margin: 0 }}>AI Hunter</h2>
                    <span style={{
                        fontSize: '0.8rem',
                        fontWeight: 'bold',
                        color: isHardcore ? 'red' : (isTimeAttack ? '#F57C00' : '#555')
                    }}>
                        MODE: {isHardcore ? "HARDCORE" : (isTimeAttack ? "TIME ATTACK" : "CLASSIC")}
                    </span>
                </div>
                <span style={{ backgroundColor: '#646cff', padding: '5px 15px', borderRadius: '20px', color: 'white', fontWeight: 'bold' }}>
                    Score: {score}
                </span>
            </div>
            {isTimeAttack && (
                <div style={{ width: '100%', height: '10px', backgroundColor: '#ddd', borderRadius: '5px', marginBottom: '15px', overflow: 'hidden' }}>
                    <div style={{
                        width: `${(timeLeft / TIME_LIMIT) * 100}%`,
                        height: '100%',
                        backgroundColor: timeLeft < 5 ? 'red' : '#F57C00',
                        transition: 'width 1s linear'
                    }} />
                </div>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#666' }}>
                <p>Question: {currentQuestionIndex + 1} / {questions.length}</p>
                {isTimeAttack ? (
                    <p style={{ color: timeLeft < 5 ? 'red' : 'inherit', fontWeight: 'bold' }}>Time: {timeLeft}s</p>
                ) : (
                    !isHardcore && <p>Lives Left: {2 - wrongGuessCount}</p>
                )}
            </div>
            <div className="images-wrapper">
                {currentQuestion.options.map((option) => {
                    const isAlreadyWrong = wrongClickedIds.includes(option.id);
                    const isSelected = selectedOptionId === option.id;
                    const showX = (isAlreadyWrong || (isSelected && (guessStatus === "wrong" || guessStatus === "lost"))) && !option.isAi;

                    return (
                        <div
                            key={option.id}
                            onClick={() => handleImageClick(option)}
                            className="image-card"
                            style={{
                                border:
                                    ((guessStatus === "correct" || guessStatus === "lost") && option.isAi) ? "5px solid #4CAF50" :
                                        showX ? "5px solid #F44336" :
                                            "4px solid transparent",
                                cursor: (isAlreadyWrong || guessStatus === "correct" || guessStatus === "lost") ? "default" : "pointer",
                                opacity: showX ? 0.4 : ((guessStatus === "correct" || guessStatus === "lost") && !option.isAi ? 0.4 : 1),
                                pointerEvents: showX ? 'none' : 'auto'
                            }}
                        >
                            {(guessStatus === "lost" || guessStatus === "correct") && option.isAi && (
                                <div style={{
                                    position: 'absolute', top: '10px', left: '10px',
                                    backgroundColor: 'rgba(76, 175, 80, 0.9)', color: 'white',
                                    padding: '5px', borderRadius: '5px', fontWeight: 'bold', zIndex: 10
                                }}>
                                    AI GENERATED
                                </div>
                            )}
                            {showX && (
                                <div style={{
                                    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                                    fontSize: '4rem', color: 'red', fontWeight: 'bold', textShadow: '0 0 5px black', zIndex: 20
                                }}>
                                    X
                                </div>
                            )}
                            <img
                                src={option.url}
                                alt="Guess Option"
                                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
                            />
                        </div>
                    );
                })}
            </div>

            <div className="feedback-area">
                {guessStatus === "wrong" && (
                    <div style={{ color: "orange" }}>
                        <h3>Careful! Wrong Choice.</h3>
                        <p>Try again. <strong>Hint:</strong> {currentQuestion.options.find(opt => opt.isAi)?.hint}</p>
                    </div>
                )}
                {guessStatus === "lost" && (
                    <div style={{ color: "red" }}>
                        <h3>{timeLeft <= 0 && isTimeAttack ? "Time's Up!" : (isHardcore ? "Game Over!" : "Sorry, Wrong Guess!")}</h3>
                        <p>
                            {timeLeft <= 0 && isTimeAttack ? "You didn't answer in time." :
                                isHardcore ? "No mistakes allowed in Hardcore mode." : "The correct answer has been marked."}
                        </p>
                        <button onClick={handleNextQuestion}>
                            {isLastQuestion ? "See Results" : "Next Question"}
                        </button>
                    </div>
                )}
                {guessStatus === "correct" && (
                    <div style={{ color: "green" }}>
                        <h3>Congratulations! Correct.</h3>
                        <button onClick={handleNextQuestion}>
                            {isLastQuestion ? "Finish Game" : "Next Round"}
                        </button>
                    </div>
                )}
            </div>

            <button className="back-btn" onClick={() => onEnd(0)} style={{ marginTop: "20px", backgroundColor: "#555" }}>
                Return to Main Menu
            </button>
        </div>
    )
}
export default GameScreen;