// Lista de habilidades pré-cadastradas
let skillsList = [];

// Lista de itens do inventário
let inventoryItems = [];

// Função para adicionar uma nova habilidade
function addSkill() {
    const skillName = document.getElementById('new-skill').value.trim();

    if (!skillName) {
        alert("Por favor, insira o nome da habilidade.");
        return;
    }

    const skillList = document.getElementById('skill-list');

    if ([...skillList.children].some(skill => skill.querySelector('input[type="text"]').value === skillName)) {
        alert("Essa habilidade já está na lista.");
        return;
    }

    const newSkillItem = document.createElement('li');

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.value = skillName;
    nameInput.disabled = true;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.onclick = () => skillList.removeChild(newSkillItem);

    const prefixSpan = document.createElement('span');
    prefixSpan.textContent = ' ';

    const valueInput = document.createElement('input');
    valueInput.type = 'number';
    valueInput.value = 1;
    valueInput.min = -999;
    valueInput.max = 999;
    valueInput.onchange = () => updateSkillValue(newSkillItem);

    newSkillItem.appendChild(prefixSpan);
    newSkillItem.appendChild(valueInput);
    newSkillItem.appendChild(nameInput);
    newSkillItem.appendChild(removeButton);
    skillList.appendChild(newSkillItem);

    document.getElementById('new-skill').value = "";
}

// Função para remover uma habilidade
function removeSkill(event) {
    const skillList = document.getElementById('skill-list');
    skillList.removeChild(event.target.parentElement);
}

// Função para adicionar um novo item ao inventário
function addItem() {
    const itemName = document.getElementById('new-item').value.trim();
    const itemQuantity = parseInt(document.getElementById('item-quantity').value);

    if (!itemName) {
        alert("Por favor, insira o nome do item.");
        return;
    }

    if (isNaN(itemQuantity) || itemQuantity <= 0) {
        alert("Por favor, insira uma quantidade válida maior que zero.");
        return;
    }

    const existingItemIndex = inventoryItems.findIndex(item => item.name === itemName);
    if (existingItemIndex !== -1) {
        inventoryItems[existingItemIndex].quantity += itemQuantity;
    } else {
        inventoryItems.push({ name: itemName, quantity: itemQuantity });
    }

    updateInventoryList();
    document.getElementById('new-item').value = "";
    document.getElementById('item-quantity').value = 1;
}

// Função para remover um item do inventário
function removeItem(itemName) {
    inventoryItems = inventoryItems.filter(item => item.name !== itemName);
    updateInventoryList();
}

// Função para editar um item do inventário
function editItem(itemName) {
    const newItemName = prompt("Digite o novo nome do item:");
    let newQuantity = parseInt(prompt("Digite a nova quantidade:"));

    if (!newItemName || isNaN(newQuantity) || newQuantity <= 0) {
        alert("Por favor, insira valores válidos para o nome e a quantidade.");
        return;
    }

    const existingItem = inventoryItems.find(item => item.name === itemName);
    if (existingItem) {
        existingItem.name = newItemName;
        existingItem.quantity = newQuantity;
        updateInventoryList();
    } else {
        alert("O item selecionado não foi encontrado.");
    }
}

// Função para atualizar a lista de itens do inventário na interface
function updateInventoryList() {
    const inventoryList = document.getElementById('inventory-list');
    inventoryList.innerHTML = "";

    inventoryItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name}: ${item.quantity}`;

        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.onclick = () => editItem(item.name);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.onclick = () => removeItem(item.name);

        listItem.appendChild(editButton);
        listItem.appendChild(removeButton);
        inventoryList.appendChild(listItem);
    });
}
