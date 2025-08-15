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
    const idChar = req.headers.get("id")
    let newCharList = []
    for (const char of charactersList) {
        if (char.id != idChar) {
            newCharList.push(char)
        }
    }
    charactersList = newCharList
    res.send(charactersList)
})

app.listen(8080)