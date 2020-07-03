import React from 'react'
import Button from './components/Button'

function App () {

  const clickHandler = () => {
    console.log('button clicked');
  }

  return (
    <div className='App'>
      <Button title="okay" onClick={clickHandler} />
      <Button title="selected" selected={true} onClick={clickHandler} />
      <Button title="disabled" disabled={true} onClick={clickHandler} />
      <Button title="isLarge" isLarge={true} onClick={clickHandler} />
    </div>
  )
}

export default App
