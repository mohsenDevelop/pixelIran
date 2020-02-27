import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import Persistor from './redux/store/store';
import Lists from "./components/Lists";
import styled from "styled-components";

export let { store, persistor } = Persistor();



function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

        <Container>
          <Lists />
        </Container>

      </PersistGate>

    </Provider>

  );
}

export default App;

const Container = styled('div')`
  width: 40%;
  margin: 50px auto;
 `
