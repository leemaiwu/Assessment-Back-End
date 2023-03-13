let compliments = [
    "Gee, you're a smart cookie!",
    "Cool shirt!",
    "Your Javascript skills are stellar.",
    "You're doing great!"
]

let fortunes = [
    'You will have an amazing week.',
    'Love from within lights up the world.',
    'You will enjoy good health.',
    'You will make change for the better.',
    'Now is the time to try something new.'
]

module.exports = {

    getCompliment: (req, res) => {
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)
    },
    submitCompliment: (req, res) => {
        const compInput = req.body
        compliments.push(compInput.compliment)
        res.status(200).send(compInput.compliment)
        console.log(compliments)
    },
    submitFortune: (req, res) => {
        const fortInput = req.body
        fortunes.push(fortInput.fortune)
        res.status(200).send(fortInput.fortune)
        console.log(fortunes)
    },
    deleteCompliment: (req, res) => {
            let randomIndex = Math.floor(Math.random() * compliments.length)
            let deletedcompliment = compliments.splice(randomIndex, 1)
            if (compliments.length > 0) {
                res.status(200).send(deletedcompliment[0])
                console.log(`Deleted: "${deletedcompliment[0]}"`)
            } else {
                console.log('Compliments have all been deleted.')
                res.status(202).send('All compliments have been')
            }
    },
    deleteFortune: (req, res) => {
        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let deletedfortune = fortunes.splice(randomIndex, 1)
        if (fortunes.length > 0) {
            res.status(200).send(deletedfortune[0])
            console.log(`Deleted: "${deletedfortune}"`)
        } else {
            console.log('Fortunes have all been deleted.')
            res.status(200).send('All fortunes have been')
        }
    },
    updateCompliment: (req, res) => {
        let compliment = req.query.compliment
        let updatedCompliment = req.query.newCompliment
        let index = compliments.indexOf(compliment)
        if (compliments[index] === undefined) {
            res.status(400).send(`Compliment not found.`)
            console.log('Compliment not found')
        } else {
            console.log(`${compliments[index]} replaced with ${updatedCompliment}`)
            compliments.splice(index, 1, updatedCompliment)
            res.status(200).send(`Compliment updated.`)
        }
    },
    updateFortune: (req, res) => {
        let fortune = req.query.fortune
        let updatedFortune = req.query.newFortune
        let index = fortunes.indexOf(fortune)
        if (fortunes[index] === undefined) {
            res.status(400).send('Fortune not found.')
            console.log('Fortune not found')
        } else {
            console.log(`${fortunes[index]} replaced with ${updatedFortune}`)
            fortunes.splice(index, 1, updatedFortune)
            res.status(200).send('Fortune updated.')
        }
    },
    getAllCompliments: (req, res) => {
        res.status(200).send(compliments)
    },
    getAllFortunes: (req, res) => {
        res.status(200).send(fortunes)
    }
}
