module.exports = {
    addService: (req, res) => {
        const db = req.app.get('db')
        // console.log(req.session)
        const { id } = req.session.user
        const { service_id} = req.body
        const user_id = id
        console.log(user_id, service_id)

        db.add_service([user_id, service_id]).then(() => {
            res.status(200)
        }).catch(err => {
            res.status(500).send(err)
        })
    },

    getCart: (req, res) => {
        const db = req.app.get('db')

        db.get_cart().then( cart => {
            res.status(200).send(cart)
        }).catch( err => {
            res.status(500).send(err)
        })
    },

    deleteCart: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params
        const cart_id = id
        // console.log(req.params)

        db.delete_cart([cart_id]).then( cart => {
            res.status(200).send(cart)
        }).catch(err => {
            res.status(500).send(err)
        })
    }
}