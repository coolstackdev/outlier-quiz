import React from 'react'
import styled from 'styled-components'
import Button from './components/Button'
import Topbar from './components/Topbar'
import QuestionHeader from './components/QuestionHeader'

const Wrapper = styled.div`
  width: 600px;
  margin: 100px auto;
  background: white;
  box-shadow: 3px 3px 3px 3px grey;
  height: 100%;
  background: white;
`

const Main = styled.div`
  padding: 30px;
`

function App () {

  const clickHandler = () => {
    console.log('button clicked');
  }

  return (
    <Wrapper className='App'>
      <Topbar percent="50" />
      <Main>
        <QuestionHeader />
        <Button title="okay" onClick={clickHandler} />
      </Main>
    </Wrapper>
  )
}

export default App
