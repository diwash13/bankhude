const path = require('path');
require('dotenv').config()
const express = require ('express')
const session = require ('express-session')
const massive = require ('massive')
const pg = require ('pg')
const pgSession = require('connect-pg-simple')(session)

const uc = require ('./controllers/userController')
const rc = require ('./controllers/reviews_controller')
const sc = require ('./controllers/services_controller')
const cc = require ('./controllers/cart_controller')
const pc = require ('./controllers/payment_controller')

const app = express()

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET, STRIPE_SECRET} = process.env
console.log(process.env)

const pgPool = new pg.Pool({
    connectionString: CONNECTION_STRING
  })


app.use( express.static( `${__dirname}/../build` ) );
app.use(express.json())
app.use(session({
    store: new pgSession({
        pool: pgPool,
        pruneSessionInterval: 60 * 60 * 24
    }),
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1231232223211
    }
}))

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log('Sweeettt'))
})

app.post('/auth/register', uc.register)
app.post('/auth/login', uc.login)
app.post('/auth/logout', uc.logout)

app.get('/api/current', uc.getUser)

app.get('/api/reviews', rc.getAll)
app.get('/api/review/:id', rc.getReview)
app.post('/api/review', rc.addReview)
app.delete('/api/review/:id', rc.deleteReview)
app.put('/api/review/:id', rc.updateReview)

app.get('/api/services', sc.getAll)
app.get('/api/service/:id', sc.getService)

app.post('/api/cart/', cc.addService)
app.get('/api/cart/', cc.getCart)
app.delete('/api/cart/:id', cc.deleteCart)
app.delete('/api/clearCart/:id', cc.clearCart)

app.post('/api/payment', pc.handlePayment)

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});