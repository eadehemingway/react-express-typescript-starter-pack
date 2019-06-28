import { app } from "./app";

app.listen(app.get("port"), () => {
  console.log(`server is running on http://localhost:${app.get("port")}`);
});
