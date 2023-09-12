import logo from './logo.svg';
import './App.css';
import React from 'react';

const ArticleCard = ({ title, author, date, content }) => {
  return (
    <div className="article-card">
      <div className="element">   </div>
      <h2>{title}</h2>
      <p>By {author} on {date}</p>
      <p>{content}</p>
    </div>
  );
};

// export default ArticleCard;
const App = () => {
  const articles = [
    {
      title: 'How to do flutter clean in one command for all projects',
      author: 'ahmadalfrehan',
      date: 'September 12, 2023',
      content: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
    },
    
    {
      title: 'How to do flutter clean in one command for all projects',
      author: 'ahmadalfrehan',
      date: 'September 12, 2023',
      content: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
    },
    
    {
      title: 'How to do flutter clean in one command for all projects',
      author: 'ahmadalfrehan',
      date: 'September 12, 2023',
      content: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
    },
    
    {
      title: 'How to do flutter clean in one command for all projects',
      author: 'ahmadalfrehan',
      date: 'September 12, 2023',
      content: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
    },
    
    {
      title: 'How to do flutter clean in one command for all projects',
      author: 'ahmadalfrehan',
      date: 'September 12, 2023',
      content: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
    },
    
    {
      title: 'How to do flutter clean in one command for all projects',
      author: 'ahmadalfrehan',
      date: 'September 12, 2023',
      content: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
    },

    // Add more articles here
  ];

  return (
    <div>
      {articles.map((article, index) => (
        <ArticleCard
          key={index}
          title={article.title}
          author={article.author}
          date={article.date}
          content={article.content}
        />
      ))}
    </div>
  );
};

// function App() {

//   return (
//     <div
//       className='App-Name'
//       // style={{
//       //   backgroundImage: "url(/bach.png)",
//       //   backgroundPosition: 'center',
//       //   backgroundSize: 'cover',
//       //   backgroundRepeat: 'no-repeat',
//       // }}
//       >
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Welcome to my Articles Section
//         </p>
//         <p>
//           COMING SOON
//         </p>
//         <a
//           className="App-link"
//           href="https://ahmadalfrehan.com"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Home Screen
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
