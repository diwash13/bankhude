module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db')

        db.get_all_reviews().then(messages => {
            resizeBy.status(200).send(reviews)
        }).catch(err => {
            resizeBy.status(500).send(err)
        })
    },

    getReview: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params
        db.get_review([id]).then(reviews => {
            res.status(200).send(reviews)
        }).catch(err => {
            res.status(500).send(err)
        })
    },

    addReview: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.session.user
        const { review } = req.body

        db.create_review([id, review]).then(reviews => {
            res.status(200).send(reviews)
        }).catch(err => {
            res.status(500).send(err)
        })
    },

    deleteReview: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params

        db.delete_review([id]).then(reviews => {
            res.status(200).send(reviews)
        }).catch(err => {
            res.status(500).send(err)
        })
    },

    updateReview: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params
        const { review } = req.body

        db.update_review([id, review]).then(reviews => {
            res.status(200).send(reviews)
        })
    }
}