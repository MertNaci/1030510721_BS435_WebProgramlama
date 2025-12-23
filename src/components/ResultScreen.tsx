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
        message = "Mükemmel! Bir Yapay Zeka Avcısısın! 🤖🚫";
        color = "green";
    } else if (successRate >= 50) {
        message = "Gayet İyi! Çoğunu bildin.";
        color = "#4A90E2";
    } else {
        message = "Biraz daha pratik yapmalısın.";
        color = "orange";
    }

    return (
        <div className="card">
            <h1>Oyun Bitti!</h1>
            <div style={{ margin: '20px 0', fontSize: '1.2rem' }}>
                <p>Toplam Skorun:</p>
                <h2 style={{ fontSize: '3rem', color: color, margin: '10px 0' }}>
                    {score} / {totalQuestions}
                </h2>
                <p style={{ fontWeight: 'bold', color: color }}>{message}</p>
            </div>
            <button onClick={onRestart}>
                Tekrar Oyna
            </button>
        </div>
    );
};

export default ResultScreen;