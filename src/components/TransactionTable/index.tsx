import { useTransactions } from "../../hooks/useTransactions";

import { Container } from "./styles";

export function TransactionTable() {
  const { transactions } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            //for each transaction i will return this html
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {new Intl.NumberFormat("ja-JP", {
                    style: "currency",
                    currency: "JPY",
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat("ja-JP").format(
                    new Date(transaction.createdAt)
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
