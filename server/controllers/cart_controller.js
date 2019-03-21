module.exports = {
    addService: (req, res) => {
        const db = req.app.get('db')
        // console.log(req.session)
        const { id } = req.session.user
        const { service_id} = req.body
        const user_id = id
        // console.log(user_id, service_id)

        db.add_service([user_id, service_id]).then(() => {
            res.status(200)
        }).catch(err => {
            res.status(500).send(err)
        })
    },

    getCart: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.session.user
        const user_id = id

        db.get_cart([user_id]).then( cart => {
            res.status(200).send(cart)
        }).catch( err => {
            res.status(500).send(err)
        })
    },

    deleteCart: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params
        const cart_id = id
        
        // console.log(req.session.user)
        db.delete_cart([cart_id, req.session.user.id]).then( cart => {
            // console.log(cart)
            res.status(200).send(cart)
        }).catch(err => {
            res.status(500).send(err)
        })
    },

    clearCart: (req, res) => {
        console.log('hit')
        const db = req.app.get('db')
        const { id } = req.params
        const user_id = id
        // console.log(user_id)

        db.clear_cart([user_id]).then(cart => {
            res.status(200).send(cart)
        }).catch(err => {
            console.log(err)
            res.status(501).send(err)
        })
    }
}