var team = JSON.parse(teamMembers);
var main = document.getElementsByTagName("main")[0]
var main_content = "<div><h1>Our Team</h1></div>"

for (var i = 0; i < team.length; i++) {
	if (i%2==0){
		main_content += "<div class='team'><p><span class='team_name'>"+team[i].name+"</span><br><a href='mailto:"+team[i].email+"'>"+team[i].email+"</a></p><a href='mailto:"+team[i].email+"'><img id='img_"+i+"' src='"+team[i].image+"' alt='"+team[i].name+"'></a></div>"	
	} else {
		main_content += "<div class='team'><a href='mailto:"+team[i].email+"'><img id='img_"+i+"' src='"+team[i].image+"' alt='"+team[i].name+"'></a><p><span class='team_name'>"+team[i].name+"</span><br><a href='mailto:"+team[i].email+"'>"+team[i].email+"</a></p></div>"
	}
}

main.innerHTML = main_content

for (let i = 0; i < team.length; i++) {
	let j = i + 1;
	document.getElementById("img_"+i).addEventListener("mouseover", function() {changebg("url('img/person"+j+".png')")});
	document.getElementById("img_"+i).addEventListener("mouseout", function() {changebg("none")});
}

function changebg (image) {
	document.getElementById("team").style.backgroundImage = image;
}
