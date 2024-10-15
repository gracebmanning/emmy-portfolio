import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/navigation';
import Home from './components/Home/home';
import Projects, { projectRoutes } from './components/Projects/projects';
import PageNotFound from './components/PageNotFound/pageNotFound';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="*" element={<PageNotFound/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        {projectRoutes}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;