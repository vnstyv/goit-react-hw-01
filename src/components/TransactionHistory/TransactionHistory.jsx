import css from "./TransactionHistory.module.css";

export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.tableContainer}>
            <thead>
                <tr>
                    <th className={css.headerText}>Type</th>
                    <th className={css.headerText}>Amount</th>
                    <th className={css.headerText}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map((transaction) => (
                <tr key={transaction.id} className={css.transaction}>
                    <td>{transaction.type}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.currency}</td>
                    </tr>
                    ))}
            </tbody>
        </table>
    );
};