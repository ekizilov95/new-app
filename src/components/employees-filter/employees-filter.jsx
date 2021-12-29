import './employees-filter.css';

export default function EmployeesFilter() {
    return (
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
           <button className="btn btn-light">Все сотрудники</button>
           <button className="btn btn-light">На повышение</button>
           <button className="btn btn-light">ЗП больше 1000$</button>
      </div>
    )
}
