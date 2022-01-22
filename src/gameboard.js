import { useState } from 'react';
import LetterGrid from './lettergrid';
import ButtonGrid from './buttongrid';

export default function({secretWord, maxErrors}) {
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [errorCount, setErrorCount] = useState(0);

    const letterGuessedHandler = function(letter) {
        let val = letter.toLowerCase();

        if (secretWord.toLowerCase().indexOf(val) === -1) {
            setErrorCount(errorCount + 1);
        }

        setGuessedLetters(prev => [...prev, val]);
    }


    return (
    <div>
        <div>
            Mistakes left: {maxErrors - errorCount}
        </div>
        <LetterGrid 
            secretWord={secretWord}
            guessedLetters={guessedLetters} />

        <ButtonGrid 
            letterGuessed={letterGuessedHandler} 
            isShown = {errorCount < maxErrors}    
        />    
    </div>
    );
}