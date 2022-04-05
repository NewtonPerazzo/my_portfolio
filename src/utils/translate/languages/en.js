const today = new Date();
const age = Number(today.getFullYear()) - 1999;

const messages = {
    en: {
        "translations": {
            skills: "Skills",
            title: "Front-end Developer",
            welcome: "Welcome",
            toMyPortfolio: "to my portfolio.",
            iAm: "I'm",
            lets: "Let's",
            code: "code?",
            aboutMe: "About Me",
            hello: "Hello, there!",
            myName: `My name is Newton Perazzo and I'm ${age} years old`,
            from: "I'm from Feira de Santana, Bahia, Brazil.",
            study: "I study Information System's at UNIFACS college since 2019 and I'll finish It in 2022.",
            loveCode: "I love code and I love to make systems. To me, It's both work and hobby.",
            thanks: "Thank you for your visit! Feel free to send me a message on my social networks!"
        }
    }
}

export { messages };