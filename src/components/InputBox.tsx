import React, { useRef } from "react";
import { maxLetter } from "../data/constant";
import "../App.css";

interface ChildProps {
    setLetter: React.Dispatch<React.SetStateAction<string[]>>
    letter: string[]
    result: string[]
}

const InputBox: React.FC<ChildProps> = ({ setLetter, result, letter }) => {
    const inputUser = useRef<(HTMLInputElement | null)[]>([]);

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = event.target;
        if (value && index < maxLetter - 1) {
            inputUser.current[index + 1]?.focus();
        }
        setLetter(prev => [...prev, value]);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (event.key === "Backspace") {
            inputUser.current[index - 1]?.focus();
        }
    };

    return (
        <div className='answering-container'>
            {
                new Array(maxLetter).fill(0).map((_, index) => {
                    return (
                        <input
                            key={index}
                            ref={(el) => { inputUser.current[index] = el }}
                            id={`inpt_${index}`}
                            className="box"
                            type="text"
                            maxLength={1}
                            onChange={event => handleChangeInput(event, index)}
                            onKeyDown={event => handleKeyDown(event, index)}
                        />
                    )
                })
            }
        </div>

    )
}

export default InputBox;