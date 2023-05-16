const playerListTable = [];

function displayPlayer() {

    const playerContainer = document.getElementById("player-list");
    playerContainer.textContent = '';

    for (let i = 0; i < playerListTable.length; i++) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th class="text-center">${i + 1}</th>
        <td class="text-center">${playerListTable[i].playerName}</td>
        `;
        playerContainer.appendChild(tr);
    }

    playerContainer.appendChild(tr);
}

function addToPlayerList(element) {

    const playerName = element.parentNode.parentNode.children[0].innerText;
    const player = {
        playerName: playerName,
    }
    if (playerListTable.length < 5) {
        playerListTable.push(player);

        displayPlayer();
    }
    else {
        alert('You Cant pick more than 5 Players');
        return;
    }
}

function totalPlayerExpense() {
    const playerExpenseString = document.getElementById('player-budget').value;
    const playerExpense = parseFloat(playerExpenseString);
    const totalPlayerExpense = playerExpense * playerListTable.length;
    document.getElementById('player-expenses').innerText = totalPlayerExpense;

    return totalPlayerExpense;
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    totalPlayerExpense();
})



function totalExpense() {
    const managerExpenseString = document.getElementById('manager-budget').value;
    const managerExpense = parseFloat(managerExpenseString);

    const coachExpenseString = document.getElementById('coach-budget').value;
    const coachExpense = parseFloat(coachExpenseString);

    const totalExpense = totalPlayerExpense() + managerExpense + coachExpense;
    document.getElementById('total-expenses').innerText = totalExpense;
    return totalExpense;
}
document.getElementById('calculateTotal-btn').addEventListener('click', function () {
    totalExpense()

})



function disableButton(button) {

    document.getElementById(button).addEventListener('click', function () {
        if (playerListTable.length < 6) { document.getElementById(button).disabled = true; }
    })
}

disableButton('myBtn1');
disableButton('myBtn2');
disableButton('myBtn3');
disableButton('myBtn4');
disableButton('myBtn5');
disableButton('myBtn6');