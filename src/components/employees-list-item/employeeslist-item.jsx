import { Component } from 'react';
import './employeeslist-item.css';

export default class EmployeeslistItem extends Component {
    constructor(props) {
       super(props);
       this.state = {
        isIncrease: true,
        isRaise: false,
       }
    }

    increase = () => {   
        this.setState(({isIncrease}) => ({isIncrease: !isIncrease}));
    }

    raise =() => {
        this.setState(({isRaise}) => ({isRaise: !isRaise}));
    }

    render() {
        const {name, salary} = this.props;
        let classNames = 'list-group-item d-flex justify-content-between';

        if(!this.state.isIncrease) {
            classNames += ' increase';
        }

        if(this.state.isRaise) {
            classNames += ' like';
        }

        return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={this.raise}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm" onClick={this.increase} >
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                            className="btn-trash btn-sm">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}
