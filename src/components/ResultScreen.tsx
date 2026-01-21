type ResultScreenProps = {
    score: number;
    totalQuestions: number;
    onRestart: () => void;
};

const ResultScreen = ({ score, totalQuestions, onRestart }: ResultScreenProps) => {
    const successRate = (score / totalQuestions) * 100;

    let message = "";
    let color = "";

    if (successRate === 100) {
        message = "Perfect! You are an AI Hunter! 🤖🚫";
        color = "green";
    } else if (successRate >= 50) {
        message = "Good Job! You got most of them right.";
        color = "#4A90E2";
    } else {
        message = "You need a bit more practice.";
        color = "orange";
    }

    return (
        <div className="card">
            <h1>Game Over!</h1>
            <div style={{ margin: '20px 0', fontSize: '1.2rem' }}>
                <p>Your Score:</p>
                <h2 style={{ fontSize: '3rem', color: color, margin: '10px 0' }}>
                    {score} / {totalQuestions}
                </h2>
                <p style={{ fontWeight: 'bold', color: color }}>{message}</p>
            </div>
            <button onClick={onRestart}>
                Play Again
            </button>
        </div>
    );
};

export default ResultScreen;