function Tab({characters}) {
    return (
        <table border={1} className="bg-gray-300 w-2/3 h-3/4 gap-5 rounded-2xl overflow-y-scroll overflow-x-hidden">
            <thead>
                <th className="w-1/7">Id</th>
                <th className="w-1/7">Name</th>
                <th className="w-1/7">Real Name</th>
                <th className="w-1/7">Universe</th>
                <th className="w-1/7"></th>
            </thead>
            <tbody>
            {characters.map((character, index)=>(
                <tr key = {index} className="border-t-2">
                    <td className="text-center">{character.id}</td>
                    <td className="text-center">{character.name}</td>
                    <td className="text-center">{character.realName}</td>
                    <td className="text-center">{character.universe}</td>
                    <td className="flex justify-around mt-1">
                        <button className="bg-red-500 w-1/3 p-1 rounded-md hover:bg-red-800 min-w-15">Delete</button>
                        <button className="bg-blue-500 w-1/3 p-1 rounded-md hover:bg-blue-300">Edit</button>
                    </td>
                </tr>
            ))}
            </tbody>

        </table>
    )
}
export default Tab;