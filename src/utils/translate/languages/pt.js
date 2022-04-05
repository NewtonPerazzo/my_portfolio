const today = new Date();
const age = Number(today.getFullYear()) - 1999;

const messages = {
    pt: {
        "translations": {
            skills: "Habilidades",
            title: "Desenvolvedor Front-end",
            welcome: "Bem-vindo",
            toMyPortfolio: "ao meu portfólio.",
            iAm: "Eu sou",
            lets: "Vamos",
            code: "codar?",
            aboutMe: "Sobre mim",
            hello: "Olá, pessoas!",
            myName: `Meu nome é Newton Perazzo e possuo ${age} anos de idade.`,
            from: "Sou de Feira de Santana, Bahia, Brasil.",
            study: "Estudo Sistemas de Informações na UNIFACS desde 2019 e terminarei em 2022.",
            loveCode: "Eu amo programar e criar sistemas. Para mim, é hobby e trabalho.",
            thanks: "Obrigado por sua visita! Sinta-se livre para me enviar uma mensagem em minhas redes sociais!"
    
        }
    }
}

export { messages };