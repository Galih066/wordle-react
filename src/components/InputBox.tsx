import { maxLetter } from "../data/constant";
import "../App.css";

const InputBox = () => {
    return (
        <div className='answering-container'>
            {
                new Array(maxLetter).fill(0).map((_, index) => {
                    return <input className="box" type="text" maxLength={1} />
                })
            }
        </div>

    )
}

export default InputBox;