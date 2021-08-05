import React from 'react'
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import Headers from './components/header/index'
import Home from './components/home/index'
import Footer from './components/footer/Footer'
import Contato from './components/contato/Contato'
import Form from './components/form/Form'
import {client} from './config/client-graphql'
import {ApolloProvider} from '@apollo/client'


import './index.css'


const App= ()=> {

  return(
    
    <ApolloProvider client={client}>
    <BrowserRouter>
      
      <Headers />
      <Switch>
      
        <Route path='/' component={Home}  exact />
        <Route path='/Contato' component={Contato}  />
        <Route path='/Compre' component={Form}  />
      </Switch>
           
      <Footer />
    </BrowserRouter>
    </ApolloProvider>
    
  );
  
}
  
    export default App;
