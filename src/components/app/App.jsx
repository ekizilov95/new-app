import {Component} from 'react';
import EmployeesInfo from '../employees-info/employees-info';
import SearchPanel from '../search-panel/search-panel';
import EmployeesFilter from '../employees-filter/employees-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './App.css';

class App extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: "John", salary: "600", cookies: false, id: 1 },
                { name: "Anna", salary: "800", cookies: false, id: 2 },
                { name: "Alex", salary: "1000", cookies: true, id: 3 }
            ]
        }
    }

    onDelete = (i) => { 
        this.setState(({data}) => {
           return {
            data: data.filter(item => item.id !== i)
           }
        });
    }

    addEmployer = (el) => {
        this.setState(({data}) => {
            return {
                data: [...data, el]
            }
        });
    }
    
   render() {
        const {data} = this.state;

        return(
            <div className="container">
                <EmployeesInfo/>
                <div className="app-panel">
                    <SearchPanel/>
                    <EmployeesFilter/>
                </div>
                <EmployeesList data={data} onDelete={(i) => this.onDelete(i)}/>

                <EmployeesAddForm addEmployer={(data) => this.addEmployer(data)}/>
            </div>
        )
   }
}

export default App;