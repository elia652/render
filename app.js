 const express = require('express');
 const cors = require('cors');
 const xlsx = require('xlsx');

 const workbook = xlsx.readFile('data.xlsx'); 

 const sheet = workbook.Sheets["Students"];

 const data = xlsx.utils.sheet_to_json(sheet);

 console.log(data);

 const app = express();
 app.use(cors());

 let students = { "name": "elia", "age": "21" };

 app.get('/', (req, res) => {
     res.json(data);
 });

 const PORT = 5000;
 app.listen(PORT, () => {
     console.log(`✅ Server is running on http://127.0.0.1:${PORT}`);
 });
