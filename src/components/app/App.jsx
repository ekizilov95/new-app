import EmployeesInfo from '../employees-info/employees-info';
import SearchPanel from '../search-panel/search-panel';
import EmployeesFilter from '../employees-filter/employees-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './App.css';

function App () {

    const employees = [
        { name: "John", salary: "600", cookies: false, id: 1 },
        { name: "Anna", salary: "800", cookies: false, id: 2 },
        { name: "Anna", salary: "800", cookies: false, id: 2 },
        { name: "Alex", salary: "1000", cookies: true, id: 3 }
    ]
    
    const onDelete = (id) => {
        console.log(employees);
        
    }

   return (
       <div className="container">
           <EmployeesInfo/>
           <div className="app-panel">
                <SearchPanel/>
                <EmployeesFilter/>
           </div>
           <EmployeesList employees={employees} deleteItem={(i) => onDelete(i)} />
           <EmployeesAddForm/>
       </div>
   ) 
}

export default App;