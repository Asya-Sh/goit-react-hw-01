import './TransactionHistory.css'
import Transaction from '../Transaction/Transaction';

const TransactionHistory = ({ transactions }) => {
  return (
    <table>
      <thead>
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
