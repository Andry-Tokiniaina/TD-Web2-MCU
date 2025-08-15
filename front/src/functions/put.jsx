import axios from "axios"

function put(id, name, realName, universe) {
    const charData = {characters :[ {
    "id" : id,
    "name" : name,
    "realName" : realName,
    'universe' : universe}]
    }
    
  axios.put("http://localhost:8080/characters", charData)
}

export default put;