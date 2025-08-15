import deleteChar from "../functions/delete"

function AlertDel({char, removeCharToDelete}) {
    return (
        <div className="fixed m-auto flex flex-col items-center bg-white p-10 gap-5 w-1/4 rounded-2xl">
            <div>Warring</div>
            <div>Do you really want to delete {char.name}?</div>
            <div className="flex flex-row justify-around gap-10"> 
                <button className="bg-green-500 p-2 rounded-md hover:bg-green-700" 
                onClick={()=>
                {
                    deleteChar(char.id)
                    removeCharToDelete()
                }}>Yes</button>
                <button className="bg-red-500 p-2 rounded-md hover:bg-red-700" onClick={()=>removeCharToDelete()}>No</button>
            </div>
        </div>
    )
}
export default AlertDel