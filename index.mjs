import { counter } from './javascript/counter.mjs';
import { daysTillChristmas } from './javascript/daysTillChristmas.mjs'
import express from 'express'
const app = express();
const port = 8000;


import { engine } from 'express-handlebars'

app.engine('handlebars', engine({
  defaultLayout: 'main',
  helpers: {
    daysTillChristmas: daysTillChristmas
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
