import {useState} from 'react'
import './App.css'
import StartScreen from './components/StartScreen.tsx'
import GameScreen from './components/GameScreen.tsx'

function App() {
    const [gameStarted, setGameStarted] = useState(false)

    const handleStartGame = () => {
        setGameStarted(true)
    }

    const handleEndGame = () => {
        setGameStarted(false)
    }

    return (
        <div className='app-container'>
            {!gameStarted ? (
                // Başlangıç ekranı
                <StartScreen onStart = {handleStartGame}/>
            ) : (
                // Oyun ekranı
                <GameScreen onEnd = {handleEndGame}/>
            )
            }
        </div>
    )
}

export default App
