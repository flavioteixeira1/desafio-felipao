let nomes = ["Gigante guerreiro de Aço", 
    "Metamorfose Atômica", "Viscount Bullet", "Skyward Sage","Iron Aegis" ,
    "Celestial Titan", "Quantum Falcon",
    "Stellar Guardian"]

    const randomHeroNumber = Math.floor(Math.random() * nomes.length);

    let heroName = nomes[randomHeroNumber];

    //console.log(heroName)

    const randomXP = Math.floor(Math.random()* 13000)

    //console.log(randomXP)
    let nivel = "Ferro"

    if(randomXP < 1000){
        nivel = "Ferro"
    } else if (randomXP > 1000 && randomXP <= 2000){nivel = "Bronze"}
      else if (randomXP > 2000 && randomXP <= 5000){nivel = "Prata"}
      else if (randomXP > 5000 && randomXP <= 7000){nivel = "Ouro"}
      else if (randomXP > 7000 && randomXP <= 8000){nivel = "Platina Diamante"}
      else if (randomXP > 8000 && randomXP <= 9000){nivel = "Ascendente"}
      else if (randomXP > 9000 && randomXP <= 10000){nivel = "Imortal"}
      else{nivel = "Radiante"}

    console.log("O herói " + heroName + " está no nível de " + nivel )
