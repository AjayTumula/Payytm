import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputTextBox";
import SubHeading from "../components/SubHeading";




const Signup = () => {

    return <div className="bg-slate-300 h-screen flex justify-center items-center">
        <div className="bg-white rounded-lg w-[80%] sm:w-[50%] lg:w-[23%] text-center p-3">
        <div className="flex flex-col">
        <Heading label={'Sign Up'}/>
        <SubHeading label={'Enter your information to create an account'}/>
        <InputBox label={'First Name'} placeholder={'John'} />
        <InputBox label={'Last Name'} placeholder={'Doe'} />
        <InputBox label={'Email'} placeholder={'johndoe@example.com'} />
        <InputBox label={'Password'} placeholder={''} />
        <Button label={'Sign Up'}></Button>
        <BottomWarning label={'Already have an account?'} buttonText={'Login'} to={'/signin'}/>
    </div>
    </div>
    </div>
}

export default Signup;