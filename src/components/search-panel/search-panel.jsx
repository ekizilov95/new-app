import './search-panel.css';

export default function SearchPanel() {
    return (
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
    )
}
