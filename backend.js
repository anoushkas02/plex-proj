const express = require('express');
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors())


const ice_creams = [ 
    {'flavor': 'Chocolate Chip Cookie Dough', 'topping': 'rainbow sprinkles', 'container': 'Cone'},
      {'flavor': 'Rocky Road', 'topping': 'gummy bears', 'container': 'Cup'},
      {'flavor': 'French Vanilla', 'topping': 'oreos', 'container': 'Cup'},
      {'flavor': 'Chocolate', 'topping': 'boba', 'container': 'Cone'},
      {'flavor': 'Mango', 'topping': 'strawberries', 'container': 'Cup'},
      {'flavor': 'Strawberry', 'topping': 'chocolate sprinkles', 'container': 'Cone'},
      {'flavor': 'Pineapple', 'topping': 'gummy worms', 'container': 'Cone}',
      {'flavor': 'Orange', 'topping': 'candy', 'container': 'Cup'},
      {'flavor': 'Tiramisu', 'topping': 'chocolate sauce', 'container': 'Cone'},
      {'flavor': 'Coffee', 'topping': 'graham crackers', 'container': 'Cup'}]


 

app.get(
    res.send(ice_creams)
);

const port = 3001
app.listen(port, () => console.log(`Listening on Port ${port}`));