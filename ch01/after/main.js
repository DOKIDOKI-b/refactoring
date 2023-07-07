import { readJSON } from "../../utils/readJSON.js";
import statement from "./statement.js";

const invoices = readJSON("invoices.json");
const plays = readJSON("plays.json");

invoices.forEach((invoice) => {
  console.log(statement(invoice, plays));
});
