import {useState} from 'react'
import './App.css'

function App() {
    // oyun başladı mı bilgisini tutan state
    const [gameStarted, setGameStarted] = useState(false)

    return (
        <>
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
        </>
    )
}

export default App
