const texto = window.document.getElementById("texto")

function capitalize(evento) {

  const nome_completo = texto.value.replace(/[\s]+/g, " ").split(" ") // O replace evita que mais de um espaço incapacite que a divisão seja feita | Ex: "Lucas  Gabriel" vira "Lucas Gabriel" devido ao replace
  let partes_nome_cap = [] // nome capitalizado
  
  const key_pressed = evento.key
  
  if (key_pressed == " " || key_pressed == "Enter") { // Enter para o último nome

    for (let parte_nome of nome_completo) {

      parte_nome = parte_nome[0].toUpperCase() + parte_nome.slice(1) // Deixa o primeiro caractere maiúsculo e junta com uma substring da parte do nome a partir do segundo caractere
      partes_nome_cap.push(parte_nome)
      
    }

    let nome_completo_capitalizado = partes_nome_cap.join("")
    texto.value = nome_completo_capitalizado[0] // Não considera o primeiro caractere para não atribuir um espaço ao Array nome_completo

    //Colocar o espaço no nome capitalizado (evitando duplicidade do espaço adicionado com o que aciona o evento)
    for (let i = 1; i < nome_completo_capitalizado.length; i++) {
      if (nome_completo_capitalizado[i].match(/[A-Z]/) != null) { // Verifica se o caractere do nome capitalizado é maiúsculo
        texto.value += " "
        texto.value += nome_completo_capitalizado[i]
      } else {
        texto.value += nome_completo_capitalizado[i]
      }
    }
  }
}

texto.addEventListener("keypress", capitalize)