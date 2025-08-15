import axios  from "axios";

function deleteChar(id) {
    axios.delete("http://localhost:8080/characters",{headers:{id}})
}

export default deleteChar;