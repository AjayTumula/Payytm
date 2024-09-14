import { useState } from "react";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputTextBox";
import SubHeading from "../components/SubHeading";
import axios from "axios";




const Signup = () => {

    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    return <div className="bg-slate-300 h-screen flex justify-center items-center">
        <div className="bg-white rounded-lg w-[80%] sm:w-[50%] lg:w-[23%] text-center p-3">
        <div className="flex flex-col">
        <Heading label={'Sign Up'}/>
        <SubHeading label={'Enter your information to create an account'}/>

        <InputBox onChange={e => {
            setFirstName(e.target.value)
        }} label={'First Name'} placeholder={'John'} />

        <InputBox label={'Last Name'} placeholder={'Doe'} 
            onChange={(e) => {
                setLastName(e.target.value)
            }}
        />

        <InputBox onChange={(e) => {
            setUsername(e.target.value)
        }} label={'Email'} placeholder={'johndoe@example.com'} />

        <InputBox onChange={(e) => {
            setPassword(e.target.value)
        }} label={'Password'} placeholder={''} />

        <Button onClick={ async () => {
          const response = await axios.post("http//localhost:3001/api/v1/user/signup", {
                username,
                password,
                firstName,
                lastName
            });
            localStorage.setItem("token", response.data.token)
        }}
        label={'Sign Up'}></Button>
        <BottomWarning label={'Already have an account?'} buttonText={'Login'} to={'/signin'}/>
    </div>
    </div>
    </div>
}

export default Signup;