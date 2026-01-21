export type GameMode = "classic" | "hardcore" | "time_attack";

type StartScreenProps = {
    onStart: (mode : GameMode) => void;
};

const StartScreen = ({onStart}:StartScreenProps) => {
    return (
        <div className="card">
            <h1>AI Image Guesser</h1>
            <p>
                One of the three images is AI-generated.<br />
                The other two are real.<br />
                Can you spot which one is AI?
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "30px" }}>
                <button
                    onClick={() => onStart('classic')}
                    style={{ padding: '15px' }}
                >
                    <strong>Classic Mode</strong> <br/>
                    <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>2 Lives + Hints Enabled</span>
                </button>
                <button
                    onClick={() => onStart('hardcore')}
                    style={{ padding: '15px', backgroundColor: '#D32F2F' }}
                >
                    <strong>Hardcore Mode</strong> <br/>
                    <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>1 Life + No Hints</span>
                </button>
                <button
                    onClick={() => onStart('time_attack')}
                    style={{ padding: '15px', backgroundColor: '#F57C00' }}
                >
                    <strong>Time Attack Mode</strong> <br/>
                    <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>Race Against Time</span>
                </button>
            </div>
        </div>
    );
};

export default StartScreen;