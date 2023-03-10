const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('fortuneButton')
const postCompliement = document.getElementById('complimentForm')
const receivedCompliment = document.getElementById('complimentInput')
const postFortune = document.getElementById('fortuneForm')
const receivedFortune = document.getElementById('fortuneInput')
const deleteCompliment = document.getElementById('deleteComplement')


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
    const compInput = {compliment: receivedCompliment.value}
    axios.post('http://localhost:4000/api/compliment/', compInput)
    .then((result) => {
        console.log(result.data)
        alert(`"${receivedCompliment.value}" has been created as a compliment!`)
    })
    .catch((err) => {
        console.log(err)
        alert('Error submitting compliment.')
    })
}

const submitFortune = (event) => {
    event.preventDefault()
    const fortInput = {fortune: receivedFortune.value}
    axios.post('http://localhost:4000/api/fortune/', fortInput)
    .then((result) => {
        console.log(result.data)
        alert(`"${receivedFortune.value}" has been created as a fortune!`)
    })
    .catch((err) => {
        console.log(err)
        alert('Error submitting fortune.')
    })
}

function complimentDeleted () {
    axios.delete('http://localhost:4000/api/compliment/')
    .then((result) => {
        console.log(`Deleted compliment: ${result.data}`)
        alert(result.data)
    })
    .catch((err) => {
        console.log(err)
        alert('Error deleting compliment.')
    })
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
postCompliement.addEventListener('submit', submitCompliment)
postFortune.addEventListener('submit', submitFortune)
deleteCompliment.addEventListener('click', complimentDeleted)
