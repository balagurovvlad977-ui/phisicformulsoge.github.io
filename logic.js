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


setSelect();
setListFormuls();