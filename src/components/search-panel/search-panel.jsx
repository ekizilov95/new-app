import './search-panel.css';

export default function SearchPanel({onUpdateSearch}) {
    return (
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Поиск сотрудника" aria-label="Username" aria-describedby="basic-addon1" onChange={({target}) => onUpdateSearch(target.value)}/>
        </div>
    )
}
