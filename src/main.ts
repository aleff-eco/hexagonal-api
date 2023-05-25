import express from "express";

import { userRouter } from "./user/infrastructure/UserRouter";

const app = express();
app.use(express.json());

app.use("/users", userRouter);

app.listen(3000, () => {
  console.log(`[Application] Server online in port 3000`);
});
