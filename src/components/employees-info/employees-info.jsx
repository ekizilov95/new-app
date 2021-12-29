import './employees-info.css';

export default function EmployeesInfo() {
    return (
        <div className="content">
            <h1 className="content__title">Приложение по учету сотрудников в компании</h1>
            <h2 className="content__count">Число сотрудников: <span>2</span></h2>
            <h3 className="content__premium">Премию получат: <span>1</span></h3>
        </div>
    )
}
