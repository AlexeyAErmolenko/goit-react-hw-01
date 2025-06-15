import css from "./TransactionHistoryRow.module.css";
export default function TransactionHistoryRow({ type, amount, currency }) {
    return (
        <>
            <td className={css.tableTh}>{type}</td>
            <td className={css.tableTh}>{amount}</td>
            <td className={css.tableTh}>{currency}</td>
        </>
    );
}