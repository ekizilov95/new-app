import './employees-info.css';

export default function EmployeesInfo({emlpoyees, prizes}) {
    return (
        <div className="content">
            <h1 className="content__title">Приложение по учету сотрудников в компании</h1>
            <h2 className="content__count">Число сотрудников: <span>{ emlpoyees }</span></h2>
            <h3 className="content__premium">Премию получат: <span>{ prizes }</span></h3>
        </div>
    )
}
