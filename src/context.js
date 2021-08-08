import axios from 'axios';
import React, {useState, useContext, useEffect} from 'react';

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

const API_ENDPOINT = 'https://opentdb.com/api.php?';

const url = '';

// data for development process
const tempUrl =
  'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [error, setError] = useState(false);
  const [quiz, setQuiz] = useState({
    amount: 10,
    category: 'sports',
    difficulty: 'easy'
  })

  const [isModalOpen, setIsModalOpen] = useState(false);

  // set up request from the server
  const fetchQuestions = async url => {
    setLoading(true);
    setWaiting(false);
    const responses = await axios(url).catch(err => console.log(err));

    // console.log(responses)
    if (responses) {
      const data = responses.data.results;

      if (data.length > 0) {
        // if they are return an array of questions, then set setQuestions with this array
        setQuestions(data);

        setLoading(false);
        setWaiting(false);
        setError(false);
      } else {
        setWaiting(true);
        setError(true);
      }
    } else {
      setWaiting(true);
    }
  };


  // next question
  const nextQuestion = () => {
    setIndex(oldIndex => {
      const index = oldIndex + 1;
      if (index > questions.length - 1) {
        
        // open the modal
        openModal()

        return 0;

      } else {
        return index;
      }
    });
  };


  // check in the answer is the right one or you skip the question
  const checkAnswer = value => {
    if(value){
      setCorrect((oldState) => oldState +1)
    }
    nextQuestion()
  }

  // open Modal
  const openModal = () => {
    setIsModalOpen(true);
  }

  // close Modal
  const closeModal = () => {
    setWaiting(true);
    setCorrect(0);
    setIsModalOpen(false);
  }


  // useEffect(() => {
  //   fetchQuestions(tempUrl);
  // }, []);

  const handleChange = (e) => {
    console.log(e)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <AppContext.Provider
      value={{
        waiting,
        loading,
        questions,
        index,
        correct,
        error,
        isModalOpen,
        nextQuestion,
        checkAnswer,
        closeModal,
        quiz,
        handleChange,
        handleSubmit
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export {AppContext, AppProvider};
