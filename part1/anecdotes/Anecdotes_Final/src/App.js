import { useState } from 'react'
const Button = ({text, handleClick}) => {
  return (
    <button onClick={handleClick}>
    {text}
  </button>
  )
}


const MostVotes = ({anecdotes, votes }) => {

  if(Math.max(...votes)>0){
    return (
      <div>
      
        <p>{anecdotes[votes.indexOf(Math.max(...votes))]}</p>
        <p>has {votes[votes.indexOf(Math.max(...votes))]} votes.</p>
    </div>
    )
  }

  return (
    <div>
      <p>No anecdote has been voted.</p>
  </div>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  let n = anecdotes.length;
  const [votes, setVotes] = useState(new Array(n).fill(0))
  
  const random = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length)); 
  }
  const increaseVote=(selected)=>{
    const copy=[...votes]
    copy[selected]+=1
    setVotes(copy)
  }
  
  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes.</p>
      <Button handleClick={() => increaseVote(selected)} text="Vote"/>
      <Button handleClick={random} text="Next anecdote"/>
      <h2>Anecdote with most votes</h2>
      <MostVotes anecdotes={anecdotes} votes={votes}/>
    </div>
  )
}

export default App;