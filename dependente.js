const express = require("express");
const app = express();
const cors = require('cors')
app.use(express.json());
app.use(cors());

id_dependente_global = 1;

let dependentes = [
    {
        "id": 1,
        "nome" : "Miguel",
        "dataNascimento" : "10/10/1980",
        "idade": 45,
        "papel": false,
        "sexo": "Masculino",
    }
]

app.get("/", (req, res) => {
    res.send("Maravilha!");
})

app.get("/about", (req, res) => {
    res.send("Dentro do ABOUT!!");
})

// app.get("/dependentes", (req, res) => {
//     dependente = req.body;
//     dependente_retorno = {}
//     for (let i = 0; i < dependentes.length; i++) {
//         if (dependente.nome == dependentes[i].nome){
//             console.log("Achei!!");
//             res.json(dependentes);
//             dependente_retorno = dependente[i]
//             break;
//         }        
//     }
//     res.json(dependente_retorno);
// })

app.get("/dependentes", (req, res) => { //req.query.id
    dependente =  req.query.nome;
    dependente_retorno = {}
    for (let i = 0; i < dependentes.length; i++) {
        if (dependente == dependentes[i].nome){
            console.log("Achei!!");
            dependente_retorno = dependentes[i]
            break;
        }        
    }      
    res.json(dependente_retorno);
})

app.get("/alldependentes", (req, res) => { //req.query.id 
    res.json(dependentes);
})


app.post("/dependentes", (req, res) => {
    dependente = req.body;
    console.log("#### POST ####");
    console.log(dependente);
    console.log("#### dependente ####");
    id_dependente_global++;
    dependente.id = id_dependente_global;
    //console.log(dependente); 
    console.log("#### ADD dependente ####");
    console.log(dependente);
    console.log("#### DEPOIS dependente ####");
    dependentes.push(dependente); 
    console.log(dependentes);    
    res.json(dependentes);
})

app.put("/dependentes", (req, res) => {
    dependente = req.body;
    dependente_retorno = {}
    for (let i = 0; i < dependentes.length; i++) {
        if (dependente.nome == dependentes[i].nome){
            console.log("Achei!!");
            res.json(dependentes);
            dependente_retorno = dependente[i]
            break;
        }        
    }
    res.json(dependente_retorno);  
})


app.listen(3000, ()=> console.log("SERVER IS RUNNING!!!"));