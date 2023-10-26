
import Main from "./components/main"
import './App.css';
import Student from "./components/StudentDetails/StudentMain"
import Faculty from "./components/FacultyDetails/FacultyMain"
import Alumni from "./components/AlumniDetails/AlumniMain"
import StudentMain from './components/StudentDetails/StudentMain';

function App() {
  return (
    <div className="App">
        {/* <Main/> */}
        {/* <Alumni/> */}
        <StudentMain/>
    </div>
  );
}

export default App;
