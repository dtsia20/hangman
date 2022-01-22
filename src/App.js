import GameBoard from './gameboard'
import './app.css';

export default function App() {
    return (
    <div className="gameboard-cont">
        <h1>Welcome to Hangman</h1>
        <h3>Do you want to play a game?</h3>

        <div >
            <GameBoard 
                secretWord="Hangman" 
                maxErrors ={7}
            />
        </div>
    </div>
    );
}