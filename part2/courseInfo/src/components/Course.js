import React from 'react'

const Course = ({ course }) => (
    <div>
        <Header title={course.name} />
        <Parts parts={course.parts} />
        <Total parts={course.parts} />
    </div>
  )
  
  const Header=({title })=>{
    return(
      <>
      <h3>{title}</h3>
      </>
    )
  }
  const Part=({ part })=>{
    return(
      <>
        <p>
        {part.name} {part.exercises}
        </p>
      </>
    )
  
  }
  
  const Parts = ({ parts }) => {
    return (
        <div>
            {parts.map(part => <Part key={part.id} part={part}/>)}
        </div>
    )
  }
  
  const Total = ({ parts }) => {
    const total = parts.reduce((value, part) => {
        return value + part.exercises
    }, 0)
  
    return (
        <h4>total of {total} exercises</h4>
    )
  }
  export default Course 