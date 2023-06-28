// Henter elementer fra HTML
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('sendButton');
const chatLog = document.querySelector('.chat-log');

// Array med kunnskapsbaserte spørsmål og svar
const sporsmalOgSvar = [
  {
  sporsmal: 'Hva er verdens største dyr',
  svar: 'Det største dyret på jorden er blåhvalen. ',
  funfact: 'Blåhvalen kan bli lengre enn et fotballbane! Hjertet alene kan være så stort som en bil!'
},
{
  sporsmal: 'Hvorfor er himmelen blå',
  svar: 'Himmelen ser blå ut fordi lysstråler fra solen spres av partikler i atmosfæren vår.',
},
{
  sporsmal: 'Hvordan lager bier honning',
  svar: 'Bier lager honning ved å samle nektar fra blomster og deretter fordøye det og lagre det i honningkakene sine.',
},
{
  sporsmal: 'Hva er det lengste elven i verden',
  svar: 'Den lengste elven i verden er Nilen i Afrika. Den er over 6 600 kilometer lang!',
},
{
  sporsmal: 'Hvorfor blir bladene på trærne grønne om sommeren og faller av om vinteren',
  svar: 'Om sommeren produserer trærne klorofyll, som gir bladene den grønne fargen. Om vinteren går trærne i dvale, og bladene faller av.',
},
{
  sporsmal: 'Hva er en dinosaur',
  svar: 'Dinosaurer var utdødde krypdyr som levde for mange millioner år siden. De kom i mange forskjellige størrelser og former.',
},
{
  sporsmal: 'Hvorfor trenger vi å sove',
  svar: 'Vi trenger å sove fordi kroppen vår trenger hvile og tid til å reparere seg selv. Søvn hjelper oss å føle oss friske og våkne.',
},
{
  sporsmal: 'Hvordan lager man sjokolade',
  svar: 'Sjokolade lages ved å blande kakaobønner med sukker og andre ingredienser. Deretter blir blandingen bearbeidet og formet til sjokolade.',
},
{
  sporsmal: 'Hvor mange planeter er det i solsystemet vår',
  svar: 'Det er åtte planeter i solsystemet vårt. De er Merkur, Venus, Jorden, Mars, Jupiter, Saturn, Uranus og Neptun.',
},
{
  sporsmal: 'Hvorfor får man hikke',
  svar: 'Man får hikke når mellomgulvet, en muskel under lungene våre, trekker seg sammen brått. Dette får stemmebåndene til å lukke seg, og det lager lyden vi kaller hikke.',
},
{
  sporsmal: 'Kan jeg få is',
  svar: 'Nei',
},
{
  sporsmal: 'Er det langt igjen',
  svar: 'Ja',
},
{
  sporsmal: 'Er vi fremme snart',
  svar: 'Nei',
},
{
  sporsmal: 'Hva er verdens største dyreart',
  svar: 'Den største dyrearten på jorden er blåhvalen.',
},
{
  sporsmal: 'Hva er verdens høyeste fjell',
  svar: 'Det høyeste fjellet i verden er Mount Everest.',
},
{
  sporsmal: 'Hva er det raskeste dyret på land',
  svar: 'Det raskeste dyret på land er geparden.',
},
];

// Lytter til klikk på send-knappen
sendButton.addEventListener('click', sendSporsmal);

// Lytter til tastetrykk på input-feltet
userInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    sendSporsmal();
  }
});

// Funksjon for å sende spørsmål
function sendSporsmal() {
  const sporsmal = userInput.value;

  // Sjekker om brukeren har skrevet inn et spørsmål
  if (sporsmal.trim() !== '') {
    visSporsmal(sporsmal);
    genererSvar(sporsmal);
    userInput.value = '';
  }
}

// Funksjon for å vise spørsmål i chatloggen
function visSporsmal(sporsmal) {
  const sporsmalElement = document.createElement('div');
  sporsmalElement.classList.add('sporsmal');
  sporsmalElement.innerText = sporsmal;
  chatLog.appendChild(sporsmalElement);

  // Oppretter et element for mellomrom
  const mellomromElement = document.createElement('br');
  chatLog.appendChild(mellomromElement);

  // Ruller chatloggen automatisk til bunnen
  chatLog.scrollTop = chatLog.scrollHeight;
}

// Funksjon for å generere svar basert på spørsmålet
function genererSvar(sporsmal) {
  // Finn svar basert på spørsmålet
  const svarData = finnSvar(sporsmal);

  // Viser animasjon når chatboten tenker
  chatLog.classList.add('tenker');

  // Simulerer en forsinkelse før svaret vises
  setTimeout(function () {
    // Viser svaret i chatloggen
    visSvar(sporsmal, svarData.svar, svarData.funfact);
    chatLog.classList.remove('tenker');
  }, 1000);
}

// Funksjon for å finne svar basert på spørsmålet
function finnSvar(sporsmal) {
  for (let i = 0; i < sporsmalOgSvar.length; i++) {
    const spmOgSvar = sporsmalOgSvar[i];
    if (sporsmal.toLowerCase().includes(spmOgSvar.sporsmal.toLowerCase())) {
      return spmOgSvar;
    }
  }
  return { svar: 'Beklager, jeg vet ikke svaret på det spørsmålet.' };
}

// Funksjon for å vise svaret i chatloggen
function visSvar(sporsmal, svar, funfact) {
  // Oppretter et element for spørsmålet
  const sporsmalElement = document.createElement('div');
  sporsmalElement.classList.add('sporsmal');
  sporsmalElement.innerHTML = `<strong>Du spurte:</strong><br>${sporsmal}`;
  chatLog.appendChild(sporsmalElement);

  // Oppretter et element for svaret
  const svarElement = document.createElement('div');
  svarElement.classList.add('svar');
  svarElement.innerHTML = `<strong>Svar:</strong><br>${svar}`;
  chatLog.appendChild(svarElement);

  // Oppretter et element for funfacten
  if (funfact) {
    const funfactElement = document.createElement('div');
    funfactElement.classList.add('funfact');
    funfactElement.innerHTML = `<strong>Fun Fact:</strong><br>${funfact}`;
    chatLog.appendChild(funfactElement);
  }

  // Oppretter et element for mellomrom
  const mellomromElement = document.createElement('br');
  chatLog.appendChild(mellomromElement);

  // Ruller chatloggen automatisk til bunnen
  chatLog.scrollTop = chatLog.scrollHeight;
}
