import { Scene } from "./Scene";
import { ReactComponent as Wordmark } from "./wordmark.svg";
import "./App.css";

const App = () => {
  const Header = () => (
    <header className="header">
      <h1 className="logo" aria-label="Delicious Computer">
        <Wordmark />
      </h1>
    </header>
  );

  const About = () => (
    <div className="about">
      <p>
        A&nbsp;design&nbsp;and&nbsp;front-end&nbsp;web dev studio
        based&nbsp;in&nbsp;Brooklyn,&nbsp;NY&nbsp;·&nbsp;
        <a href="mailto:itsevadecker@gmail.com">Email</a>
      </p>
    </div>
  );

  return (
    <div className="app">
      <Scene />
      <main className="main">
        <Header />
        <About />
      </main>
    </div>
  );
};

export default App;
