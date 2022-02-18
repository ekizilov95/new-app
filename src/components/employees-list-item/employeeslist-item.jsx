import './employeeslist-item.css';

const EmployeeslistItem = ({name, salary, onDelete, onToggleIncrease, onChangeSalary, increase, rise}) => {
    let classNames = 'list-group-item d-flex justify-content-between';

    if(increase) {
        classNames += ' increase';
    }

    if(rise) {
        classNames += ' like';
    }

    return (
        <li className={classNames}>
            <span className="list-group-item-label" data-type='rise' onClick={onToggleIncrease}>{name}</span>
            <input type="text" className="list-group-item-input" onChange={onChangeSalary} defaultValue={salary}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm" data-type='increase' onClick={onToggleIncrease} >
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeeslistItem;
