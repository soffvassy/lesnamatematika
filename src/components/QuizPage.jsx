import { useState, useEffect } from 'react'
import React from 'react'
import questiondata from '../quizzes/random-easy.json';


function QuizPage() {
  const [data, setData] = useState([]);
  const [question, setQuestion] = useState('');

  useEffect(()=> {
    setData(questiondata);
  }, []);

  
  const getRandomQ = () => {
    setQuestion(data[Math.floor(Math.random() * data.length)]);

  }

  const handleAnswer = (key, correctAnswer) => {
        if (key.toLowerCase()==correctAnswer.toLowerCase()) {
          setQuestion({...question, answered:"correct"});
        }
        else {
          setQuestion({...question, answered:"tryagain"});
        }
  }


  return (
    <>
      
      <Question answered={question.answered} id={question.index} questionText={question.question} handleAnswer={handleAnswer} correctAnswer={question.correctAnswer} answers={question.answers} />
      <button onClick={getRandomQ}> Следващ въпрос </button>
    </>
  )
}

export default QuizPage

