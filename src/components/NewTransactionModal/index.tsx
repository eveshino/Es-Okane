import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import closeImg from "../../assets/close.svg";
import { FormEvent, useState } from "react";
import { useTransactions } from "../../hooks/useTransactions";

//give props as a function
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");

  async function handleCreateNewTransaction(event: FormEvent) {
    //prevent the page to refresh after submitting the modal
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    });
    setTitle("");
    setAmount(0);
    setCategory("");
    setType("deposit");
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      //close modal with esc and outside click
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="close modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Register Transaction</h2>
        <input
          placeholder="Title"
          value={title}
          //everytime change the value i save the new value in {title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Value"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            //could make a logic in the className=""
            //className={type === "deposit" ? "active" : ""}
            isActive={type === "deposit"}
            activeColor="green"
            //instead of creating a function in the top  i can create a function in onClick
            onClick={() => {
              setType("deposit");
            }}
          >
            <img src={incomeImg} alt="Income" />
            <span>Income</span>
          </RadioBox>

          <RadioBox
            type="button"
            isActive={type === "withdraw"}
            activeColor="red"
            onClick={() => {
              setType("withdraw");
            }}
          >
            <img src={outcomeImg} alt="Outcome" />
            <span>Outcome</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type="submit">Register</button>
      </Container>
    </Modal>
  );
}
