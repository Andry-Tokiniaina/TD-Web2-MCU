function AlertDel({char}) {
    return (
        <div className="fixed m-auto flex flex-col items-center bg-white p-10 gap-5 w-1/4">
            <div>Warring</div>
            <div>Do you really want to delete {char.name}?</div>
            <div className="flex flex-row justify-around gap-10"> 
                <butto className="bg-green-500 p-2 rounded-md hover:bg-green-700">Yes</butto>
                <butto className="bg-red-500 p-2 rounded-md hover:bg-red-700">No</butto>
            </div>
        </div>
    )
}
export default AlertDel