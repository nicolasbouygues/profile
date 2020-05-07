const passions = document.querySelectorAll('.passion')
passions.forEach((card) => {
  card.addEventListener("click", (event) => {
  event.currentTarget.classList.toggle("active-card-product");
   if (event.currentTarget.innerHTML.includes('sports')) {
      const initialCard = event.currentTarget.innerHTML
      event.currentTarget.insertAdjacentHTML('beforeend', `<p>${sports}</p>`);
      event.currentTarget.addEventListener("click", (e) => {
        e.currentTarget.innerHTML = initialCard
      })
  } else if (event.currentTarget.innerHTML.includes('Cuisine')) {
        const initialCard = event.currentTarget.innerHTML
        event.currentTarget.insertAdjacentHTML('beforeend', `<p>${cuisine}</p>`);
        event.currentTarget.addEventListener("click", (e) => {
          e.currentTarget.innerHTML = initialCard
        })
    } else if (event.currentTarget.innerHTML.includes('Voyages')) {
        const initialCard = event.currentTarget.innerHTML
        event.currentTarget.insertAdjacentHTML('beforeend', `<p>${voyages}</p>`);
        event.currentTarget.addEventListener("click", (e) => {
          e.currentTarget.innerHTML = initialCard
        })
    } else {
        if (event.currentTarget.innerHTML.includes('Musique')) {
          const initialCard = event.currentTarget.innerHTML
          event.currentTarget.insertAdjacentHTML('beforeend', `<p>${musique}</p>`);
          event.currentTarget.addEventListener("click", (e) => {
            e.currentTarget.innerHTML = initialCard
      })
    }}
  })});


const sports = `Je suis passionné de sports en général. Je fais principalement
 du football, du tennis et du ski, mais je suis très ouvert à de nouvelles
 pratiques ! Je m'informe beaucoup sur le sport, et j'adore en discuter.`
const cuisine = `Je suis aussi passionné de cuisine. J'aime énormément la
convivialité autour de la cuisine. J'ai profité de mes voyages pour élargir ma
palette de recettes. J'ai toujours envie de gouter et de cuisiner de nouvelles
choses.`
const voyages = `J'ai eu la chance de beaucoup voyager. J'aime découvrir de
nouvelles cultures, de nouvelles personnes et de nouveaux endroits. J'ai voyagé
pendant 4 mois en Amérique du Sud (Brésil, Argentine, Chili, Bolivie, Pérou et
Colombie). J'ai profité de mon échange universitaire en Chine pour aussi découvrir
le pays. Je souhaite continuer à explorer de nouveaux territoires.`
const musique = `Je passe beaucoup de temps à écouter de la musique, peu importe
le genre. Je regarde beaucoup de documentaires musicaux, et j'aime lire et
approfondir mes connaissances sur les artistes.`
