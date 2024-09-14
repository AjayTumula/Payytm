import Button from "./Button";



const Users = ({value}) => {
    return <div>
        <div>
            Users
        </div>
        <div>
            <input placeholder="Search Users..."/>
        </div>
        
        <div className="flex">
            <div className="flex">
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                    <div className="flex flex-col justify-center h-full text-xl">
                        H
                    </div> 
                </div>
                <div className="flex flex-col justify-center h-full">
                    <div>
                        {value} 
                    </div>      
                </div>
            </div>

            <div className="flex flex-col justify-center h-full">
                <Button label={"Send Money"}/>
            </div>
           
        </div>
    </div>
}

export default Users;