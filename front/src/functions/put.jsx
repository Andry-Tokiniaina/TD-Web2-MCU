import axios from "axios"

function put(id, name, realName, universe) {
    const charData = {characters :[ {
    "id" : id,
    "name" : name,
    "realName" : realName,
    'universe' : universe}]
    }
    
  return axios.put("http://localhost:8080/characters", charData)
    .then(res => res.data)
}

export default put;