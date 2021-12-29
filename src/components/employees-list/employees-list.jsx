
import EmployeeslistItem from '../employees-list-item/employeeslist-item';

export default function EmployeesList({employees}) {
    const elements = employees.map(item => {
        return <EmployeeslistItem {...item}/>
    });

    return (
       <ul className="app-list list-group">
           {elements}
       </ul>
    )
}
