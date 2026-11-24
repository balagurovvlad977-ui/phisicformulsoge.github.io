const select = document.querySelector('html').dataset.select;

function setSelect()
{
	document.getElementById(select).classList.add('now');
}




function createFormul(name)
{
	if(document.getElementById('infoFormul'))document.getElementById('infoFormul').remove();
	const info = formuls[select].find(el => el.name === name);

	const show = info.show;
	const description = info.description;
	const summary = info.summary;

	let infoFormul = document.createElement('div');

	infoFormul.classList.add('content');
	infoFormul.id = "infoFormul";

	infoFormul.innerHTML = `
	<h1>${name}</h1>
	${summary}
	<div class="size">${show}</div>
	${description}
	`;

	setAnim(show);

	document.querySelector('body').appendChild(infoFormul);

	
}


function createNavigation()
{
	const text =`
	<h1>Все разделы на сайте :</h1>
	<ul>
		<li><a href="index.html" id="main">Главная страница</a></li>
		<li><a href="mecha.html" id="mechanic">Механика</a></li>
		<li><a href="teplo.html" id="teplo">Термодинамика</a></li>
		<li><a href="optical.html" id="optical">Оптика</a></li>
		<li><a href="electro.html" id="electro">Электродинамика</a></li>
	</ul>`;

	document.getElementById('navigation').innerHTML = text;
}




function setListFormuls()
{
	if(select === "main") return;
	const listFormul = document.getElementById('allFormul');
	const fragment = document.createDocumentFragment();

	for(let i = 0;i < formuls[select].length;i++)
	{
		let formul = document.createElement('button');
		formul.onclick = ()=>{createFormul(formul.dataset.name)};
		formul.dataset.name = formuls[select][i].name;
		formul.textContent = formuls[select][i].name;
		fragment.appendChild(formul);
	}
	listFormul.appendChild(fragment);

}

function setAnim(show)
{
	const anim = document.getElementById('formul');

	anim.innerHTML = show;
}

createNavigation();
setSelect();
setListFormuls();