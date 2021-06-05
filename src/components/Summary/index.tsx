import income from "../../assets/income.svg";
import outcome from "../../assets/outcome.svg";
import total from "../../assets/total.svg";

import { Container } from "./styles";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Incoming</p>
          <img src={income} alt="Incomingimage" />
        </header>
        <strong>¥10.000</strong>
      </div>
      <div>
        <header>
          <p>Outcoming</p>
          <img src={outcome} alt="OutcomingImage" />
        </header>
        <strong>- ¥5.000</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={total} alt="totalImage" />
        </header>
        <strong>¥5.000</strong>
      </div>
    </Container>
  );
}
