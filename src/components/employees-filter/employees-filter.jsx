import './employees-filter.css';

export default function EmployeesFilter({onFilterUpdate}) {
    return (
        <div className="btn-group btn-group-toggle" data-toggle="buttons" onClick={({target}) => target.getAttribute('data-filter') ? onFilterUpdate(target.getAttribute('data-filter')) : null}>
           <button className="btn btn-light" data-filter='all'>Все сотрудники</button>
           <button className="btn btn-light" data-filter='increase'>На повышение</button>
           <button className="btn btn-light" data-filter='bigger'>ЗП больше 1000$</button>
        </div>
    )
}
