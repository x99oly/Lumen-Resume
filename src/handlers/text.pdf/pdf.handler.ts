import fs from 'fs'
import pdf from 'pdf-parse'

const readFile = async(filename:string) => {
    const file = fs.readFileSync(`public/${filename}`)
    if (!file) throw new Error(`Arquivo ${filename} não encontrado!`)
    const data = await pdf(file)
    if (data.text.length === 0) throw new Error(`Não há dados em ${filename}`)
    return data.text
}

export default readFile