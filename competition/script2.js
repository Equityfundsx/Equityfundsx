console.clear();

const team = [
{
  rank: 1,
  name: 'Kimi Chinuana',
  handle: 'gustavo_huncho',
  img: 'https://www.equityfunds.online/assets/img/competition/c2.jpg',
  kudos: 36,
  sent: 31 },
{
  rank: 2,
  name: 'Lerato Ria Khumalo',
  handle: 'lerato_trades',
  img: 'https://www.equityfunds.online/assets/img/competition/c1.jpg',
  kudos: 31,
  sent: 21 },
{
  rank: 3,
  name: 'Sebastian Kruil',
  handle: 'Sebkruil',
  img: 'https://www.equityfunds.online/assets/img/competition/c3.jpg',
  kudos: 24,
  sent: 7 },
{
  rank: 4,
  name: 'Yolanda Cumisani',
  handle: 'his_queencumi',
  img: 'https://www.equityfunds.online/assets/img/competition/c4.jpg',
  kudos: 22,
  sent: 4 },
{
  rank: 5,
  name: 'Lando Norris',
  handle: 'kramal4440',
  img: 'https://www.equityfunds.online/assets/img/competition/c8.jpg',
  kudos: 18,
  sent: 16 },
{
  rank: 6,
  name: 'Charles Leclerc',
  handle: 'charles_lexxi',
  img: 'https://www.equityfunds.online/assets/img/competition/c5.jpg',
  kudos: 16,
  sent: 6 },
{
  rank: 7,
  name: 'George Russell',
  handle: 'georgemfanaka',
  img: 'https://www.equityfunds.online/assets/img/competition/c7.jpg',
  kudos: 10,
  sent: 21 },
{
  rank: 8,
  name: 'Tshepiso Moboee',
  handle: 'mtispafx',
  img: 'https://www.equityfunds.online/assets/img/competition/c6.jpg',
  kudos: 7,
  sent: 46 },
{
  rank: 9,
  name: 'Alexander Albon',
  handle: 'alex_albon234',
  img: 'https://www.equityfunds.online/assets/img/competition/c9.jpg',
  kudos: 4,
  sent: 2 },
{
  rank: 10,
  name: 'Carlos Sainz Jr.',
  handle: 'cjuniorsaniz',
  img: 'https://www.equityfunds.online/assets/img/competition/c10.jpg',
  kudos: 1,
  sent: 24 }];



const randomEmoji = () => {
  const emojis = ['👏', '👍', '🙌', '🤩', '🔥', '⭐️', '🏆', '💯'];
  let randomNumber = Math.floor(Math.random() * emojis.length);
  return emojis[randomNumber];
};

team.forEach(member => {
  let newRow = document.createElement('li');
  newRow.classList = 'c-list__item';
  newRow.innerHTML = `
		<div class="c-list__grid">
			<div class="c-flag c-place u-bg--transparent">${member.rank}</div>
			<div class="c-media">
				<img class="c-avatar c-media__img" src="${member.img}" />
				<div class="c-media__content">
					<div class="c-media__title">${member.name}</div>
					<a class="c-media__link u-text--small" href="https://instagram.com/${member.handle}" target="_blank">@${member.handle}</a>
				</div>
			</div>
			<div class="u-text--right c-kudos">
				<div class="u-mt--8">
					<strong>${member.kudos}</strong> ${randomEmoji()}
				</div>
			</div>
		</div>
	`;
  if (member.rank === 1) {
    newRow.querySelector('.c-place').classList.add('u-text--dark');
    newRow.querySelector('.c-place').classList.add('u-bg--yellow');
    newRow.querySelector('.c-kudos').classList.add('u-text--yellow');
  } else if (member.rank === 2) {
    newRow.querySelector('.c-place').classList.add('u-text--dark');
    newRow.querySelector('.c-place').classList.add('u-bg--teal');
    newRow.querySelector('.c-kudos').classList.add('u-text--teal');
  } else if (member.rank === 3) {
    newRow.querySelector('.c-place').classList.add('u-text--dark');
    newRow.querySelector('.c-place').classList.add('u-bg--orange');
    newRow.querySelector('.c-kudos').classList.add('u-text--orange');
  }
  list.appendChild(newRow);
});

// Find Winner from sent kudos by sorting the drivers in the team array
let sortedTeam = team.sort((a, b) => b.sent - a.sent);
let winner = sortedTeam[0];

// Render winner card
const winnerCard = document.getElementById('winner');
winnerCard.innerHTML = `
	<div class="u-text-small u-text--medium u-mb--16">Top Trader Last Week</div>
	<img class="c-avatar c-avatar--lg" src="${winner.img}"/>
	<h3 class="u-mt--16">${winner.name}</h3>
	<span class="u-text--teal u-text--small">${winner.name}</span>
`;