module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db')

        db.get_all_services().then(services => {
            res.status(200).send(services)
        }).catch(err => {
            res.status(500).send(err)
        })
    },

    getService: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params
        db.get_service([id]).then(services => {
            res.status(200).send(services[0])
        }).catch(err => {
            res.status(500).send(err)
        })
    }
}

