import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express, { json } from 'express';

const app = express()
app.use(json())

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'characters.json')

let charactersList;

fs.readFile(filePath, 'utf8', (err, data) =>{
    if (err) {
        console.log(err);
        
        return [];
    }
    try {
        charactersList = JSON.parse(data).characters
        console.log(charactersList);
        return JSON.parse(data);

    }
    catch (err) {
        return [];
    }
})

app.get("/characters", (req, res)=>{
    res.send(charactersList)
})

app.post("characters", (req, res) => {
    const chars = req.body.characters;
    charactersList = charactersList.concat(chars)
    res.send("Characters added")
})

app.listen(8080)