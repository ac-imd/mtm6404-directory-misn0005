//list function
function list(clients) {
    const listItems = clients.map((client) => `
    <li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
      ${client.name}
      <strong>$ ${client.balance}</strong>
    </li>
  `);

    return listItems.join('');
}



//order function
function order(clients, property) {
    clients.sort((a, b) => {
        if (a[property] < b[property]) {
            return -1;
        } else if (a[property] > b[property]) {
            return 1;
        } else {
            return 0;
        }
    });

    return clients;
}



//total function
function total(clients) {
    const totalBalance = clients.reduce((accumulator, client) => {
        return accumulator + client.balance;
    }, 0);

    return totalBalance;
}



//info function
function info(index) {
    const client = clients.find((client) => {
        return client.index === index;
    });
}



//search function
function search(query) {
    const results = clients.filter((client) => {
        return client.name.toLowerCase().includes(query.toLowerCase());
    });

    return results;
}