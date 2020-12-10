import React, { Suspense } from "react";
import { createClient, Provider, useQuery } from 'urql';

const client = createClient({
  url: 'https://countries.trevorblades.com/',
  suspense: true,
});

export default function App() {
  return (
    <Provider value={client}>
      <div className="App">
        <h1>Urql Suspense demo</h1>
        <Suspense fallback={<p>Loading...</p>}>
          <SuspenseLoading />
        </Suspense>
      </div>
    </Provider>
  );
  
}

const UrqlQuery = `
query {
  country(code:"NL") {
    name
    emoji
  }
}
`;

function SuspenseLoading() {
  const [result, ] = useQuery({ query: UrqlQuery });
  return (
    <div>
      <h2>The flag of {result.data.country.name}</h2>
      <p>{result.data.country.emoji}</p>
    </div>
  )
}
