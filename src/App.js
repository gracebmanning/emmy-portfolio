import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/navigation';
import Home from './components/Home/home';
import Projects, { projectRoutes } from './components/Projects/projects';
import PageNotFound from './components/PageNotFound/pageNotFound';

function App() {
  return (
    <div className="App">
    <Navigation />
    <hr/>
      <Routes>
        <Route path="*" element={<PageNotFound/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        {projectRoutes}
      </Routes>
    </div>
  );
}

export default App;