const staffMembersHtml = document.getElementById("staff_members");
const teamUnformattedUl = document.getElementById("team_unformatted");
let teamMembers = [];
fetchTeamData(teamUnformattedUl, teamMembers);
createMemberProfile(teamMembers);

/**
 * Prende i dati del team dall'Html
 * @param {HTMLUListElement} htmlUl lista membri non formattata
 * @param {Array} array array vuoto in input, array con oggetti in output
 */
function fetchTeamData(htmlUl, array){
    const teamArray = htmlUl.innerText.split("\n");
    
    for(i = 0; i < teamArray.length; i++){
        const teamMemberArray = teamArray[i].split(", ");
        const teamMemberObject = Object.assign({}, teamMemberArray);
        array.push(teamMemberObject);
    }
}

/**
 * Crea profilo per ogni membro del team
 * @param arrayTeam array con oggetti dei membri del team
 */
function createMemberProfile(arrayTeam){

    for (let i in arrayTeam){

        const staffMember = document.createElement("li");
        staffMember.classList.add("list-group-item","d-flex","flex-column","justify-content-between");
        staffMember.innerHTML = (`${arrayTeam[i][0]}<br>${arrayTeam[i][1]}`);
        
        const staffPic = document.createElement("img");
        staffPic.classList.add("img-fluid");
        staffPic.src = `../img/${arrayTeam[i][2]}`;
        
        staffMember.append(staffPic);
        staffMembersHtml.append(staffMember);
    }
}