import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputTextBox";
import SubHeading from "../components/SubHeading";



const Signin = () => {
    return <div className="bg-slate-300 h-screen flex justify-center items-center">
        <div className="bg-white rounded-lg w-[80%] sm:w-[50%] lg:w-[23%] text-center p-3">
        <div className="flex flex-col">
            <Heading label={'Sign In'}/>
            <SubHeading  label={'Enter your credentials to access your account'}/>
            <InputBox label={'Email'} placeholder={'johndoe@example.com'}/>
            <InputBox label={'Password'}/>
            <Button label={'Sign In'}></Button>
            <BottomWarning label={"Don't have an account?"} buttonText={'Sign Up'} to={'/signup'}/>
        </div>
    </div>
    </div>
}

export default Signin;