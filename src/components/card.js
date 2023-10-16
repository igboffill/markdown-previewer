export default function Card({title="", children}){
    return (
        <div className="card">
            {title && <div className="card-header">{title}</div>}
            <div className="card-content">
                {
                    children
                }
            </div>
        </div>
    )

}