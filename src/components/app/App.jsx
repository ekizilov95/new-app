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
                { name: "John", salary: "1001", increase: false, rise: true, id: 1 },
                { name: "Anna", salary: "200", increase: false, rise: false, id: 2 },
                { name: "Alex", salary: "1100", increase: true, rise: false, id: 3 }
            ],
            term: '',
            filter: 'all'
        }

        this.maxId = 3;
    }

    onDelete = (i) => { 
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== i),
            }
        });
    }

    addEmployer = (el) => {
        if(el.name && el.salary) {
            this.setState(({data}) => {
                el.id = this.maxId++;
                return {
                    data: [...data, el],
                }
            });
        }
    }

    onToggleIncrease = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                } 

                return item;
            }),
        }));
    }

    onUpdateSearch = (value) => {
        this.setState((props) => ({
            ...props,
            term: value
        }))
    }

    onFilterUpdate = (type) => {
        this.setState(({prevState}) => ({ ...prevState, filter: type  }))
    }

    sortedAndFiltered = (items, filter, term) => {
       const filteredItems =  items.filter(item => item.name.includes(term) ? item : null)

        switch (filter) {
            case 'bigger':
                return filteredItems.filter(item => item.salary > 1000 ? item : null)
            case 'increase':
                return filteredItems.filter(item => item.rise ? item : null)
            default:
                return filteredItems;
        }
    }

    onChangeSalary = (id, value) => {
        console.log(value, id)
        this.setState(({data}) => ({
            data: data.map(item => item.id === id ? {...item, salary:  value } : item)
        }));
    }

    render() {
        const {data, term, filter} = this.state;
        const employees = data.length;
        const prizes = data.filter(item => item.increase === true ? item : null).length;
        const sortedAndFiltered = this.sortedAndFiltered(data, filter, term);

        return(
            <div className="container">
                <EmployeesInfo emlpoyees={employees} prizes={prizes}/>
                <div className="app-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <EmployeesFilter onFilterUpdate={this.onFilterUpdate}/>
                </div>
                <EmployeesList data={sortedAndFiltered} 
                    onDelete={(i) => this.onDelete(i)} 
                    onToggleIncrease={this.onToggleIncrease} 
                    onChangeSalary={this.onChangeSalary}
                />
                <EmployeesAddForm addEmployer={(data) => this.addEmployer(data)}/>
            </div>
        )
   }
}

export default App;