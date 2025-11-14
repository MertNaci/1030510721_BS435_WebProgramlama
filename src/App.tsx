import {useState} from 'react'
import './App.css'

function App() {
    // oyun başladı mı bilgisini tutan state
    const [gameStarted, setGameStarted] = useState(false)

    return (
        <>
            {!gameStarted ? (
                // Başlangıç ekranı
                <div className="card">
                    <h1>AI Tahmin Oyunu</h1>
                    <p>
                        Üç görselden biri yapay zekâ tarafından üretilmiştir.<br/>
                        Diğer ikisi gerçektir.<br/>
                        Hangisinin yapay zekâ ürünü olduğunu bulabilir misin?
                    </p>
                    <button onClick={() => setGameStarted(true)}>
                        Başla
                    </button>
                    <p>{String(gameStarted)}</p>
                </div>
            ) : (
                // Oyun ekranı
                <div className="card">
                    <h1>Oyun Başladı!</h1>
                    <p>Burada görseller yer alacak.</p>
                    <button onClick={() => setGameStarted(false)}>Başa Dön</button>
                </div>
            )
            }
        </>
    )
}

export default App
