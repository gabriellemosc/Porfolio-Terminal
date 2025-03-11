const help = `
<p style="line-height: 2.0;">
     <span class="highlight-command">help</span><span class="command-description">  - Displays a list of available commands</span><br>
    <span class="highlight-command">whoami</span><span class="command-description">- About Me</span><br>
    <span class="highlight-command">playlist</span><span class="command-description"> - A little beyond just a "whoami"</span><br>
    <span class="highlight-command">social</span><span class="command-description"> - Social Networks</span><br>
    <span class="highlight-command">projects</span><span class="command-description"> - Main Projects</span><br>
    <span class="highlight-command">skills</span><span class="command-description">  - Main Skills</span><br>
    <span class="highlight-command">career</span><span class="command-description">     - Provessional Experience</span><br>
    <span class="highlight-command">education</span><span class="command-description">       - Academic Background</span><br>
    <span class="highlight-command">clear</span><span class="command-description">        - Clear the Terminal</span><br>
    <span class="highlight-command">exit</span><span class="command-description">        - Exit the Terminal</span>

    <br>
</p>
`



const whoami = 'My name is Gabriel Lemos, I first got hooked on programming when I experienced <span class="highlight">Linux</span> for the first time, more specifically Arch Linux, where you practically customize your OS from scratch. Since then, I became more involved and attached to the world of software development and the free software culture. <br> Leaving the internet aside for a moment, I have a growing passion for cars and books, in which I have a huge bookshelf at home, and I am incredibly proud of it and intend to expand it even more; Another of my fixations is movies, more specifically, classic movies by great directors such as Coppola, Scorsese, Stanley Kubrick, and Nolan. <br> With the command <span class="highlight">playlist,</span> I share with you a list of movies I’ve picked for those who feel curious...';



const playlist = `
<p>
    The playlist is on<a href="https://www.imdb.com/" class="lista_filme" target="_blank">IMDB</a>,if you want to view it, you can click the link below. <br>

    <span class="link_filmes">Link</span> <a href="https://www.imdb.com/list/ls597452338/?ref_=up_urls_ttl_1" target="_blank" class="lista_filme">Movie Playlist</a><br>
</p>
`


const social = `
    <p> You can find me on: <br>
        <span class="redes">GitHub</span> <span class="links_redes"><a href="https://github.com/gabriellemosc" target="_blank">Github/GabrielLemos</a></span><br>
	<span class="redes">Instagram</span> <span class="links_redes"><a href="https://www.instagram.com/gabriel_lemosc77/" target="_blank">Instagram/GabrielLemos</a><br></span>
    <span class="redes">E-mail</span> <span class="links_redes"><a href="mailto:gabriel.lemos1910@gmail.com?subject=Oportunidade&body=Olá, Gabriel! Gostaria de falar sobre..." target="_blank">Contact for Email</a></span><br>
    </p>
`


const projects = `
    <p>
        <span class="projeto_nome">E-commerce</span> <span class="projeto_link"><a href="https://github.com/gabriellemosc/Ecommerce_Project" target="_blank">GabrielLemos/Ecommerce</a></span> <br>
        <span class="projeto_nome">Netflix Clone</span>  <span class="projeto_link"><a href="https://github.com/gabriellemosc/Netflix_Copy" target="_blank">GabrielLemos/Netflix-Clone</a></span><br>
        <span class="projeto_nome">Sales App</span>  <span class="projeto_link"><a href="https://github.com/gabriellemosc/App-de-Vendas-" target="_blank">GabrielLemos/App-Vendas</a></span><br>
        <span class="projeto_nome">Terminal Portfolio</span>  <span class="projeto_link"><a href="https://github.com/gabriellemosc/Porfolio-Terminal" target="_blank">GabrielLemos/Portfolio-Terminal</a></span><br>
        <span class="projeto_nome">Flappy Bird Game </span>  <span class="projeto_link"><a href="https://github.com/gabriellemosc/Flappy-Bird" target="_blank">GabrielLemos/Flappy-Bird-Game</a></span><br>
    </p>
`



const skills = `
    <p>
         <span class="habilidades_tecnicas">Technical Skills...</span> <br><br>
         <span class="habilidades">Linux</span><br>
        <span class="habilidades">Python</span> <br>
        <span class="habilidades">C and C++</span> <br>
        <span class="habilidades">Git</span> <br>
        <span class="habilidades">SQL</span><br>
        <span class="habilidades">Docker</span><br>
        <span class="habilidades">AWS</span><br>
        <span class="habilidades">Bash</span><br>

 
    </p>
`


const career = `<span class="carreira"><p>Currently, I am seeking professional development as a software developer. I am a professional passionate about technology, continuous learning, and problem-solving.</p>

<p>In addition to practical experiences, I have been regularly improving my knowledge in software development. I have been studying various areas, how things work, programming languages, as well as modern frameworks and tools. At the moment, I am working on projects as a freelancer, focusing on API integration, deploying applications on AWS EC2 servers, handling databases with CRUD operations, and developing logic for small websites.</p>

<p>I am aiming to become a professional developer, contribute to projects, and grow professionally. If you're interested and like what you've seen, I would love the opportunity to have a conversation!</p></span> <span class="send_email"><a href="mailto:gabriel.lemos1910@gmail.com?subject=Opportunity&body=Hello, Gabriel! I would like to talk about...">Send an email</a></span>`


const education = '<span class="estudo"><p>I am studying Systems Analysis and Development at <span class="facul"><a href="https://www.fsa.br/">FSA</a></span> and working on projects as a freelancer <span class="highlight">Backend</span> in parallel. These projects include API integrations, deploying on AWS EC2 servers, performing CRUD operations on Databases, and logical development of small websites.</p><p>Currently, I am focused on becoming a professional software developer. I have a great passion for technology, continuous learning, and problem-solving challenges.</p><p>I am aiming to professionalize in the development area, collaborate on projects, and constantly evolve. I would be very happy to have the chance to talk about new opportunities.</p></span> <span class="send_email"><a href="mailto:gabriel.lemos1910@gmail.com?subject=Opportunity&body=Hello, Gabriel! I would like to talk about...">Send an email</a></span>';



export const comm_en = {
    "help": help,
    "whoami": whoami,
    "playlist": playlist,
    "social": social,
    "projects": projects,
    "skills": skills,
    "career": career,
    "education": education,
}

export const error_en = `Command not found, type <span class="highlight">help</span> for a list of commands`;
