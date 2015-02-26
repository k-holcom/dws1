function team(faveteam){
	team = faveteam.toLowerCase();
	if(team === 'maple leafs'){
		team = 'leafs';
	}else if(team === 'blue jackets'){
		team = 'blue';
	}else if(team === 'red wings'){
		team = 'red';
	}

	return team;

};



var faveTeam = prompt("What is your favorite team's name (i.e Leafs, Sabres, Ranger, etc)?");
team(faveTeam);
var selectedTeam = document.getElementById(team);
selectedTeam.innerHTML = "<strong style='color:#fff; font-size: 1.5em;'>" + selectedTeam.innerHTML + '</strong>'