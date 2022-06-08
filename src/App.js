import * as React from 'react';

const title = 'React';

const welcome = {
  title: 'React',
  greeting: 'Hey',
};

const myElement = (
  <h1>
    {welcome.greeting} {getTitle('title')} user!
  </h1>
);

const jsElement = React.createElement('h1', null, `Hello ${title}`);

function getTitle(title) {
  return welcome.title;
}

function App() {
  return (
    <div>
      {myElement}
      ------
      {jsElement}
      <label htmlFor='Search'>Search: </label>
      <input type='search' id='search'></input>
    </div>
  );
}

export default App;
