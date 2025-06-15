import TransactionHistoryRow from "../TransactionHistoryRow/TransactionHistoryRow.jsx";
import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ transactions }) {
    console.log("🚀 ~ TransactionHistory ~ transactions:", transactions);
    return (
        <div className={css.container}>
            <table className={css.tableTransaction}>
            <thead className={css.tableThead}>
                <tr>
                    <th className={css.tableTh}>Type</th>
                    <th className={css.tableTh}>Amount</th>
                    <th className={css.tableTh}>Currency</th>
                </tr>
            </thead>
            <tbody className={css.tableTbody}>
                {transactions.map(transaction => (
                    <tr key={transaction.id} className={css.tableTr}>
                        <TransactionHistoryRow type={transaction.type} amount={transaction.amount} currency={transaction.currency} />
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
    );
}