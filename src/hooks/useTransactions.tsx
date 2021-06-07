import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface Transaction {
  id: number;
  title: string;
  category: string;
  amount: number;
  createdAt: string;
  type: string;
}

////////////////////
// interface TransactionInput {
//   title: string;
//   amount: number;
//   type: string;
//   category: string;
// }
//type TransactionInput = Pick<Transaction, "title" |"amount" | "type" | "category">
type TransactionInput = Omit<Transaction, "id" | "createdAt">;
///////////////////////

interface TransactionsProviderProps {
  //accept any content valid for react as a children
  children: ReactNode;
}

interface TransactionContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionContext = createContext<TransactionContextData>(
  //enganando o typescript
  {} as TransactionContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("/transactions")
      // dont forget that is not returning a object with an array inside (response.data.transactions  )
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post("/transactions", {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }
  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionContext);

  return context;
}
