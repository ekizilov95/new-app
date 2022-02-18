import EmployeeslistItem from '../employees-list-item/employeeslist-item';

export default function EmployeesList ({data, onDelete, onToggleIncrease, onChangeSalary}) {

    const employeesList = data.map(item => {
       return <EmployeeslistItem  
       key={item.id} {...item} 
       onDelete={() => onDelete(item.id)} 
       onToggleIncrease={(e) => onToggleIncrease(item.id, e.currentTarget.getAttribute('data-type'))}
       onChangeSalary={({target}) => onChangeSalary(item.id , target.value)}
       />
    });
   
   return(
        <ul className="app-list list-group">
            {employeesList}
        </ul>
   )
}
