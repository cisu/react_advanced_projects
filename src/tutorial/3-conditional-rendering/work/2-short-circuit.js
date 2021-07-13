import React, {useState} from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');

  const [isError, setIsError] = useState(false);

  // for the or || if is falsie meaning force, and of course it is false because it is aan empty string then we essentially return the second value.
  // if we pass a value in useState('k') then the show the first value in this case letter k.
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';
  console.log(secondValue);

  return (
    <>
      {/* this is not allowed */}
      {/* {if(){console.log('hello world')}} */}

      {/* <h1>{firstValue}</h1>
  <h1>value: {secondValue}</h1> */}

      <h1>{text || 'john doe'}</h1>

      {text && <h1>Hello world</h1>}
      {/* check for the opposite value */}
      {/* {!text && <h1>Hello world</h1>} */}

      <button className='btn' onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? <h1>Error...</h1> : <h1>ok</h1>}
    </>
  );
};

export default ShortCircuit;
