import './MineSiteOverview.css'

function MineSiteOverview (props) {
    return (
        <div className="mine-site-overview">
            <h1> Mine Site Overview</h1>
            <ul>
            {
                props.mineList.map ((ore, index) => {
                    return (
                        <li className="ore-item" key={index}>
                            <p className="ore-name">Name: {ore.name}</p>
                            <p className="ore-quantity">Quantity: {ore.quantity}</p>
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default MineSiteOverview;
