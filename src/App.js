import React from 'react'
import Quiz from './containers/Quiz'
import data from './questions.json'

function App () {
  return (
    <Quiz data={data} />
  )
}

export default App
