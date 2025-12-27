import { useState } from 'react'
import './App.css'
import StartScreen , {type GameMode} from './components/StartScreen.tsx'
import GameScreen from './components/GameScreen.tsx'
import ResultScreen from './components/ResultScreen.tsx'
import { questions } from './data/questions.ts'

type GameState = 'start' | 'game' | 'result';

function App() {
    const [gameState, setGameState] = useState<GameState>('start');
    const [finalScore, setFinalScore] = useState(0);
    const [selectedMode, setSelectedMode] = useState<GameMode>("classic");

    const handleStartGame = (mode:GameMode) => {
        setSelectedMode(mode);
        setGameState('game');
        setFinalScore(0);
    }
    const handleEndGame = (score: number) => {
        setFinalScore(score);
        setGameState('result');
    }
    const handleRestart = () => {
        setGameState('start');
    }

    return (
        <div className='app-container'>
            {gameState === 'start' && (
                <StartScreen onStart={handleStartGame} />
            )}

            {gameState === 'game' && (
                <GameScreen onEnd={handleEndGame} mode={selectedMode} />
            )}

            {gameState === 'result' && (
                <ResultScreen
                    score={finalScore}
                    totalQuestions={questions.length}
                    onRestart={handleRestart}
                />
            )}
        </div>
    )
}

export default App