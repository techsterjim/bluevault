import { useState } from "react"; // I plan to use state in the future
import { Form } from "react-router-dom";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import animation from "../assets/animation.json";
import { Player } from "@lottiefiles/react-lottie-player";

const Intro = () => {
    // Plan to manage state in the future
    // Example state usage:
    // const [userName, setUserName] = useState('');

    return ( 
        <div className="intro">
            <div>
                <h1>Handle all your finances <span className="accent">in one spot.</span></h1>
                <p>Keep tabs on your spending, set budgets, and understand how you spend your money.</p>
                <Form method="post">
                    <input type="text" name="userName" placeholder="Enter your name" required aria-label="Enter your name" autoComplete="given-name" />
                    <input type="hidden" name="_action" value="newUser" /> 
                    <button type="submit" className="btn btn--dark">
                        <span> Create Account</span>
                        <UserPlusIcon className="ml-2" width={20} /> 
                    </button>
                </Form>
            </div>
            <Player src={animation} loop autoplay /> 
        </div>
     );
}
 
export default Intro;
