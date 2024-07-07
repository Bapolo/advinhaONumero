document.addEventListener("DOMContentLoaded", () =>
    {
        const saida = document.querySelector("#saida")
        const numeroDeTentativas = document.querySelector("#numeroDeTentativas")
        const entradaDoNumero = document.querySelector("#entradaDoNumero")
        const botaoAdvinhar = document.querySelector("#botaoAdvinhar")
        const iniciarJogo = document.querySelector("#iniciarJogo")
        const main = document.querySelector("main")
        const boataoIniciar = document.querySelector(".boataoIniciar")
        const saidaInicial = document.querySelector("#saidaInicial")
        const dificuldade = document.querySelector("select")
        const voltar = document.querySelector("#voltar")
     
        let tentativas = 3
        let numeroAleatorio = Math.round(Math.random() * 100)
        
        iniciarJogo.addEventListener("click", configuracoesIniciais)

        botaoAdvinhar.addEventListener("click", () =>
            {
             jogo()
            })

        entradaDoNumero.addEventListener("keydown", () =>
        {
            if (event.key === 'Enter')
            {
                jogo()
            }
        })    

            function jogo()
            {
                if (entradaDoNumero.value != "")
                    {
                        if (entradaDoNumero.value < numeroAleatorio)
                        {
                            saida.innerHTML = "Digitaste um número menor"
                        }
                        else if (entradaDoNumero.value > numeroAleatorio)
                        {
                            saida.innerHTML = "Digitaste um número maior"
                        }
                        else
                        {
                            tentativas++
                            sair(`<i class="fa-regular fa-face-laugh-beam" style="color: #15ac1a;"></i> <b style="color: #15ac1a;">Parabéns</b>, o número é ${numeroAleatorio} <br> Click em <b>Start</b> para jogar novamente.`)
                         
                        }
    
                        tentativas--
                        numeroDeTentativas.innerHTML = tentativas
                        entradaDoNumero.value = ""
                    }
                    else
                    {
                        alert("O campo de entrada está vazio, digite um número!")
                    }
    
                    if (tentativas === 0)
                    {
    
                        sair(`<i class="fa-solid fa-face-sad-tear" style="color: #a30c0c;"></i> Você <b style="color: #a30c0c;>perdeu</b>, o número é ${numeroAleatorio} <br> Click em <b>Start</b> para jogar novamente.`)
                            
                    }
            }

            function configuracoesIniciais()
            {
                main.style.display = "flex"
                boataoIniciar.style.display = "none"
                tentativas = dificuldade.value
                numeroAleatorio = Math.round(Math.random() * 100)
                numeroDeTentativas.innerHTML = tentativas
                entradaDoNumero.value = ""
                saida.innerHTML = `Escolha um número entre 1 e 100 <br><i class="fa-solid fa-wand-magic-sparkles"></i>`
            }
            

            function sair(mensagem)
            {
                saidaInicial.innerHTML = mensagem
                main.style.display = "none"
                boataoIniciar.style.display = "flex"
            }

            voltar.addEventListener("click", () =>
            {
                sair("click em Start para jogar...")
            })

    })