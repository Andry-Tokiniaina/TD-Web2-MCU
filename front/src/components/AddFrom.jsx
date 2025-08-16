import { useState } from 'react';
import put from '../functions/put'

function Addform({update}) {
    const [id, setId] = useState()
    const [name, setName] = useState()
    const [realName, setRealName] = useState()
    const [universe, setUniverse] = useState()

    return(
        <div className="bg-gray-500 p-3 rounded-xl w-3/4 my-3 overflow-x-scroll overflow-y-hidden">
            <div className="flex m-2 gap-5 justify-around">
                <div>
                    <h1>ID</h1>
                    <input name="id" type="text" className="bg-white rounded-md" onChange={(e)=>setId(Number(e.target.value))}/>
                </div>
                <div>
                    <h1>Name</h1>
                    <input name="name"type="text" className="bg-white rounded-md" onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div>
                    <h1>Real Name</h1>
                    <input neme="realName" type="text" className="bg-white rounded-md" onChange={(e)=>setRealName(e.target.value)}/>
                </div>
                <div>
                    <h1>Universe</h1>
                    <input name="universe" type="text" className="bg-white rounded-md" onChange={(e)=>setUniverse(e.target.value)}/>
                </div>
            </div>
            <hr className="py-1"/>
            <div className="flex justify-around font-bold ">
                <button type="submit" className="bg-green-500 p-3 rounded-md hover:bg-green-700" onClick={async()=>{
                    const data = await put(id, name, realName, universe)
                    update(data)
                    }}>Confirm</button>
                <button className="bg-red-500 p-3 rounded-md hover:bg-red-700">Cancel</button>
            </div>
        </div>
    )
}
export default Addform;