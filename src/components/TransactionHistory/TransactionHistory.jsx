import s from './TransactionHistory.module.css';
import Transaction from '../Transaction/Transaction.jsx';

const TransactionHistory = ({ transactions }) => {
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
                {transactions.map(transaction => {
                    return <Transaction key={transaction.id} transaction={transaction} />;
                })}
            </tbody>
        </table>
    );
};
export default TransactionHistory;
