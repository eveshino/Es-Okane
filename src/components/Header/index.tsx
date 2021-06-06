import logo from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}
//give a props as a function
//give a props to the Header component to change the parent component in app.tsx

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <div className="logoDiv">
          <img className="logo" src={logo} alt="es okane"></img>
          <h2>ES金</h2>
        </div>

        <button type="button" onClick={onOpenNewTransactionModal}>
          New Transaction
        </button>
      </Content>
    </Container>
  );
}
