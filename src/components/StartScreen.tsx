export type GameMode = "classic" | "hardcore" | "time_attack";

type StartScreenProps = {
    onStart: (mode : GameMode) => void;
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
            <div style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "30px" }}>
                <button
                    onClick={() => onStart('classic')}
                    style={{ padding: '15px' }}
                >
                    <strong>Classic Mode</strong> <br/>
                    <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>2 Hak + İpuçları Açık</span>
                </button>
                <button
                    onClick={() => onStart('hardcore')}
                    style={{ padding: '15px', backgroundColor: '#D32F2F' }}
                >
                    <strong>Hardcore Mode</strong> <br/>
                    <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>Tek Hak + İpucu Yok</span>
                </button>
                <button
                    onClick={() => onStart('time_attack')}
                    style={{ padding: '15px', backgroundColor: '#F57C00' }}
                >
                    <strong>Time Attack Mode</strong> <br/>
                    <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>Süreye Karşı Yarış</span>
                </button>
            </div>
        </div>
    );
};

export default StartScreen;