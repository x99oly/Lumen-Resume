import readFile from './handlers/textpdf/pdf-handler.js'
import DuckbotDefault from 'duckbot-gpt'
import dotenv from 'dotenv'
import Gitter from 'gitter'
import pino from 'pino'

dotenv.config()

async function Main()
{   
    const logger = pino.default({
        transport: {
            target: 'pino/file',
            options: {
                destination: 'logs/appu.log'
            }
        }
    })

    const gitter = new Gitter(
        String(process.env.GITHUB_KEY), String(process.env.GITHUB_USER_AGENT)
    )
    const res = await gitter.getUserRepos("x99oly")
    const repos = res.data as {
    name: string
    html_url: string
    language: string
    description: string
    }[]
    const inforepos = repos.map(repo => ({
        name: repo.name,
        link: repo.html_url,
        language: repo.language,
        description: repo.description
      }))
    
    let infostring = ""
    inforepos.forEach((e)=> {
        infostring += `${e.name} ${e.language} ${e.description} ${e.link}|`
    })

    const key = String(process.env.OPEN_AI_KEY)
    const _filestring = (await readFile("Profile.pdf")).text.replace(" ","").replace("\n","")
    const _vaga = "desenvolvedor .net com experiencia em node e atendimento ao publico."
    
    const Duckbot = DuckbotDefault.default ?? DuckbotDefault
    const _bot = new Duckbot(key,"Dado uma descrição de vaga e uma lista de repos selecione os repos que melhor se encaixam na vaga. Responda somente com os nomes dos repos separados por '%'"        
    )

    let response = await _bot.getBotAwnser(
        `vaga:${_vaga}-repos:${infostring}`
    )
    console.log(response)

    _bot.changeBotConfig({purpose:`Sua função é extrair apenas as informações do currículo que são relevantes para a vaga descrita. Ignore dados irrelevantes. Responda exclusivamente com um JSON com os campos: nome, email, linkedin, cargo_desejado, competencias, experiencia (com empresa, cargo, periodo, atividades - Em atividades, descreva destacando os pontos que mais se encaixam para a vaga), formacao (com instituicao, curso, periodo). Retorne apenas o JSON. Nenhum texto fora dele.`})
    response = await _bot.getBotAwnser(
        `vaga:${_vaga}-curriculo:${_filestring}`
    )
    console.log(response)

}
    
Main()