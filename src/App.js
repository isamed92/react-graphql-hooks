import React from 'react';
import './App.css';

import ApolloClient from 'apollo-boost';
import {ApolloProvider } from '@apollo/react-hooks';
import { PokemonsContainer } from './containers/PokemonContainer';

function App() {
  const client = new ApolloClient({
    uri:  'https://graphql-pokemon.now.sh/'
  });

  return (
    <ApolloProvider client={client}>
      <main>
        <PokemonsContainer/>
      </main>
    </ApolloProvider>
    );
}

export default App;