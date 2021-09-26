import { useEffect, useState } from 'react';
import './App.css';
import SideNav from './component/SideBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import styled from 'styled-components';
import { TNavList } from './component/SideBar/types';
import Notes from './component/Notes';
import GlobalStyle from './Global/globalStyle.style';

const StyledApp = styled.div`
  display: flex;
  margin:0;
  padding:0;
  width: 100vw;
  height:100vh;
  background-color: grey;
  overflow-y: auto;
`

function App() {

  const [listNotes, setListNotes] = useState<[TNavList]>()

  useEffect(()=>{
    fetch('http://localhost:4000/notes')
      .then(response => response.json())
      .then(data => setListNotes(data))
  },[])

  console.log(listNotes)
  return (
    <StyledApp>
      <GlobalStyle/>
      <Router>
        <SideNav list={listNotes}/>
        <Switch>
          <Route path="/notes" component={Notes} />
        </Switch>
      </Router>
    </StyledApp>
  );
}

export default App;
