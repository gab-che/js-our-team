/**
 * Prende i dati del team dall'Html (da fare meglio)
 * @return {Array} restituisce array di cui ogni membro è un oggetto
 */
function fetchTeamData(){
    const teamWayne = {
        name: document.querySelector("#wayne span:first-child").innerHTML,
        role: document.querySelector("#wayne span:nth-child(2)").innerHTML,
        photo: document.querySelector("#wayne span:nth-child(3)").innerHTML
    }
    const teamWalter = {
        name: document.querySelector("#walter span:first-child").innerHTML,
        role: document.querySelector("#walter span:nth-child(2)").innerHTML,
        photo: document.querySelector("#walter span:nth-child(3)").innerHTML
    }
    
    const teamAngelaL = {
        name: document.querySelector("#angelaL span:first-child").innerHTML,
        role: document.querySelector("#angelaL span:nth-child(2)").innerHTML,
        photo: document.querySelector("#angelaL span:nth-child(3)").innerHTML
    }
    
    const teamScott = {
        name: document.querySelector("#scott span:first-child").innerHTML,
        role: document.querySelector("#scott span:nth-child(2)").innerHTML,
        photo: document.querySelector("#scott span:nth-child(3)").innerHTML
    }
    
    const teamBarbara = {
        name: document.querySelector("#barbara span:first-child").innerHTML,
        role: document.querySelector("#barbara span:nth-child(2)").innerHTML,
        photo: document.querySelector("#barbara span:nth-child(3)").innerHTML
    }
    
    const teamAngelaC = {
        name: document.querySelector("#angelaC span:first-child").innerHTML,
        role: document.querySelector("#angelaC span:nth-child(2)").innerHTML,
        photo: document.querySelector("#angelaC span:nth-child(3)").innerHTML
    }
    
    teamMembers.push(teamWayne, teamWalter, teamAngelaL, teamScott, teamBarbara, teamAngelaC);
    return teamMembers
}