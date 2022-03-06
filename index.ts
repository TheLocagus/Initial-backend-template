import * as express from "express";
import * as methodOverride from 'method-override';
import {static as eStatic, urlencoded} from "express";
import {engine} from "express-handlebars";

const app = express();
console.log('siema')
app.use(methodOverride('_method'));
app.use(urlencoded({
    extended: true,
}));
app.use(eStatic('public'));
app.engine('.hbs', engine({
    extname: '.hbs',
    //helpers: ???
}));
app.set('view engine', '.hbs');

app.listen(3000, 'localhost', ()=>{
    console.log('Server is listening at http://localhost:3000')
})