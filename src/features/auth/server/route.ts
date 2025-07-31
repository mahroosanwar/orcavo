import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";

import { loginSchema, registerSchema } from "../schemas";

const app = new Hono()
  .post("/login", zValidator("json", loginSchema), (c) => {
    const { email, password } = c.req.valid("json");
    console.log("Login request received:", { email, password });
    return c.json({ email, password });
  })
  .post("register", zValidator("json", registerSchema), (c) => {
    const { name, email, password } = c.req.valid("json");
    console.log("Register request received:", { name, email, password });
    return c.json({ email, password });
  });
export default app;
