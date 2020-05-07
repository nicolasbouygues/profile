const cards = document.querySelectorAll('.card-product')
cards.forEach((card) => {
  card.addEventListener("click", (event) => {
  event.currentTarget.classList.toggle("active-card-product");
   if (event.currentTarget.innerHTML.includes('Wagon')) {
      const initialCard = event.currentTarget.innerHTML
      event.currentTarget.insertAdjacentHTML('beforeend', `<p>${wagon}</p>`);
      event.currentTarget.addEventListener("click", (e) => {
        e.currentTarget.innerHTML = initialCard
      })
  } else if (event.currentTarget.innerHTML.includes('Doctolib')) {
        const initialCard = event.currentTarget.innerHTML
        event.currentTarget.insertAdjacentHTML('beforeend', `<p>${doctolib}</p>`);
        event.currentTarget.addEventListener("click", (e) => {
          e.currentTarget.innerHTML = initialCard
        })
    } else if (event.currentTarget.innerHTML.includes('Tignes')) {
        const initialCard = event.currentTarget.innerHTML
        event.currentTarget.insertAdjacentHTML('beforeend', `<p>${tignes}</p>`);
        event.currentTarget.addEventListener("click", (e) => {
          e.currentTarget.innerHTML = initialCard
        })
    } else {
        if (event.currentTarget.innerHTML.includes('Orange')) {
          const initialCard = event.currentTarget.innerHTML
          event.currentTarget.insertAdjacentHTML('beforeend', `<p>${orange}</p>`);
          event.currentTarget.addEventListener("click", (e) => {
            e.currentTarget.innerHTML = initialCard
      })
    }}
  })});

const wagon = `<h5><strong><u>Résultats</strong></u></h5> Création et lancement du site de
<a target="_blank" href="http://www.foodies-health.live/">Foodies</a>, un projet pour améliorer l'alimentation
des personnes malades à l'hôpital.<br>
<br>
Création du site <a target="_blank" href="leperebrouette.herokuapp.com/">Le Père Brouette</a>, un site expert
dans la location de brouette.<br>
<h5><strong><u>Missions</strong></u></h5>
<ul>
<li>Développement web des sites de <a target="_blank" href="http://www.foodies-health.live/">Foodies</a>
et du <a target="_blank" href="leperebrouette.herokuapp.com/">Le Père Brouette</a> sur Ruby on Rails, CSS et JavaScript.</li>
<li>Professeur assistant sur le batch #412 à Lyon. J'accompagne les étudiants sur leur apprentissage
du langage Web (Ruby, HTML, CSS, JavaScript, Git, GitHub, SQL). Je vérifie leur code et les aide à le débugger.
Je leur fourni les best practices sur comment coder efficacement. </li>
</ul>`
const doctolib = `<h5><strong><u>Résultats</strong></u></h5> 450K€ de CA généré – 30% du CA d’une
 équipe de 4 personnes<br>
<h5><strong><u>Missions</strong></u></h5>
<ul>
<li>Organisation de stages en altitude pour les équipes sportives</li>
<li>Démarchage et gestion de la relation client avec les partenaires commerciaux</li>
<li>Formation sur le nouveau logiciel de gestion commercial – 2 mois de conduite du changement</li>
</ul>`
const tignes = `<h5><strong><u>Résultats</strong></u></h5> 450K€ de CA généré – 30% du CA d’une
 équipe de 4 personnes<br>
<h5><strong><u>Missions</strong></u></h5>
<ul>
<li>Organisation de stages en altitude pour les équipes sportives</li>
<li>Démarchage et gestion de la relation client avec les partenaires commerciaux</li>
<li>Formation sur le nouveau logiciel de gestion commercial – 2 mois de conduite du changement</li>
</ul>`
const orange = `<h5><strong><u>Résultats</strong></u></h5> Relance du partenariat évènementiel avec le Women’s Forum (250K€ de sponsoring),
15.000 inscrits sur le MOOC<br>
<h5><strong><u>Missions</strong></u></h5>
<ul>
<li>Gestion de l’événement Women’s Forum pour Orange</li>
<li>Création et gestion d’un MOOC Orange sur l’impressionnisme</li>
<li>Community Management (Twitter, Facebook...) pour la Communication Institutionnelle d’Orange</li>
</ul>`
