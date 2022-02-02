import EmployeeslistItem from '../employees-list-item/employeeslist-item';

export default function EmployeesList({employees, deleteItem}) {
    const elements = employees.map((item, i) => {
        return <EmployeeslistItem key={i} {...item} onDelete={() => deleteItem(i)}/>
    });

    return (
       <ul className="app-list list-group">
           {elements}
       </ul>
    )
}
