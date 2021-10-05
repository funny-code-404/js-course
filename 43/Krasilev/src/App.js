import React from 'react';
import CommentsList from './components/CommentsList';
import DataList from './components/DataList';
import Preloader from './components/Preloader/Preloader';

function App() {
  return (
    <>
      <Preloader />
      <DataList
        title="DATALIST"
        path="https://my-json-server.typicode.com/typicode/demo/posts"
      />
      <CommentsList title="COMMENTLIST" url="https://my-json-server.typicode.com/typicode/demo/comments" />
    </>
  );
}

export default App;
