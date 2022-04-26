import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import LoginMenu from "../LoginMenu/LoginMenu";
import { NavLink } from "react-router-dom";
import "./Login.css";

function Login() {
    const navigator = useNavigate();
    const { register, handleSubmit, formState } = useForm();

    function submit(credentials) {
        for (let x in users) {
            if (
                users[x].username === credentials.username &&
                users[x].password === credentials.password
            ) {
                // console.log(users[x], true);
                navigator("/chat");
                return;
            }
        }
        alert(
            "Username or Password do not match, Please try again or register"
        );
    }

    const users = [
        { username: "Ori", password: "a12345", displayname: "Ori" },
        { username: "David", password: "a12345", displayname: "David" },
        { username: "Avia", password: "a12345", displayname: "Avia" },
        { username: "Yoni", password: "a12345", displayname: "Yoni" },
        { username: "Noa", password: "a12345", displayname: "Noa" },
        { username: "Shaked", password: "a12345", displayname: "Shaked" },
        { username: "Aviv", password: "a12345", displayname: "Aviv" },
    ];

    return (
        <div className="Login Box">
            <header>
                <LoginMenu />
            </header>
            <main>
                <h2>Login Form</h2>
                <br />
                <form onSubmit={handleSubmit(submit)}>
                    <label>Username: </label>
                    <input type="text" {...register("username", {
                        required: {
                            value: true,
                            message: "Please enter user name",
                        },
                        minLength: {
                            value: 4,
                            message: "Please enter Min 4 charachters",
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9]+$/,
                            message: "Must have letters or numbers only",
                        },
                    })} />
                    <span>{formState.errors.username?.message}</span>


                    <label>Password: </label>
                    <input type="password" {...register("password", {
                        required: {
                            value: true,
                            message: "Please enter password",
                        },
                        minLength: {
                            value: 4,
                            message: "Please enter Min 4 charachters",
                        },
                        pattern: {
                            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&^_-]{4,}$/,
                            message: "Must have minimum one letter and minimum one number",
                        },
                    })} />
                    <span>{formState.errors.password?.message}</span>


                    <button class="btn btn-success">Login</button>
                </form>
                <p>
                    Not registered yet?{" "}
                    <NavLink to="/register"> Click here</NavLink> to register
                </p>
            </main>
            <footer></footer>
        </div>
    );
}

export default Login;
