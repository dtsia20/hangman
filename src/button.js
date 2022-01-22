import {useState} from "react";


export default function ({value, onClick}) {
    const [isClicked, setIsClicked] = useState(false);
    let className = 'button-box';
   
    if (isClicked) {
        className += ' clicked'
    }
   
    function clickHandler() {
        setIsClicked(true);
        onClick(value);
    }
 
    return (
        <button 
            className={className} 
            onClick={clickHandler}
        >
                {value}
        </button>
    );
}