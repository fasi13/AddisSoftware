import React, { useEffect } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { Container } from 'reactstrap';
import store from './flux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeModal from './components/EmployeeModal';
import EmployeeList from './components/EmployeeList';
import styled from 'styled-components'

const App = () => {
  const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  `;
  const Wrapper = styled.section`
      padding: 4em;
      `;
  return (

    <Provider store={store}>
      <div>
        <Container>
          <Wrapper>
            <Title>
              ADDIS SOFTWARE TEST PROJECT
            </Title>
          </Wrapper>
          <EmployeeModal />
          <EmployeeList />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
