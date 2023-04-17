const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido?",
    "O que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?(numérico)",
]

const ask = ( index = 0) => {
    process.stdout.write("\n\n" + questions[index] + "  => ") 
}

ask()

const answers = []


process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
        console.log(answers)
        process.exit()
    }    
})

process.on('exit', () => {
    console.log(`
        Bacana Jéssyca, 

        O que você aprendeu hoje foi:
        ${answers[0]}

        O que te deixou aborrecida foi:
        ${answers[1]}

        O que você pode fazer para melhorar é:
        ${answers[2]}

        O que te deixou feliz hoje foi:
        ${answers[3]}

        Você ajudou ${answers[4]} pessoa(s) hoje!

        Volte aqui todos os dias para refletir sobre suas ações 
        e poder melhorá-las. 

    `)
})
