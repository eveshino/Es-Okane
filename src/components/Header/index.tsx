import logo from "../../assets/logo.svg";
import { Container, Content } from "./styles";
export function Header() {
  return (
    <Container>
      <Content>
        <div className="logoDiv">
          <img className="logo" src={logo} alt="es okane"></img>
          <h2>ES金</h2>
        </div>

        <button type="button">New Transaction</button>
      </Content>
    </Container>
  );
}
