const staffMembersHtml = document.getElementById("staff_members");
let teamMembers = [];
fetchTeamData();


for (let i in teamMembers){
    const staffMember = document.createElement("li");
    const staffPic = document.createElement("img");
    staffPic.src = `../img/${teamMembers[i].photo}`;
    staffMember.innerText = (`Membro staff: ${teamMembers[i].name}, ${teamMembers[i].role}`);
    staffMembersHtml.append(staffMember, staffPic);
}

