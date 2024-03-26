import s from './Transaction.module.css';

const Transaction = ({ transaction }) => {
    const { type, amount, currency } = transaction;
    return (
        <tr className={s.color}>
            <td className={s.capitalize}>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    );
};

export default Transaction;
