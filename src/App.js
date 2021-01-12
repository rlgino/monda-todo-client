import {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import Item from './components/item';

function App() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState("")
  const [userID, setUserID] = useState("rlgino")

  useEffect(() => {
    fetch(`http://localhost:8080/task?owner_id=${userID}`)
    .then(response => response.json())
    .then(data => {
      let localTasks = []
      data.forEach(element => {
        localTasks.push(element)
      });
      setTasks(localTasks)
      setNewTask("")
    });
    return () => {}
  }, [])

  useEffect(() => {
    console.log(tasks.length);
    return () => {    }
  }, [tasks])

  const add = (task) => {
    if (task === "") {
      console.error("Task shouldn't be empty")
      return
    }
    let localTasks = tasks
    localTasks.push(task)
    setTasks(localTasks)
    setNewTask("")
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <code>TODO List: 🤖 </code>
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <input type="text" value={newTask} onChange={e => setNewTask(e.target.value)} />
          <input type="button" value="Add" onClick={e => add(newTask)}/>
        </p>
      </header>
      <div>
        <ul>
          {
            tasks.map(task => {
              return (<Item task={task} />)
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
