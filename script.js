function submitCharacter() {
    // Função para processar e salvar os dados do personagem
    // Você pode usar esta função para fazer cálculos ou validações
    // e exibir as informações na seção de personagem cadastrado.
  }
  
  // Adicione mais funções JS conforme necessário para interação e cálculos.

  // Lista de habilidades pré-cadastradas
let skillsList = ["+1 ac MG", "+1 Combo MG"];

// Função para adicionar nova habilidade
function addSkill() {
  const newSkillInput = document.getElementById("new-skill");
  const newSkill = newSkillInput.value.trim();

  // Verifica se a habilidade já existe na lista
  if (newSkill && !skillsList.includes(newSkill)) {
    // Adiciona a nova habilidade à lista
    skillsList.push(newSkill);

    // Atualiza a lista de habilidades na interface
    updateSkillList();

    // Limpa o campo de entrada
    newSkillInput.value = "";
  } else {
    alert("Habilidade inválida ou já cadastrada!");
  }
}

// Função para atualizar a lista de habilidades na interface
function updateSkillList() {
  const skillListContainer = document.getElementById("skill-list");
  // Limpa a lista antes de atualizar
  skillListContainer.innerHTML = "";

  // Adiciona cada habilidade à lista
  skillsList.forEach((skill) => {
    const listItem = document.createElement("li");
    listItem.textContent = skill;
    skillListContainer.appendChild(listItem);
  });
}

// Função para remover uma habilidade
function removeSkill(skill) {
    // Remove a habilidade da lista
    skillsList = skillsList.filter((s) => s !== skill);
  
    // Atualiza a lista de habilidades na interface
    updateSkillList();
  }
  
  // Função para atualizar a lista de habilidades na interface
  function updateSkillList() {
    const skillListContainer = document.getElementById("skill-list");
    // Limpa a lista antes de atualizar
    skillListContainer.innerHTML = "";
  
    // Adiciona cada habilidade à lista com botão de remoção
    skillsList.forEach((skill) => {
      const listItem = document.createElement("li");
      const skillSpan = document.createElement("span");
      skillSpan.textContent = skill;
      listItem.appendChild(skillSpan);
  
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remover";
      removeButton.onclick = () => removeSkill(skill);
      listItem.appendChild(removeButton);
  
      skillListContainer.appendChild(listItem);
    });
  }