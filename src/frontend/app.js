document.getElementById('character-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const name = document.getElementById('name').value;
    const characterClass = document.getElementById('class').value;
    const level = document.getElementById('level').value;
    const strength = document.getElementById('strength').value;
    const dexterity = document.getElementById('dexterity').value;
    const intelligence = document.getElementById('intelligence').value;
    const skills = document.getElementById('skills').value;

    // Aqui você pode salvar os dados em um banco de dados ou localStorage
    console.log({
        name,
        characterClass,
        level,
        strength,
        dexterity,
        intelligence,
        skills
    });

    alert('Ficha do personagem salva com sucesso!');
});
