// index.js handles the server and the express object is exposesd here
import express from 'express'
const app = express();
const port = 8000;


import { engine } from 'express-handlebars'

app.engine('handlebars', engine({
  defaultLayout: 'main',
  helpers: {
      counter: (age) => age + 1,
      character: () => "Sheep",
      loud: (aString) => aString.toUpperCase()
    }
}));
app.set('view engine', 'handlebars')
app.set('views', './views')

app.use(express.static('public'))

function fakeApi () {
  return [
    {
      name: 'Jess',
      date: '23rd'
    },
    {
      name: 'Kim',
      date: '15th'
    },
    {
      name: 'Joanna',
      date: '1st'
    },
    {
      name: 'Zed',
      date: '22nd'
    },
    {
      name: 'Emma',
      date: '16th'
    }
  ];
}

app.get('/', (req, res) => {
  const name = "Astrid"
  const age = 6
  // pass local variables to the render function, this can include a function
                                            //variable name: js logic
  res.render('index',
    { name: name,
      age: age,
      neighbours: fakeApi(),
      listExists: true
  });
});

app.listen(port, () => {
  console.log('listening on port 8000')
});
