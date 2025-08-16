import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express, { json } from 'express';
import cors from 'cors';

const app = express()

app.use(cors())
app.use(json())

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'characters.json')

let charactersList = JSON.parse(fs.readFileSync(filePath, 'utf8')).characters

app.get("/characters", (req, res)=>{
    res.send(charactersList)
})

app.get("/characters/:id", (req, res)=>{
    const id = Number(req.params.id)
    const char = charactersList.find(c => c.id === id)
    if (char) {
        res.send(char)
    } else {
        res.status(404).send("Character not found")
    }
})

app.get("/characters/name/:name", (req, res)=>{
    const name = req.params.name
    const char = charactersList.find(c => c.name === name)
    if (char) {
        res.send(char)
    } else {
        res.status(404).send("Character not found")
    }
})

app.get("/characters/realName/:realName", (req, res)=>{
    const realName = req.params.realName
    const char = charactersList.find(c => c.realName === realName)
    if (char) {
        res.send(char)
    } else {
        res.status(404).send("Character not found")
    }
})

app.get("/characters/universe/:universe", (req, res)=>{ 
    const universe = req.params.universe
    const char = charactersList.find(c => c.universe === universe)
    if (char) {
        res.send(char)
    } else {
        res.status(404).send("Character not found")
    }
})

app.post("/characters", (req, res) => {    
    const chars = req.body?.characters;
    if (!chars) {
        res.status(400).send("erreur")
    }
    charactersList = charactersList.concat(chars)
    res.send(charactersList)
})

app.put("/characters", (req, res)=>{
    const charReq = req.body?.characters;
    if (charReq) {
        let newCharList = []
        for(let char of charReq){
            if (!char.id) {
                char.id = charactersList.length ? Math.max(...charactersList.map(c => c.id)) + 1 : 1;
            }
            if (char.id <= 0) {
                res.status(400).send("Invalid character ID")
                return
            }
            if (char.name === undefined || char.realName === undefined || char.universe === undefined) {
                res.status(400).send("Missing character properties")
                return
            }
            if (char.name.trim() === "" || char.realName.trim() === "" || char.universe.trim() === "") {
                res.status(400).send("Character properties cannot be empty")
                return
            }
            let find = false
            for(let char2 of charactersList){
                if(char.id == char2.id){
                    find = true
                    char2 = char
                }
                newCharList.push(char2)
            }
            if (!find) {
                newCharList.push(char)
            }
        }
        charactersList = newCharList
    }
    else{
        res.status(400)
    }
    res.send(charactersList)
})

app.delete("/characters", (req,res)=>{
    const idChar = req.headers["id"]
    let newCharList = []
    for (const char of charactersList) {
        if (char.id != Number(idChar)) {
            newCharList.push(char)
        }
    }
    charactersList = newCharList
    res.send(charactersList)
})

app.listen(8080)