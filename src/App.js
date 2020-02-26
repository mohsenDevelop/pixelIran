import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import Lists from "./components/lists/Lists";
import styled from "styled-components";




function App() {
  return (
    <Provider store={store}>
      <Container>
        <Lists />
      </Container>

    </Provider>

  );
}

export default App;

const Container = styled('div')`
  width: 40%;
  margin: 50px auto;
 `
