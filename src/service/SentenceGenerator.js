export default class SentenceGenerator {

    static SENTENCES = [
        "NATHAN TRAVAILLE",
        "FLORIAN JOUE",
        "MAMAN",
        "AIMER",
        "BONHEUR",
        "CACAHOUETE",
        "LINUX",
        "AJACCIO",
        "VELONE ORNETO",
        "TATA VELERIE",
        "TONTON GREG",
        "FIFA",
        "CHAUSSETTE",
        "COCHONNE",
        "CORSICA FERRIES",
        "SUCRE",
        "ESPAGNOL",
        "SANDRINE",
        "JEAN FRANCOIS",
        "VIANDE",
        "RECHAUFFEMENT"
    ]

    static provideNewSentence() {
        return SentenceGenerator.SENTENCES[Math.floor(Math.random()*100)%SentenceGenerator.SENTENCES.length].split('')
    }
}