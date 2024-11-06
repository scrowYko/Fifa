const express = require("express");

const app = express();
const port = 3000;
app.use(express.json());
const bcrypt = require("bcrypt");
const pool = require('./db')


app.get("/register", async (req, res) => {
  const { usuario, senha, email } = req.body;
  try {
    const emailExiste = await pool.query(
      "SELECT * FROM usuario where email = $1, [email]"
    );

    if (emailExiste.rows.lenght > 0) {
      return res.status(400).send("Email já existe");
    }

    const hashedPassword = await bcrypt.hash(senha, 10);

    //insert user in database
    const user = await pool.query(
      "INSERT INTO usuario (usuario, senha, email) VALUES ($1,  $2, $3)",
      [usuario, hashedPassword, email]
    );
    res.status(201).send("User created");
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro ao conectar com servidor" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
