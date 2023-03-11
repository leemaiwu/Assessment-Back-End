let newComplimentSubmitted = []
let newFortuneSumitted = []

let compliments = [
    "Gee, you're a smart cookie!",
    "Cool shirt!",
    "Your Javascript skills are stellar.",
    "You're doing great!"
]

let fortunes = [
    'Have a beautiful day.',
    'Go take a rest; you deserve it.',
    'Love lights up the world.',
    'You will enjoy good health.',
    'You will make change for the better.',
    'Now is the time to try something new.'
]

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = [
            'Have a beautiful day.',
            'Go take a rest; you deserve it.',
            'Love lights up the world.',
            'You will enjoy good health.',
            'You will make change for the better.',
            'Now is the time to try something new.'
        ]

        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)
    },
    submitCompliment: (req, res) => {
        newComplimentSubmitted.push(req.body)
        res.status(200).send(newComplimentSubmitted)
        console.log(newComplimentSubmitted)
    },
    submitFortune: (req, res) => {
        newFortuneSumitted.push(req.body)
        res.status(200).send(newFortuneSumitted)
        console.log(newFortuneSumitted)
    },
    complimentDeleted: (req, res) => {
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
    fortuneDeleted: (req, res) => {
        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let deletedfortune = fortunes.splice(randomIndex, 1)
        if (fortunes.length > 0) {
            res.status(200).send(deletedfortune[0])
            console.log(`Deleted: "${deletedfortune}"`)
        } else {
            console.log('Fortunes have all been deleted.')
            res.status(200).send('All fortunes have been')
        }
    }
}
