const quest = document.getElementById('quest');
const answer = document.getElementById('answer');

let say = 0;
let listQuest = [];
let now = "";

quest.addEventListener('click',()=>{
	setQuest();
});

function setQuest()
{
	if(say === 0)
	{
		now = generateAnswer();

		quest.textContent = "Нажимай когда будешь готов дать ответ";

		answer.innerHTML = `
			<h2>${now[0]}</h2>
		`;
	}

	if(say === 1)
	{
		quest.textContent = "Дальше ?";
		answer.innerHTML = `
			<div class="size">${now[1]}</div>
			${now[2]}
		`;
	}

	if(say >= 1)say = -1;
	
	say++;
}

function createAllAnswer()
{
	const countCategory = Object.keys(formuls);

	
	countCategory.forEach(category =>{
		formuls[category].forEach(answ =>{
			listQuest.push([answ.name,answ.show,answ.description]);
		});
	});
}

function generateAnswer()
{
	if(listQuest.length === 0)
	{
		console.log("LIMIT");
		alert("Это были все формулы");
		createAllAnswer();
	}

	const index = Math.floor(Math.random() * listQuest.length);
	const select = listQuest[index];
	listQuest[index] = listQuest[listQuest.length - 1];
	listQuest.pop();

	console.log(listQuest.length);

	return select;
}

createAllAnswer();













