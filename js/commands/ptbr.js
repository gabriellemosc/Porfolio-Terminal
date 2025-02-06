const ajuda = `
<p style="line-height: 2.0;">
     <span class="highlight-command">help</span><span class="command-description">  - Exibe uma lista de comandos disponíveis</span><br>
    <span class="highlight-command">whois</span><span class="command-description">- Sobre mim</span><br>
    <span class="highlight-command">whoami</span><span class="command-description"> - Sobre você</span><br>
    <span class="highlight-command">playlist</span><span class="command-description"> - Um pouco além de apenas um "whois"</span><br>
    <span class="highlight-command">social</span><span class="command-description"> - Redes sociais</span><br>
    <span class="highlight-command">projetos</span><span class="command-description"> - Principais projetos</span><br>
    <span class="highlight-command">habilidades</span><span class="command-description">  - Principais habilidades</span><br>
    <span class="highlight-command">carreira</span><span class="command-description">     - Experiência profissional</span><br>
    <span class="highlight-command">estudo</span><span class="command-description">       - Formação acadêmica</span><br>
    <span class="highlight-command">clear</span><span class="command-description">        - Limpa o terminal</span>
    <br>
</p>
`

const whoami = 'Meu nome é Gabriel Lemos, comecei a me prender no mundo de programacão, a partir quando experiencie <span class="highlight">Linux</span> pela primeira vez, mais específico o Arch Linux, onde você praticamente, customiza seu SO à partir do zero. Desde então, fui me envolvendo e me afeiçoando mais pelo mundo de desenvolvimento de software e a cultura de software livre. <br>Deixando um pouco a internet de lado, tenho uma paixão crescente por carros e livros, na qual em específico, tenho uma grande prateleira na minha casa inclusive, que tenho o enorme orgulho e pretendo expandir muito mais; Outra de minhas fixações são filmes, sendo mais específico, filmes clássicos de grandes diretores, como Coppola, Scorsese, Stanley Kubrick e Nolan. <br> Com o comando <span class="highlight">playlist,</span> compartilho com você uma lista de filmes que separei para aqueles que se sentirem curiosos...'


const playlist = `
<p>
    A playlist está no pelo<a href="https://www.imdb.com/" class="lista_filme" target="_blank">IMDB</a>,se quiser visualizá-la, pode clicar nesse link abaixo. <br>

    <span class="link_filmes">Link</span> <a href="https://www.imdb.com/list/ls597452338/?ref_=up_urls_ttl_1" target="_blank" class="lista_filme">Playlist de Filmes</a><br>

</p>
`

    const social = `
        <p> Você pode me encontrar nas redes:<br>
            <span  class="redes">GitHub</span> <span class="links_redes"><a href="https://github.com/gabriellemosc  target="_blank">Github/GabrielLemos</a></span><br>
        <span  class="redes">Instagram</span> <span class="links_redes"><a href="https://www.instagram.com/gabriel_lemosc77/" target="_blank">Instagram/GabrielLemos</a><br></span>
        <span  class="redes">E-mail</span> <span class="links_redes"><a href="mailto:gabriel.lemos1910@gmail.com?subject=Oportunidade&body=Olá, Gabriel! Gostaria de falar sobre..."  target="_blank">E-mail de contato</a></span><br>

        </p>
    `

const projetos = `
    <p>
        <span class="projeto_nome">E-commerce</span> <span class="projeto_link"><a href="https://github.com/gabriellemosc/Ecommerce_Project" target="_blank">GabrielLemos/Ecommerce</a></span> <br>
        <span class="projeto_nome">Netflix Clone</span>  <span class="projeto_link"><a href="https://github.com/gabriellemosc/Netflix_Copy" target="_blank">GabrielLemos/Netflix-Clone</a></span><br>
        <span class="projeto_nome">App Vendas</span>  <span class="projeto_link"><a href="https://github.com/gabriellemosc/App-de-Vendas-" target="_blank">GabrielLemos/App-Vendas</a></span><br>
        <span class="projeto_nome">Portfolio Terminal</span>  <span class="projeto_link"><a href="https://github.com/gabriellemosc/Porfolio-Terminal" target="_blank">GabrielLemos/Portfolio-Terminal</a></span><br>
        <span class="projeto_nome">Flappy Bird</span>  <span class="projeto_link"><a href="https://github.com/gabriellemosc/Flappy-Bird" target="_blank">GabrielLemos/Flappy-Bird-Game</a></span><br>


    </p>
`
const habilidades = `
    <p>
         <span class="habilidades_tecnicas">Habilidades Técnicas...</span> <br><br>
         <span class="habilidades">Linux</span><br>
        <span class="habilidades">Python</span> <br>
        <span class="habilidades">C e C++</span> <br>
        <span class="habilidades">Git</span> <br>
        <span class="habilidades">SQL</span><br>
        <span class="habilidades">Docker</span><br>
        <span class="habilidades">AWS</span><br>
        <span class="habilidades">Bash</span><br>

 
    </p>
`
const carreira = `<span class="carreira"><p>No momento, em busca da minha profissionalização como desenvolvedor de software. Sou um profissional apaixonado por tecnologia, aprendizado contínuo e resolução de problemas. </p>

<p>Além de experiências práticas, venho me aprimorando regularmente quanto aos conhecimentos em desenvolvimento de software. Tenho estudado diversas áreas, funcionamento, linguagens e tanto quanto frameworks e ferramentas modernas. No atual momento, realizo projetos como freelancer, trabalhando com integração de APIs, implantação de aplicações em servidores AWS EC2, manipulação de bancos de dados com operações CRUD e desenvolvimento lógico de pequenos websites.</p>

<p>Estou buscando me profissionalizar como desenvolvedor,contribuir para projetos e crescer profissionalmente. Se você ficou interessado e gostou do que viu, adoraria ter uma oportunidade para conversarmos!</p></span>  <span class="send_email"><a href="mailto:gabriel.lemos1910@gmail.com?subject=Oportunidade&body=Olá, Gabriel! Gostaria de falar sobre...">Envie um e-mail</a></span>`

const estudo = '<span class="estudo"><p>Estou cursando Análise e Desenvolvimento de Sistemas na <span class="facul"><a href="https://www.fsa.br/">FSA</a></span> e realizando projetos como freelancer <span class="highlight">Backend</span> paralelamente. Como integrações com endpoints de APIs, deploy em servidores EC2 da AWS, operações CRUD em Banco de Dados e desenvolvimento lógico de pequenos sites</p> <p> Atualmente, estou focado em me profissionalizar como desenvolvedor de software. Com grande paixão por tecnologia, aprendizado constante e desafios em resoluções de problemas.</p><p> Busco me profissionalizar na área de desenvolvimento, colaborar em projetos e evoluir constantemente. Ficaria muito feliz em ter a chance de conversar sobre novas oportunidades</p></span> <span class="send_email"><a href="mailto:gabriel.lemos1910@gmail.com?subject=Oportunidade&body=Olá, Gabriel! Gostaria de falar sobre...">Envie um e-mail</a></span>'

export const comm_ptbr = {
    "help": ajuda,
    "whoami": whoami,
    "ping": "• ¬(•-•) PONG!",
    "playlist": playlist,
    "social": social,
    "projetos": projetos,
    "habilidades": habilidades,
    "carreira": carreira,
    "estudo": estudo,
}

export const error_ptbr = `Comando não encontrado, digite <span class="highlight">help</span> para ver a lista de comandos`;

