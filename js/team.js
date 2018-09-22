var team = JSON.parse(teamMembers);
console.log(team);
var main = document.getElementsByTagName("main")[0]
var main_content = "<div><h1>Our Team</h1></div>"

for (var i = 0; i < team.length; i++) {
	main_content += "<div class='team'><a href='mailto:"+team[i].email+"'><img src='"+team[i].image+"' alt='"+team[i].name+"'></a><h2>"+team[i].name+"</h2><p><a href='mailto:"+team[i].email+"'>"+team[i].email+"</a></p></div>"	
}

main.innerHTML = main_content