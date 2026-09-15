const Select = document.querySelector('#primary-type');
const Select2 = document.querySelector('#secondary-type');
const ul = document.querySelector('#pokemonList');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const no = document.querySelector('#number-of-pokemons')
const Gen = document.querySelector("#gen-select")
const reload = document.querySelector("#apply-button")
const reset = document.querySelector('#reset-button')
const search = document.querySelector("#pokemon-name")
let offset = 0;
const menuOpen = document.querySelector('.Hamburger-Menu-Button-open');
const menuClose = document.querySelector('.Hamburger-Menu-Button-close');
const menu = document.querySelector('.filters');
const overlay = document.querySelector('.overlay');
const toggle = document.querySelector('#toggle')
const width = window.innerWidth
const height = window.innerHeight
const limit = Math.floor(Math.floor(width / 180)*1.3)


function closeMenu(){
  menu.style.transform='translateX(-100%)';
  overlay.removeAttribute('open');
  menuOpen.setAttribute('aria-expanded','false');
}
menuOpen.addEventListener('click', ()=>{
  menu.style.transform='translateX(0)';
  overlay.setAttribute('open','');
  menuOpen.setAttribute('aria-expanded','true');
});
menuClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

search.addEventListener("focusout", () => {
    loadTypes(Gen.value, Select.value, Select2.value, offset, limit, search.value);
})

Select.addEventListener('change', (e) => {
    const selectedType = e.target.value;
    ul.innerHTML = '';
    offset = 0
    search.value = ""
    loadTypes(Gen.value, selectedType, Select2.value, offset, limit, search.value);
});

Select2.addEventListener('change', (e) => {
    const selectedType = e.target.value;
    ul.innerHTML = '';
    offset = 0
    search.value = ""
    loadTypes(Gen.value, Select.value, selectedType, offset, limit, search.value);
});

Gen.addEventListener('change', (e) => {
    const selectedType = e.target.value;
    ul.innerHTML = '';
    offset = 0
    loadTypes(selectedType, Select.value, Select2.value, offset, limit, search.value);
});

document.addEventListener('click', (e) => {
    if (e.target == next) {
        offset += limit;
        loadTypes(Gen.value, Select.value, Select2.value, offset, limit, search.value);
    }
    if (e.target == prev && offset > 0) {
        offset -= limit;
        loadTypes(Gen.value, Select.value, Select2.value, offset, limit, search.value);
    }
    if (e.target == reload) {
        loadTypes(Gen.value, Select.value, Select2.value, offset, limit, search.value)
    }
    if (e.target == reset) {
      Gen.value = "1"
      Select.value = ""
      Select2.value = ""
      offset = 0
      search.value = ""
});

async function loadTypes(gen, type, type2, offset, limit, search) {
let stats = {}
ul.innerHTML = '';
    if (search) {
        try {
            poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`).then(p => p.json())
            const li = document.createElement("li")
            stats = {}
   poke.stats.forEach(s => {
  stats[s.stat.name] = s.base_stat
})
            li.innerHTML = `
    <span class="dex numbers">#${String(poke.id).padStart(3,'0')}</span>
    <img src="${poke.sprites.front_default}" alt="">
    <h3 class="pokename">${poke.name}</h3>
    <p>Height: <span class="numbers">${poke.height*10}</span>cm | Weight: <span class="numbers">${poke.weight/10}</span>kg</p>
    <p>Atk: <span class="numbers">${stats.attack}</span> Def: <span class="numbers">${stats.defense}</span> Spd: <span class="numbers">${stats.speed}</span></p>
  `;
    li.classList.add('listitem');
    ul.appendChild(li);
    no.innerHTML = `<p><h2>1 Pokémon Found</h2><br><h3>Showing 0-1 Pokèmon Out Of 1</h3></p>`
        } catch (e){
            no.innerHTML = "<h2>No Pokemons Found</h2>"
           console.log(e)
        }
        return
    }

    if (!gen && !type && !type2) {
        no.innerHTML = "<h2>No Pokemons Found</h2>"
        return
   }
   
    let last = []
    let counter = 0
    let [typefil1, typefil2, genfil] = [[], [], []]
    let both;
    try {
    if (type || type2) {
        if (type) {
            typefil1 = await fetch(`https://pokeapi.co/api/v2/type/${type}`).then(p => p.json())
        } else {
            typefil1 = await fetch(`https://pokeapi.co/api/v2/type/${type2}`).then(p => p.json())
        }
        if (type2) {
            typefil2 = await fetch(`https://pokeapi.co/api/v2/type/${type2}`).then(p => p.json())
        } else {
            typefil2 = typefil1
        }
        both = typefil1.pokemon.filter(a => typefil2.pokemon.some(b => a.pokemon.name == b.pokemon.name))
        last = both
        if (gen) {
            genfil = await fetch(`https://pokeapi.co/api/v2/generation/${gen}`).then(p => p.json())
            last = both.filter(a => genfil.pokemon_species.some(b => b.name == a.pokemon.name))
        }
    }
    if(!type && !type2 && gen) {
        genfil = await fetch(`https://pokeapi.co/api/v2/generation/${gen}`).then(p => p.json())
           last = genfil.pokemon_species.map(s => ({ pokemon: { name: s.name, url: `https://pokeapi.co/api/v2/pokemon/${s.name}` } }))
    }
    
    let allpoke = last.length
   if (allpoke == 0) {
   no.innerHTML = "<h2>No Pokemon Found</h2>"
   } else if (allpoke > offset + limit) {
   no.innerHTML = `<p><h2>${allpoke} Pokémons Found</h2><br><h3>Showing ${offset}-${offset + limit} Pokèmon Out Of ${allpoke}</h3></p>`
   } else {
   no.innerHTML = `<p><h2>${allpoke} Pokémons Found</h2><br><h3>Showing ${offset}-${allpoke} Pokèmon Out Of ${allpoke}</h3></p>`
 }

    for (const item of last.slice(offset, offset + limit)) {
    const li = document.createElement('li');
    const poke = await fetch(item.pokemon.url).then(r => r.json())
    stats = {}
   poke.stats.forEach(s => {
  stats[s.stat.name] = s.base_stat
})
    li.innerHTML = `
    <span class="dex numbers">#${String(poke.id).padStart(3,'0')}</span>
    <img src="${poke.sprites.front_default}" alt="${poke.name}">
    <h3 class="pokename">${poke.name}</h3>
    <p>
       Height: <span class="numbers">${poke.height*10}</span>cm
        <br>
       Weight: <span class="numbers">${poke.weight/10}</span>kg
    </p>
    <p>Atk: <span class="numbers">${stats.attack}</span> Def: <span class="numbers">${stats.defense}</span> Spd: <span class="numbers">${stats.speed}</span></p>
  `;
    li.classList.add('listitem');
    ul.appendChild(li);
    counter += 1
   }
   }catch (err){
       console.log(err)
};
}

toggle.addEventListener("click", () => {
    toggle.classList.toggle('white');
    document.body.classList.toggle('light-mode');
});
