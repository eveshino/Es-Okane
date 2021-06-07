import income from "../../assets/income.svg";
import outcome from "../../assets/outcome.svg";
import total from "../../assets/yen.svg";
import { useTransactions } from "../../hooks/useTransactions";

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransactions();

  // const totalDeposits = transactions.reduce((acc, transaction) => {
  //   if (transaction.type === "deposit") {
  //     return acc + transaction.amount;
  //   }
  //   return acc;
  // }, 0);

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );
  return (
    <Container>
      <div>
        <header>
          <p>Incoming</p>
          <img src={income} alt="Incomingimage" />
        </header>
        <strong>
          {new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY",
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Outcoming</p>
          <img src={outcome} alt="OutcomingImage" />
        </header>
        <strong>
          -
          {new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY",
          }).format(summary.withdraws)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img className="yen" src={total} alt="totalImage" />
        </header>
        <strong>
          {" "}
          {new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY",
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}
