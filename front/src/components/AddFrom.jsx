import { useState } from 'react';
import put from '../functions/put'

function Addform({update}) {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [realName, setRealName] = useState("")
    const [universe, setUniverse] = useState("")

    const resetForm = () => {
        setId("")
        setName("")
        setRealName("")
        setUniverse("")
    }

    return(
        <div className="bg-gray-500 p-3 rounded-xl w-3/4 my-3 overflow-x-scroll overflow-y-hidden">
            <div className="flex m-2 gap-5 justify-around">
                <div>
                    <h1>ID</h1>
                    <input 
                        name="id" 
                        type="text" 
                        className="bg-white rounded-md" 
                        value={id} 
                        onChange={(e)=>setId(e.target.value)}
                    />
                </div>
                <div>
                    <h1>Name</h1>
                    <input 
                        name="name"
                        type="text" 
                        className="bg-white rounded-md" 
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />
                </div>
                <div>
                    <h1>Real Name</h1>
                    <input 
                        name="realName" 
                        type="text" 
                        className="bg-white rounded-md" 
                        value={realName}
                        onChange={(e)=>setRealName(e.target.value)}
                    />
                </div>
                <div>
                    <h1>Universe</h1>
                    <input 
                        name="universe" 
                        type="text" 
                        className="bg-white rounded-md" 
                        value={universe}
                        onChange={(e)=>setUniverse(e.target.value)}
                    />
                </div>
            </div>
            <hr className="py-1"/>
            <div className="flex justify-around font-bold ">
                <button 
                    type="submit" 
                    className="bg-green-500 p-3 rounded-md hover:bg-green-700" 
                    onClick={async()=>{
                        const data = await put(id, name, realName, universe)
                        update(data)
                        resetForm() // facultatif si tu veux vider après un confirm aussi
                    }}>
                    Confirm
                </button>
                <button 
                    type="button" 
                    className="bg-red-500 p-3 rounded-md hover:bg-red-700" 
                    onClick={resetForm}
                >
                    Cancel
                </button>
            </div>
        </div>
    )
}
export default Addform;
