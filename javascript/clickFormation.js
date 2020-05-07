const formations = document.querySelectorAll('.formation')
formations.forEach((card) => {
  card.addEventListener("click", (event) => {
  event.currentTarget.classList.toggle("active-card-product");
   if (event.currentTarget.innerHTML.includes('Wagon')) {
      const initialCard = event.currentTarget.innerHTML
      event.currentTarget.insertAdjacentHTML('beforeend', `<p>${wagon_form}</p>`);
      event.currentTarget.addEventListener("click", (e) => {
        e.currentTarget.innerHTML = initialCard
      })
  } else if (event.currentTarget.innerHTML.includes('Grenoble')) {
        const initialCard = event.currentTarget.innerHTML
        event.currentTarget.insertAdjacentHTML('beforeend', `<p>${gem}</p>`);
        event.currentTarget.addEventListener("click", (e) => {
          e.currentTarget.innerHTML = initialCard
        })
    } else {
        if (event.currentTarget.innerHTML.includes('Tongji')) {
          const initialCard = event.currentTarget.innerHTML
          event.currentTarget.insertAdjacentHTML('beforeend', `<p>${tongji}</p>`);
          event.currentTarget.addEventListener("click", (e) => {
            e.currentTarget.innerHTML = initialCard
      })
    }}
  })});


const wagon_form = `Je suis passionné de sports en général. Je fais principalement
 du football, du tennis et du ski, mais je suis très ouvert à de nouvelles
 pratiques ! Je m'informe beaucoup sur le sport, et j'adore en discuter.`
const gem = `Je suis aussi passionné de cuisine. J'aime énormément la
convivialité autour de la cuisine. J'ai profité de mes voyages pour élargir ma
palette de recettes. J'ai toujours envie de gouter et de cuisiner de nouvelles
choses.`
const tongji = `Je passe beaucoup de temps à écouter de la musique, peu importe
le genre. Je regarde beaucoup de documentaires musicaux, et j'aime lire et
approfondir mes connaissances sur les artistes.`
