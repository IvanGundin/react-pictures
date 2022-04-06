//Способ решения №1:
//============================

// import './index.css';

// function App() {
//   const сontainer = document.getElementById('root');
//   fetch('https://jsonplaceholder.typicode.com/photos?_limit=30')
//     .then((response) => response.json())
//     .then((data) => {
//       const result = data.map(post => `<img src=${post.thumbnailUrl} class = 'pictureImg'>`);
//       сontainer.innerHTML += result.join(' ');
//     });
// };

// export default App



//Способ решения №2 (РАБОТА НАД ОШИБКАМИ):
//============================

import './style.css'
import { useEffect, useState } from 'react';

function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=30')
      .then(response => response.json())
      .then(setList);
  }, []);

  return (
  //<div style={{ padding: '10px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>   - вариант стилизации
    <div className={'cardList'}>
      {list.map(todo =>
     // <img style={{ padding: '5px' }} src={todo.thumbnailUrl} key={todo.id}></img>)}  - вариант стилизации
        <img className={'card'} src={todo.thumbnailUrl} key={todo.id}></img>)}
    </div>
  );
}
export default App;