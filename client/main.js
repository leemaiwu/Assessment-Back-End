const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('fortuneButton')
const postCompliement = document.getElementById('complimentForm')
const receivedCompliment = document.getElementById('complimentInput')
const postFortune = document.getElementById('fortuneForm')
const receivedFortune = document.getElementById('fortuneInput')
const deletedCompliment = document.getElementById('deleteCompliment')
const deletedFortune = document.getElementById('deleteFortune')
const putComplimentForm = document.getElementById('complimentUpdate')
const putComplimentInput = document.getElementById('existingCompliment')
const putNewComplimentInput = document.getElementById('updatedCompliment')
const putFortuneForm = document.getElementById('fortuneUpdate')
const putFortuneInput = document.getElementById('existingFortune')
const putNewFortuneInput = document.getElementById('updatedFortune')
const viewAllCompliments = document.getElementById('getAllCompliments')
const viewAllFortunes = document.getElementById('getAllFortunes')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get('http://localhost:4000/api/fortune/')
    .then((result) => {
        const data = result.data
        alert(data)
    })
    .catch((err) => {
        console.log(err)
        alert('couldn\'t retrieve fortune.')
    })
}

const submitCompliment = (event) => {
    event.preventDefault()
    const compInput = receivedCompliment.value
    axios.post('http://localhost:4000/api/compliment/', {compliment: compInput})
    .then((result) => {
        console.log(`${result.data} has been added.`)
        alert(`"${compInput}" has been created as a compliment!`)
    })
    .catch((err) => {
        console.log(err)
        alert('Error submitting compliment.')
    })
}

const submitFortune = (event) => {
    event.preventDefault()
    const fortInput = receivedFortune.value
    axios.post('http://localhost:4000/api/fortune/', {fortune: fortInput})
    .then((result) => {
        console.log(`${result.data} has been added.`)
        alert(`"${fortInput}" has been created as a fortune!`)
    })
    .catch((err) => {
        console.log(err)
        alert('Error submitting fortune.')
    })
}

function deleteCompliment () {
    axios.delete('http://localhost:4000/api/compliment/')
    .then((result) => {
        console.log(`${result.data} deleted.`)
        alert(`${result.data} deleted`)
    })
    .catch((err) => {
        console.log(err)
        alert('Error deleting compliment.')
    })
}

function deleteFortune () {
    axios.delete('http://localhost:4000/api/fortune/')
    .then((result) => {
        console.log(`${result.data} deleted.`)
        alert(`${result.data} deleted`)
    })
    .catch((err) => {
        console.log(err)
        alert('Error deleting fortune.')
    })
}

function updateCompliment (event) {
    event.preventDefault()
    let compliment = putComplimentInput.value
    let newCompliment = putNewComplimentInput.value
    axios.put(`http://localhost:4000/api/compliments?compliment=${compliment}&newCompliment=${newCompliment}`)
    .then((result) => {
        alert(`${compliment} updated to ${newCompliment}`)
        console.log(result.data)
    })
    .catch((err) => {
        console.log(err)
        alert('Compliment not found.')
    })
}

function updateFortune (event) {
    event.preventDefault()
    let fortune = putFortuneInput.value
    let newFortune = putNewFortuneInput.value
    axios.put(`http://localhost:4000/api/fortunes?fortune=${fortune}&newFortune=${newFortune}`)
    .then((result) => {
        alert(`${fortune} updated to ${newFortune}`)
        console.log(result.data)
    })
    .catch((err) => {
        console.log(err)
        alert('Couldn\'t find fortune')
    })
}

function getAllCompliments () {
    axios.get('http://localhost:4000/api/allcompliments/')
    .then(res => {
        const data = res.data
        alert(`All compliments:\n${data.join('\n')}`)
    })
    .catch((err) => {
        alert('Couldn\'t retrieve all compliments')
        console.log(err)
    })
}

function getAllFortunes () {
    axios.get('http://localhost:4000/api/allfortunes/')
    .then(res => {
        const data = res.data
        alert(`All fortunes:\n${data.join('\n')}`)
    })
    .catch((err) => {
        console.log(err)
        alert('Couldn\'t retrieve all fortunes')
    })
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
postCompliement.addEventListener('submit', submitCompliment)
postFortune.addEventListener('submit', submitFortune)
deletedCompliment.addEventListener('click', deleteCompliment)
deletedFortune.addEventListener('click', deleteFortune)
putComplimentForm.addEventListener('submit', updateCompliment)
viewAllCompliments.addEventListener('click', getAllCompliments)
putFortuneForm.addEventListener('submit', updateFortune)
viewAllFortunes.addEventListener('click', getAllFortunes)
