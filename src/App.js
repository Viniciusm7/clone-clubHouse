// import logo from './logo.svg';
// import './App.css';
import { ProjectItem} from './components/index';
import {Footer} from './components/footer';
import {Main} from './components/main'

function App() {
  return (
    <div className="bg-yellow-100">
      <ProjectItem />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
