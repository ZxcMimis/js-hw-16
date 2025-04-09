import { getCountry } from './get-api'

const inputEl = document.querySelector('#input-text')

inputEl.addEventListener('change', (e) => {
    e.preventDefault()
    const country = e.target.value
    getCountry(country)
})