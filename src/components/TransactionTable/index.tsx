import { Container } from "./styles";

export function TransactionTable() {
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
          <tr>
            <td className="title">Website develop</td>
            <td className="deposit">¥100.000</td>
            <td>Develop</td>
            <td>2021/06/05</td>
          </tr>

          <tr>
            <td className="title">Rent</td>
            <td className="withdraw">-¥55.000</td>
            <td>Apartment</td>
            <td>2021/05/25</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
