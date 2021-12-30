import { Component } from 'react';
import './employees-add-form.css';

export default class EmployeesAddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            salary: 0
        }
    }

    onValueChange(target) {
        this.setState({[target.name]: target.value });
    }

    render() {
        return (
            <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Как его зовут?"
                    name="name"
                    onChange={({target}) => this.onValueChange(target)}
                />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $?" 
                    name="salary"
                    onChange={({target}) => this.onValueChange(target)}
                />
                <button type="submit"
                    className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
        )
    }
}
