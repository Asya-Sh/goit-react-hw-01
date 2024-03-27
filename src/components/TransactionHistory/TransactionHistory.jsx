import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
    return (
        <table className={s.wrapper}>
            <thead className={s.title}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
            {items.map(transaction => (
                    <tr key={transaction.id} className={s.color}>
                        <td className={s.capitalize}>{transaction.type}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
export default TransactionHistory;
