const Statistics = ({title, data}) => (
    <section className="statistics">
        <h2 className="title">{title}</h2>

    <ul className="stat-list">
        {
            data.map(item => (
                <li className="item" key={item.id}>
                    <span className="label">{item.label}</span>
                    <span className="percentage">{item.percentage}</span>
                </li>
            ))
        }
    </ul>
    </section>
)

export default Statistics;