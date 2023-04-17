import React, { useState } from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import './styles/App.css';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';

function App() {
  //const [value, setValue] = useState('Текст в инпуте');

  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'JavaScript', body: 'Description' },
    { id: 3, title: 'JavaScript', body: 'Description' },
    { id: 4, title: 'JavaScript', body: 'Description' },
    { id: 5, title: 'JavaScript', body: 'Description' },
  ]);

  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Название поста" />
        <input type="text" placeholder="Описание поста" />
        <MyButton>Создать пост</MyButton>
      </form>
      {/* <ClassCounter /> */}
      {/* <h1>{value}</h1>
      <input type="text" value={value} onChange={event => setValue(event.target.value)} /> */}
      <PostList posts={posts} title="Посты про JS" />
    </div>
  );
}

export default App;
