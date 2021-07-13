import React, {useState} from 'react';

const ErrorExample = () => {
  let title = 'random title';

  // const [changeTitle, setChangeTitle] = useState();

  function handleClick() {
    title = 'hello people'
    console.log(title)
  }

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
