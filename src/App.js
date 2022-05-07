import './App.css';
import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
import NavigateToFormButton from './components/NavigateToFormButton'
import Employees from './components/Employees';
import Form from './components/Form';
import EmployeePage from './components/EmployeePage';
import Footer from './components/Footer';
import About from './components/About';

const App = ()=> {
  const [employees, setData] = useState([]);
  useEffect(()=>{
    const getData = async ()=>{
      const dataFromServer = await fetchData();
      setData(dataFromServer);
    };

    getData();
  }, []);

  // fetch data from backend
  const fetchData = async ()=>{
    const res = await fetch('http://127.0.0.1:8000/api/employee');
    const data = await res.json();

    return data;
  };

  // Add Employee Data
  // const AddEmployeeData = async (emp)=>{
  //   const res = await fetch('http://127.0.0.1:8000/api/employee',
  //   {
  //     method: 'POST',
  //     headers: {'Content-type':'application/json'},
  //     body: JSON.stringify(emp),
  //   });
  //   const fetchId = await res.json();
  //   emp.id = fetchId.data.id
  //   // console.log(emp);
  //   setData([...employees, emp]);
  // };

  // delete Employee data
  const deleteEmployee = async (id)=>{
    await fetch(`http://127.0.0.1:8000/api/employee/${id}`, 
    {
      method: 'DELETE',
    });
    setData(employees.filter((emp)=> emp.id !== id));
  }
  
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header text={'Employee Database'}></Header>
          <Route path="/" exact render={(props)=>(
            <>
              {employees.length ? <Employees employees={employees} onDelete={deleteEmployee}/> : <h1 className="nothing">No Data Found</h1>}
            </>
          )}></Route>
          <Route path="/employee/add" exact component={Form}></Route>
          <Route path="/employee/:id" exact component={EmployeePage}></Route>
          <Route path="/about" exact component={About}></Route>
          <Footer></Footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
