import { useEffect, useState } from 'react';
import './App.css';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options'
import Notification from './components/Notification/Notification';

const initialFeedback = {
  good: 0,
neutral: 0,
bad: 0
}


const App = () => {
  const [feedback, setFeedback] = useState(()=> JSON.parse(localStorage.getItem('feedback')) ?? initialFeedback)
useEffect(() => {
localStorage.setItem('feedback', JSON.stringify(feedback))
}, [feedback])


  const {good, neutral, bad} = feedback
  
  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({    ...feedback,
      [feedbackType]: prevFeedback[feedbackType]+1}))

  }

const resetFeedback = () => {
  setFeedback(initialFeedback)
}

const totalFeedback = good + neutral + bad
const positiveFeedback = totalFeedback !== 0 ? Math.round((good / totalFeedback) * 100) : null



console.log(totalFeedback, 'totalFeedback');
  
  return (
    <>
    <Description />
    <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback} feedback={Object.keys(feedback)}/>
    {totalFeedback>0 ? <Feedback feedback={feedback} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback}/>
: <Notification/>}
    </>
   
  )
}

export default App