const e=document.querySelector("main"),t=t=>{if(null!==e.lastElementChild&&e.lastElementChild.remove(),t.length>=10&&PNotify.error({text:"Too many matches found. Please enter a more specific query!"}),t.length>=2&&t.length<10){let n=document.createElement("div"),a=document.createElement("h4");a.textContent="Можливо ви це мали на увазі:",n.append(a),t.map(t=>{let a=document.createElement("li");a.textContent=t.name.official,n.append(a),e.append(n)})}if(1===t.length){let n=`<div class="countries">
            <h2 class="country-name">${t[0].name.official}</h2>
            <p class="country-capital">${"Capital: "+t[0].capital}</p>
            <p class="country-population">${"Population: "+t[0].population}</p>
            <p class="country-languages">${"Languages: "+Object.values(t[0].languages).join(", ")}</p>
            <img class="country-img" src="${t[0].flags.png}" alt="">
        </div>`;e.insertAdjacentHTML("beforeend",n)}},n=e=>fetch(`https://restcountries.com/v3.1/name/${e}`).then(e=>e.json()).then(e=>t(e));document.querySelector("#input-text").addEventListener("change",e=>{e.preventDefault(),n(e.target.value)});
//# sourceMappingURL=js-hw-16.345900b6.js.map
