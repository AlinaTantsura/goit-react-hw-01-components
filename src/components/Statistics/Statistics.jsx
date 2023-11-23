import css from './Statistics.module.css';
import { getRandomColor } from 'getRandomColor';

const Statistics = ({title, data}) => (
    <section className={css.statistics}>
        {title && (<h2 className={css.title}>{title}</h2>)}
    
    <ul className={css.statList}>
        {
            data.map(item => (
                <li className={css.item} key={item.id} style={{backgroundColor: getRandomColor()}}>
                    <span className={css.label}>{item.label}</span>
                    <span className={css.percentage}>{item.percentage}%</span>
                </li>
            ))
        }
    </ul>
    </section>
)

export default Statistics;