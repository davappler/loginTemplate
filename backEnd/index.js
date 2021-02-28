const express=require("express");
const app=express();
require ('dotenv').config ();

const PORT = process.env.PORT || 5000;

const devConfig = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
};

// Importing routes
const authRoute=require("./routes/auth")

//Route middleware     /api/user is like a prefix to register endpoint, when someone will click on register endpoint it will appear as /api/user/register
app.use("/api/user",authRoute);


//SERVER LISTEN
app.listen (PORT, () => {
    console.log (`Server Listening on port ${PORT}`);
  });
  