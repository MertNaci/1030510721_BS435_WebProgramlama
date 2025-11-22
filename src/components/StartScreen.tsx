type StartScreenProps = {
    onStart: () => void;
};

const StartScreen = ({onStart}:StartScreenProps) => {
    return (
        <div className="card">
            <h1>AI Tahmin Oyunu</h1>
            <p>
                Üç görselden biri yapay zekâ tarafından üretilmiştir.<br />
                Diğer ikisi gerçektir.<br />
                Hangisinin yapay zekâ ürünü olduğunu bulabilir misin?
            </p>
            <button onClick={onStart}>
                Başla
            </button>
        </div>
    );
};

export default StartScreen;