const express = require("express");
const app = express();
const cors = require('cors')
app.use(express.json());
app.use(cors());

id_responsavel_global = 1;

let responsaveis = [
    {
        "id": 1,
        "nome" : "Miguel",
        "email" : "miguel@teste.com",
        "senha" : "12345",
        "dataNascimento" : "10/10/1980",
        "idade": 45,
        "papel": true,
        "sexo": "Masculino",
        "numero_dependentes": 3,
    }
]

app.get("/", (req, res) => {
    res.send("Maravilha!");
})

app.get("/about", (req, res) => {
    res.send("Dentro do ABOUT!!");
})

// app.get("/responsaveis", (req, res) => {
//     responsavel = req.body;
//     responsavel_retorno = {}
//     for (let i = 0; i < responsaveis.length; i++) {
//         if (responsavel.nome == responsaveis[i].nome){
//             console.log("Achei!!");
//             res.json(responsaveis);
//             responsavel_retorno = responsavel[i]
//             break;
//         }        
//     }
//     res.json(responsavel_retorno);
// })

app.get("/responsaveis", (req, res) => { //req.query.id
    responsavel =  req.query.nome;
    responsavel_retorno = {}
    for (let i = 0; i < responsaveis.length; i++) {
        if (responsavel == responsaveis[i].nome){
            console.log("Achei!!");
            responsavel_retorno = responsaveis[i]
            break;
        }        
    }      
    res.json(responsavel_retorno);
})

app.get("/allresponsaveis", (req, res) => { //req.query.id 
    res.json(responsaveis);
})


app.post("/responsaveis", (req, res) => {
    responsavel = req.body;
    console.log("#### POST ####");
    console.log(responsavel);
    console.log("#### responsavel ####");
    id_responsavel_global++;
    responsavel.id = id_responsavel_global;
    //console.log(responsavel); 
    console.log("#### ADD responsavel ####");
    console.log(responsavel);
    console.log("#### DEPOIS responsavel ####");
    responsaveis.push(responsavel); 
    console.log(responsaveis);    
    res.json(responsaveis);
})

app.put("/responsaveis", (req, res) => {
    responsavel = req.body;
    responsavel_retorno = {}
    for (let i = 0; i < responsaveis.length; i++) {
        if (responsavel.nome == responsaveis[i].nome){
            console.log("Achei!!");
            res.json(responsaveis);
            responsavel_retorno = responsavel[i]
            break;
        }        
    }
    res.json(responsavel_retorno);  
})


app.listen(3000, ()=> console.log("SERVER IS RUNNING!!!"));