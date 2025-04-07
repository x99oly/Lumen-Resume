const readFile = async (filename: string): Promise<string> => {
    const mock = `Contato
  oliveira.samuel.profissional@gmail.com
  www.linkedin.com/in/muca-oliveira (LinkedIn)
  
  Principais competências
  Python
  PostgreSQL
  Bitrix
  
  Honors-Awards
  Aluno Destaque - Júri Simulado
  
  Samuel Araújo
  Full-Stack Developer | C# | .NET | ASP.NET | SQL | Next.js
  Belo Horizonte, Minas Gerais, Brasil
  
  Resumo
  Olá! Me chamo Samuel Araujo De Oliveira, sou um entusiasta por jogos e desafios que está entrando na área de tecnologia. Tendo conhecimentos teóricos e práticos com HTML, CSS, JS e C#, tenho foco em me capacitar na elaboração e construções de soluções criativas que possam gerar grande e positivo impacto na sociedade.
  
  Experiência
  Grupo Soluções
  Desenvolvedor full stack
  novembro de 2024 - Present (6 meses)
  Desenvolvimento de aplicações e automações em Python focadas em aprimorar a eficiência de processos e alcançar melhores resultados.
  
  PUC Minas
  Suporte de TI
  agosto de 2024 - novembro de 2024 (4 meses)
  Atuação como suporte de hardware. Zelando pela integridade de equipamentos, bom funcionamento de dispositivos gerais, manutenção de dispositivos de conectividade e seu bom uso pelo corpo docente e discente da PUC Minas.
  
  KR Consulting & Services
  Documentalista
  outubro de 2021 - abril de 2024 (2 anos 7 meses)
  
  Belfar Ltda
  Auxiliar de produção
  abril de 2020 - outubro de 2021 (1 ano 7 meses)
  
  Operador de produção
  março de 2020 - outubro de 2021 (1 ano 8 meses)
  
  Arroba Festas
  Caixa de atendimento ao cliente
  dezembro de 2017 - outubro de 2018 (11 meses)
  
  Formação acadêmica
  PUC Minas
  Bacharelado Sistemas De Informação (2023 - 2027)
  PUC Minas
  Bacharelado em Jogos Digitais (2023 - 2026)
  EFG SEBRAE
  Técnico em Administração (2019)`
    
    return mock
  }
  
  export default readFile
  