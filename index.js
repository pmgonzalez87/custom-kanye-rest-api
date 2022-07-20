import axios from "axios";
import express from "express";
import cors from "cors";

const URL = "https://api.kanye.rest/";
const app = express();

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port:${PORT}`);
});

app.use(cors());
//app.use()

app.get(
  "/kanye_quotes",
  (rec, res, next) => {
    console.log("Paul");
    next();
  },

  async (req, res) => {
    try {
      const response = await axios.get(URL);
      res.send(response.data);
    } catch (error) {
      console.log(error);
    }
  }
);
