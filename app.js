const express = require("express");
const morgan = require('morgan');
const hbs = require('express-handlebars');



const app=express();
app.use(express.json());

app.use(express.static('public'));

//MIDDLEWARES
if(process.env.NODE_ENV="development"){
	app.use(morgan('dev'));
};



//view engines
app.set('view engine','hbs');

app.engine('hbs',hbs({
		extname:'hbs',
	layoutDir:`${__dirname}/views/layout`,
	layoutDir:`${__dirname}/views/partials`,
	defaultLayout:'index'

}));

//HOME ROUTE
app.get('/',(req,res)=>{
  res.render("body1",{
		layout:"index",
		name:"tej"
	});
});

//name ke through hm parameter paas kr rhe hain isse index.hbs file me jahan name variable hoga
//wahan 'tej' show hoga
//yahan agar hm body2 render krenge to body ka content show hoga



//view engine routes
app.get('/home',(req,res)=>{
	res.render('home',{
		layout:"index"
	});
});

//isi tarah alag alag route pr alag alag file render kr skte hain









module.exports = app;
