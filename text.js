const mongoose = require("mongoose");

const uri = "mongodb+srv://sathesakshi31:sakshi3126@cluster0.q19xy.mongodb.net/myDatabase?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Connection failed", err));
