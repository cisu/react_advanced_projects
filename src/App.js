import React from 'react';
import {useGlobalContext} from './context';

import SetupForm from './SetupForm';
import Loading from './Loading';
import Modal from './Modal';

function App() {
  const {
    waiting,
    loading,
    questions,
    index,
    correct,
    error,
    nextQuestion,
    checkAnswer,
  } = useGlobalContext();

  // if we are waiting display SetupForm component
  if (waiting) {
    return <SetupForm />;
  }

  // if we are loading display Loading component
  if (loading) {
    return <Loading />;
  }

  const {question, incorrect_answers, correct_answer} = questions[index];

  // const answers = [...incorrect_answers, correct_answer];

  let answers = [...incorrect_answers]

  // generate rambo numbers
  const tempIndex = Math.floor(Math.random() * 4)

  if(tempIndex === 3){
    answers.push(correct_answer)
  }else{
    // place the position of the random number to the ane of array
    answers.push(answers[tempIndex])
    // replace the moved position to the correct_answer
    answers[tempIndex] = correct_answer
  }

  // console.log(questions[1])

  return (
    <main>
      <Modal />

      <section className='quiz'>
        <p className='correct-answers'>
          correct answers : {correct}/{index}
        </p>

        <article className='container'>
          <h2 dangerouslySetInnerHTML={{__html: question}} />

          <div className='container'>
            {answers.map((answer, index) => {
              return (
                <button
                  key={index}
                  className='answer-btn'
                  onClick={() => checkAnswer(correct_answer === answer)}
                  dangerouslySetInnerHTML={{__html: answer}}
                />
              );
            })}
          </div>
        </article>

        <button className='next-question' onClick={nextQuestion}>
          next question
        </button>
      </section>
    </main>
  );
}

export default App;
