import { Injectable } from '@nestjs/common';
import { Diretor, Filme, Usuario } from 'src/model';

@Injectable()
export class BancoProvider {
  private _filmes: Filme[] = [
    {
      id: "FIL001",
      titulo: "Cidade de Deus",
      ano: 2002,
      genero: [
        { id: "GEN001", nome: "Crime" },
        { id: "GEN002", nome: "Drama" },
      ],
      diretor: {
        id: "DIR001",
        nome: "Fernando Meirelles",
        nascimento: "1955-11-09",
        nacionalidade: "Brasileiro",
      },
      elenco: [
        {
          id: "ATR001",
          nome: "Alexandre Rodrigues",
          nascimento: "1983-05-21",
          papel: "Buscapé",
          nacionalidade: "Brasileiro",
        },
        {
          id: "ATR002",
          nome: "Leandro Firmino",
          papel: "Zé Pequeno",
          nascimento: "1978-06-23",
          nacionalidade: "Brasileiro",
        },
        {
          id: "ATR003",
          nome: "Phellipe Haagensen",
          papel: "Bené",
          nascimento: "1984-06-26",
          nacionalidade: "Brasileiro",
        },
      ],
      sinopse:
        "Buscapé é um jovem pobre, negro e muito sensível, que cresce em um universo de muita violência. Ele vive na Cidade de Deus, favela carioca conhecida pela violência e pela criminalidade.",
    },
    {
      id: "FIL002",
      titulo: "Tropa de Elite",
      ano: 2007,
      genero: [
        { id: "GEN001", nome: "Crime" },
        { id: "GEN003", nome: "Ação" },
      ],
      diretor: {
        id: "DIR002",
        nome: "José Padilha",
        nascimento: "1967-08-01",
        nacionalidade: "Brasileiro",
      },
      elenco: [
        {
          id: "ATR004",
          nome: "Wagner Moura",
          papel: "Capitão Nascimento",
          nascimento: "1976-06-27",
          nacionalidade: "Brasileiro",
        },
        {
          id: "ATR005",
          nome: "André Ramiro",
          papel: "André Matias",
          nascimento: "1981-01-14",
          nacionalidade: "Brasileiro",
        },
        {
          id: "ATR006",
          nome: "Caio Junqueira",
          papel: "Neto",
          nascimento: "1976-11-15",
          nacionalidade: "Brasileiro",
        },
      ],
      sinopse:
        "Em 1997, antes de visitar o Rio de Janeiro, o Papa João Paulo II solicita uma operação para eliminar o tráfico de drogas nas favelas próximas ao local onde pretende se hospedar.",
    },
    {
      id: "FIL003",
      titulo: "Central do Brasil",
      ano: 1998,
      genero: [{ id: "GEN002", nome: "Drama" }],
      diretor: {
        id: "DIR003",
        nome: "Walter Salles",
        nascimento: "1956-04-12",
        nacionalidade: "Brasileiro",
      },
      elenco: [
        {
          id: "ATR007",
          nome: "Fernanda Montenegro",
          papel: "Dora",
          nascimento: "1929-10-16",
          nacionalidade: "Brasileira",
        },
        {
          id: "ATR008",
          nome: "Vinícius de Oliveira",
          papel: "Josué",
          nascimento: "1985-07-18",
          nacionalidade: "Brasileiro",
        },
        {
          id: "ATR009",
          nome: "Marília Pêra",
          papel: "Irene",
          nascimento: "1943-01-22",
          nacionalidade: "Brasileira",
        },
      ],
      sinopse:
        "Dora escreve cartas para pessoas analfabetas na estação Central do Brasil, no Rio de Janeiro. Quando uma de suas clientes morre em um acidente, ela decide ajudar o filho dela a encontrar o pai.",
    },
    {
      id: "FIL004",
      titulo: "O Auto da Compadecida",
      ano: 2000,
      genero: [
        { id: "GEN004", nome: "Comédia" },
        { id: "GEN002", nome: "Drama" },
      ],
      diretor: {
        id: "DIR004",
        nome: "Guel Arraes",
        nascimento: "1953-12-07",
        nacionalidade: "Brasileiro",
      },
      elenco: [
        {
          id: "ATR010",
          nome: "Matheus Nachtergaele",
          papel: "João Grilo",
          nascimento: "1969-01-03",
          nacionalidade: "Brasileiro",
        },
        {
          id: "ATR011",
          nome: "Selton Mello",
          papel: "Chicó",
          nascimento: "1972-12-30",
          nacionalidade: "Brasileiro",
        },
        {
          id: "ATR007",
          nome: "Fernanda Montenegro",
          papel: "Compadecida",
          nascimento: "1929-10-16",
          nacionalidade: "Brasileira",
        },
      ],
      sinopse:
        "As aventuras de João Grilo e Chicó, dois nordestinos pobres que tentam sobreviver aplicando golpes e se metendo em confusões.",
    },
    {
      id: "FIL005",
      titulo: "Bacurau",
      ano: 2019,
      genero: [
        { id: "GEN005", nome: "Suspense" },
        { id: "GEN006", nome: "Ficção Científica" },
      ],
      diretor: {
        id: "DIR005",
        nome: "Kleber Mendonça Filho",
        nascimento: "1968-11-03",
        nacionalidade: "Brasileiro",
      },
      elenco: [
        {
          id: "ATR012",
          nome: "Bárbara Colen",
          papel: "Teresa",
          nascimento: "1986-12-14",
          nacionalidade: "Brasileira",
        },
        {
          id: "ATR013",
          nome: "Thomas Aquino",
          papel: "Pacote",
          nascimento: "1986-06-26",
          nacionalidade: "Brasileiro",
        },
        {
          id: "ATR014",
          nome: "Sônia Braga",
          papel: "Domingas",
          nascimento: "1950-06-08",
          nacionalidade: "Brasileira",
        },
      ],
      sinopse:
        "Os moradores de Bacurau, um pequeno povoado do sertão brasileiro, descobrem que a comunidade não consta mais em qualquer mapa. Aos poucos, percebem algo estranho na região: enquanto drones sobrevoam o céu, estrangeiros chegam à cidade.",
    },
    {
      id: "FIL006",
      titulo: "Minha Mãe é uma Peça",
      ano: 2013,
      genero: [{ id: "GEN004", nome: "Comédia" }],
      diretor: {
        id: "DIR006",
        nome: "André Pellenz",
        nascimento: "1971-09-30",
        nacionalidade: "Brasileiro",
      },
      elenco: [
        {
          id: "ATR015",
          nome: "Paulo Gustavo",
          papel: "Dona Hermínia",
          nascimento: "1978-10-30",
          nacionalidade: "Brasileiro",
        },
        {
          id: "ATR016",
          nome: "Rodrigo Pandolfo",
          papel: "Juliano",
          nascimento: "1984-08-24",
          nacionalidade: "Brasileiro",
        },
        {
          id: "ATR017",
          nome: "Mariana Xavier",
          papel: "Marcelina",
          nascimento: "1980-05-26",
          nacionalidade: "Brasileira",
        },
      ],
      sinopse:
        "Dona Hermínia é uma mulher de meia-idade, divorciada do marido que a trocou por uma mulher mais jovem. Hiperativa e controladora, ela não larga do pé dos filhos Marcelina e Juliano.",
    },
    {
      id: "FIL007",
      titulo: "Que Horas Ela Volta?",
      ano: 2015,
      genero: [{ id: "GEN002", nome: "Drama" }],
      diretor: {
        id: "DIR007",
        nome: "Anna Muylaert",
        nascimento: "1964-04-21",
        nacionalidade: "Brasileira",
      },
      elenco: [
        {
          id: "ATR018",
          nome: "Regina Casé",
          papel: "Val",
          nascimento: "1954-02-25",
          nacionalidade: "Brasileira",
        },
        {
          id: "ATR019",
          nome: "Camila Márdila",
          papel: "Jéssica",
          nascimento: "1988-08-21",
          nacionalidade: "Brasileira",
        },
        {
          id: "ATR020",
          nome: "Michel Joelsas",
          papel: "Fabinho",
          nascimento: "1995-03-18",
          nacionalidade: "Brasileiro",
        },
      ],
      sinopse:
        "A pernambucana Val se mudou para São Paulo a fim de dar melhores condições de vida à filha Jéssica. Treze anos depois, a jovem decide ir para São Paulo prestar vestibular, o que abala a rotina da casa onde sua mãe trabalha como empregada doméstica.",
    },
    {
      id: "FIL008",
      titulo: "O Homem do Futuro",
      ano: 2011,
      genero: [
        { id: "GEN006", nome: "Ficção Científica" },
        { id: "GEN004", nome: "Comédia" },
      ],
      diretor: {
        id: "DIR008",
        nome: "Cláudio Torres",
        nascimento: "1962-12-19",
        nacionalidade: "Brasileiro",
      },
      elenco: [
        {
          id: "ATR004",
          nome: "Wagner Moura",
          papel: "Zero",
          nascimento: "1976-06-27",
          nacionalidade: "Brasileiro",
        },
        {
          id: "ATR021",
          nome: "Alinne Moraes",
          papel: "Helena",
          nascimento: "1982-12-22",
          nacionalidade: "Brasileira",
        },
        {
          id: "ATR022",
          nome: "Maria Luísa Mendonça",
          papel: "Sandra",
          nascimento: "1970-01-30",
          nacionalidade: "Brasileira",
        },
      ],
      sinopse:
        "Zero é um cientista brilhante, mas infeliz, que acidentalmente descobre uma forma de viajar no tempo. Ele volta ao passado para tentar corrigir um erro que arruinou sua vida, mas acaba criando novas situações inesperadas.",
    },
    {
      id: "FIL009",
      titulo: "Se Eu Fosse Você",
      ano: 2006,
      genero: [
        { id: "GEN004", nome: "Comédia" },
        { id: "GEN002", nome: "Drama" },
      ],
      diretor: {
        id: "DIR009",
        nome: "Daniel Filho",
        nascimento: "1937-09-30",
        nacionalidade: "Brasileiro",
      },
      elenco: [
        {
          id: "ATR023",
          nome: "Tony Ramos",
          papel: "Cláudio",
          nascimento: "1948-08-25",
          nacionalidade: "Brasileiro",
        },
        {
          id: "ATR024",
          nome: "Glória Pires",
          papel: "Helena",
          nascimento: "1963-08-23",
          nacionalidade: "Brasileira",
        },
        {
          id: "ATR025",
          nome: "Thiago Lacerda",
          papel: "Marcos",
          nascimento: "1978-01-19",
          nacionalidade: "Brasileiro",
        },
      ],
      sinopse:
        "Cláudio e Helena formam um casal que vive em pé de guerra. Após uma briga, eles misteriosamente trocam de corpos e são obrigados a viver a vida um do outro.",
    },
    {
      id: "FIL010",
      titulo: "Carandiru",
      ano: 2003,
      genero: [
        { id: "GEN001", nome: "Crime" },
        { id: "GEN002", nome: "Drama" },
      ],
      diretor: {
        id: "DIR010",
        nome: "Hector Babenco",
        nascimento: "1946-02-07",
        nacionalidade: "Brasileiro",
      },
      elenco: [
        {
          id: "ATR026",
          nome: "Luiz Carlos Vasconcelos",
          papel: "Doutor Drauzio Varella",
          nascimento: "1954-06-25",
          nacionalidade: "Brasileiro",
        },
        {
          id: "ATR027",
          nome: "Milton Gonçalves",
          papel: "Chico",
          nascimento: "1933-12-09",
          nacionalidade: "Brasileiro",
        },
        {
          id: "ATR028",
          nome: "Ivan de Almeida",
          papel: "Zico",
          nascimento: "1944-06-01",
          nacionalidade: "Brasileiro",
        },
      ],
      sinopse:
        "Um médico se oferece para realizar um trabalho de prevenção à AIDS na Casa de Detenção de São Paulo, o maior presídio da América Latina. Lá, ele conhece de perto a realidade dos detentos e testemunha a violenta rebelião de 1992.",
    },
  ];


  get filmes() {
    return this._filmes
  }

  private _diretores: Diretor[] = [
    {
      id: "DIR001",
      nome: "Fernando Meirelles",
      nascimento: "1955-11-09",
      nacionalidade: "Brasileiro",
    },
    {
      id: "DIR002",
      nome: "José Padilha",
      nascimento: "1967-08-01",
      nacionalidade: "Brasileiro",
    },
  ]

  get diretores() {
    return this._diretores
  }

  private _usuarios: Usuario[] = [
    {
      email: 'mateus@mail.com',
      senha: '$2b$05$WzY51lG2tdf4jABUPNGMg.S1ZI4cq4XXrENM.378ZjfcQphWSJVkm'
    },
    {
      email: 'rafael@mail.com',
      senha: '$2b$05$pcSPZTbnvQn3Pcfw2DWuzO3081GH5I94s9z6fYfVbR2NZHq9yYFRq'
    },
    {
      email: 'jonas@mail.com',
      senha: '$2b$05$SR.6MmNe34AYT0wVunYZ.O/g0J4XLOVoEGOaKwdM0h.idIelgdMoC'
    }
  ]

  get usuarios() {
    return this._usuarios
  }
}
