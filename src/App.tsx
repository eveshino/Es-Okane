import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header/index";
import { Dashboard } from "./components/Dashboard";
import { useState } from "react";
import Modal from "react-modal";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement("#root");

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }
  //give a property to header that receive the function that i want the parent to give to the child
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}

export default App;
