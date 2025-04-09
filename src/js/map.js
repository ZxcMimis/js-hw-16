const mainEl = document.querySelector('main')
export const maps = (data) => {
    if (mainEl.lastElementChild !== null) {
        mainEl.lastElementChild.remove()
    }
    if (data.length >= 10) {
        PNotify.error({
            text: 'Too many matches found. Please enter a more specific query!'
        });
    }
    if (data.length >= 2 && data.length < 10) {
        const containerEl = document.createElement('div')
        const textEl = document.createElement('h4')
        textEl.textContent = 'Можливо ви це мали на увазі:'
        containerEl.append(textEl)
        data.map(obj => {
            const liEl = document.createElement('li')
            liEl.textContent = obj.name.official
            containerEl.append(liEl)
            mainEl.append(containerEl)
        })
    }
    if (data.length === 1) {
        const item = `<div class="countries">
            <h2 class="country-name">${data[0].name.official}</h2>
            <p class="country-capital">${'Capital: '+ data[0].capital}</p>
            <p class="country-population">${'Population: '+data[0].population}</p>
            <p class="country-languages">${'Languages: ' +Object.values(data[0].languages).join(', ')}</p>
            <img class="country-img" src="${data[0].flags.png}" alt="">
        </div>`
        mainEl.insertAdjacentHTML("beforeend", item)
    }
}