import EmployeeslistItem from '../employees-list-item/employeeslist-item';

export default function EmployeesList ({data, onDelete}) {

    const employeesList = data.map(item => {
       return <EmployeeslistItem  key={item.id} {...item} onDelete={() => onDelete(item.id)}/>
    });
   
   return(
        <ul className="app-list list-group">
            {employeesList}
        </ul>
   )
}
