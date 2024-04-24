const express = require("express");
const app = express();
const cors = require('cors')
app.use(express.json());
app.use(cors());

id_tarefa_global = 1;

let tarefas = [
    {
        "id": 1,
        "nome" : "Limpar chão",
        "responsável": "Cadu",
        "descrição": "Pegar vassoura e limpar",
        "pontuação": 50,
        "recorrência": 3,
        "prazo_limite": "01/05/24",
        "status": "em andamento"
    }
]

app.get("/", (req, res) => {
    res.send("Maravilha!");
})

app.get("/about", (req, res) => {
    res.send("Dentro do ABOUT!!");
})

// app.get("/tarefas", (req, res) => {
//     tarefa = req.body;
//     tarefa_retorno = {}
//     for (let i = 0; i < tarefas.length; i++) {
//         if (tarefa.nome == tarefas[i].nome){
//             console.log("Achei!!");
//             res.json(tarefas);
//             tarefa_retorno = tarefa[i]
//             break;
//         }        
//     }
//     res.json(tarefa_retorno);
// })

app.get("/tarefas", (req, res) => { //req.query.id
    tarefa =  req.query.nome;
    tarefa_retorno = {}
    for (let i = 0; i < tarefas.length; i++) {
        if (tarefa == tarefas[i].nome){
            console.log("Achei!!");
            tarefa_retorno = tarefas[i]
            break;
        }        
    }      
    res.json(tarefa_retorno);
})

app.get("/alltarefas", (req, res) => { //req.query.id 
    res.json(tarefas);
})


app.post("/tarefas", (req, res) => {
    tarefa = req.body;
    console.log("#### POST ####");
    console.log(tarefa);
    console.log("#### tarefa ####");
    id_tarefa_global++;
    tarefa.id = id_tarefa_global;
    //console.log(tarefa); 
    console.log("#### ADD tarefa ####");
    console.log(tarefa);
    console.log("#### DEPOIS tarefa ####");
    tarefas.push(tarefa); 
    console.log(tarefas);    
    res.json(tarefas);
})

app.put("/tarefas", (req, res) => {
    tarefa = req.body;
    tarefa_retorno = {}
    for (let i = 0; i < tarefas.length; i++) {
        if (tarefa.nome == tarefas[i].nome){
            console.log("Achei!!");
            res.json(tarefas);
            tarefa_retorno = tarefa[i]
            break;
        }        
    }
    res.json(tarefa_retorno);  
})


app.listen(3000, ()=> console.log("SERVER IS RUNNING!!!"));