import ReactDOM from "react-dom";
import App from "./App";
import { createServer, Model } from "miragejs";

//setting the fake API
createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "freelancing",
          type: "deposit",
          category: "Develop",
          amount: 60000,
          createdAt: new Date("2021-05-21 08:00:00"),
        },
        {
          id: 2,
          title: "Rent",
          type: "withdraw",
          category: "Apartment",
          amount: 50000,
          createdAt: new Date("2021-05-26 10:00:00"),
        },
      ],
    });
  },

  routes() {
    // all api request will be after the /api/
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });
    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transaction", data);
    });
  },
});
ReactDOM.render(<App />, document.getElementById("root"));
