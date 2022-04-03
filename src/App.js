function App() {
  const сontainer = document.getElementById('root');
  fetch('https://jsonplaceholder.typicode.com/photos?_limit=30')
    .then((response) => response.json())
    .then((data) => {
      const result = data.map(post => `<img src=${post.thumbnailUrl} class='pictureImg'>`);
      сontainer.innerHTML += result.join(' ');
    });
};

export default App