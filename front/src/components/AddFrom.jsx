function Addform() {
    return(
        <div className="bg-gray-500 p-3 rounded-xl w-3/4 my-3">
            <div className="flex m-2 gap-5 justify-around">
                <div>
                    <h1>ID</h1>
                    <input type="text" className="bg-white rounded-md"/>
                </div>
                <div>
                    <h1>Name</h1>
                    <input type="text" className="bg-white rounded-md" />
                </div>
                <div>
                    <h1>Real Name</h1>
                    <input type="text" className="bg-white rounded-md" />
                </div>
                <div>
                    <h1>Universe</h1>
                    <input type="text" className="bg-white rounded-md" />
                </div>
            </div>
            <hr className="py-1"/>
            <div className="flex justify-around">
                <button className="bg-green-500 p-3 rounded-md hover:bg-green-700">Confirm</button>
                <button className="bg-red-500 p-3 rounded-md hover:bg-red-700">Cancel</button>
            </div>
        </div>
        
    )
}
export default Addform;