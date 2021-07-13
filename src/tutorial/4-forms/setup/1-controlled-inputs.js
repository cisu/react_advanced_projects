import React, {useState} from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(firstName, email);

    if (firstName && email) {
      // console.log('submit the form')
      const person = {id: new Date().getTime().toString(), firstName, email};
      setPeople(people => {
        return [...people, person];
      });
      setFirstName('');
      setEmail('');
      console.log(person);
    } else {
      console.log('empty values');
    }
  };

  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          
        <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* better to submit the form onSUbmit because check the email form html */}
          {/* <button type='submit' onClick={handleSubmit}>
            add person
          </button> */}

          <button type='submit'>add person</button>

        </form>

        {people.map((person, index) => {
          const {id, firstName, email} = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
