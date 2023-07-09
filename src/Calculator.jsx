/* CODEGYM Exercises */

// import React, { useState } from 'react';

// const Calculator = () => {
//     const [calculate, setCalculate] = useState({
//         firstNumber: 0,
//         secondNumber: 0,
//         result: '',
//     });

//     const handleFirstNumberChange = (e) => {
//         setCalculate({ 
//             ...calculate,
//             firstNumber: parseFloat(e.target.value),
//         });
//     };

//     const handleSecondNumberChange = (e) => {
//         setCalculate({
//             ...calculate,
//             secondNumber: parseFloat(e.target.value),
//         });
//     };

//     const handleClick = (e) => {
//         try {
//             const calculus = e.target.name;
//             let resultValue = 0;
//             console.log(calculate.firstNumber / calculate.secondNumber)
//             if (calculate.firstNumber === null || calculate.secondNumber === null) {
//                 alert('You must enter first and second numbers');
//             } else {
//                 switch (calculus) {
//                     case '+':
//                         resultValue = calculate.firstNumber + calculate.secondNumber;
//                         break;
//                     case '-' :
//                         resultValue = calculate.firstNumber - calculate.secondNumber;
//                         break;
//                     case '*':
//                         resultValue = calculate.firstNumber * calculate.secondNumber;
//                         break;
//                     case '/':
//                         if(calculate.secondNumber === 0) {
//                             alert('You must enter second number other than 0')
//                             resultValue = '';
//                         } else {
//                             resultValue = calculate.firstNumber / calculate.secondNumber;
//                         }
//                         break;
//                     default :
//                         resultValue = '';
//                 };
//             }
//             console.log(resultValue);
//             setCalculate({
//                 ...calculate,
//                 result: resultValue,
//             })
//         }
//         catch (err) {
//             setCalculate({
//                 ...calculate,
//                 result: 'Error',
//             });
//         };
        
//     }

//     return (
//         <div className='container'>
//             <form>
//                 <input type='number' className='input-value' onChange={handleFirstNumberChange} placeholder='First number' />
//                 <input type='number' className='input-value' onChange={handleSecondNumberChange} placeholder='Second number' />
//             </form>
//             <div className='result-container'>
//                 Result: {calculate.result}
//             </div>
//             <div className='button-container'>
//                 <input name='+' type='button' className='btn btn-add' onClick={handleClick} value={'+'} />
//                 <input name='-' type='button' className='btn btn-sub' onClick={handleClick} value={'−'} />
//                 <input name='*' type='button' className='btn btn-mul' onClick={handleClick} value={'×'} />
//                 <input name='/' type='button' className='btn btn-div' onClick={handleClick} value={'÷'} />
//             </div>
//         </div>
//     )
// }

// export default Calculator;

// =============================================================================

/* Extend the exercise */

import React, { useState } from 'react';
import './calculator.css';

const Calculator = () => {
    const [result, setResult] = useState('');

    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    };
    
    const clear = () => {
        setResult('');
    };
    
    const backspace = () => {
        setResult(result.slice(0, result.length - 1));
    };
    
    const calculate = () => {
        try {
            setResult(eval(result).toString());
        } catch (err) {
            setResult("ERROR");
        }
    }

    return (
        <div className='container'>
            <form>
                <input type='text' value = {result} />
            </form>

            <div className='keypad'>
                <button className="highlight" onClick={clear} id="clear">Clear</button>
                <button className="highlight" onClick={backspace} id="backspace">C</button>
                <button className="highlight" name="/" onClick={handleClick}>&divide;</button>
                <button name="7" onClick={handleClick}>7</button>
                <button name="8" onClick={handleClick}>8</button>
                <button name="9" onClick={handleClick}>9</button>
                <button className="highlight" name="*" onClick={handleClick}>&times;</button>
                <button name="4" onClick={handleClick}>4</button>
                <button name="5" onClick={handleClick}>5</button>
                <button name="6" onClick={handleClick}>6</button>
                <button className="highlight" name="-" onClick={handleClick}>&ndash;</button>
                <button name="1" onClick={handleClick}>1</button>
                <button name="2" onClick={handleClick}>2</button>
                <button name="3" onClick={handleClick}>3</button>
                <button className="highlight" name="+" onClick={handleClick}>+</button>
                <button name="0" onClick={handleClick}>0</button>
                <button name="." onClick={handleClick}>.</button>
                <button className="highlight" onClick={calculate} id="result">=</button>
            </div>
        </div>
    )
};

export default Calculator;