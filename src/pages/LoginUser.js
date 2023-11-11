import { useRef } from "react";
import { Link } from "react-router-dom";
import '../assets/scss/loginUser.scss'

const LoginUser = () => {


    const container = useRef(null);

    const signUp = () => {
        container.current.classList.add("right-panel-active");
    };

    const signIn = () => {
        container.current.classList.remove("right-panel-active");
    };

    return (
        <>
            <div className="enregistrement">
                <div className="containerEnregistrement" id="container" ref={container}>
                    <div className="form-container sign-up-container">
                        <form action="#">
                            <h1>Créer Compte</h1>
                            <input
                                type="text"
                                placeholder="Votre nom"
                            />
                            <input
                                type="text"
                                placeholder="Votre prénom"
                            />
                            <input
                                type="email"
                                placeholder="Votre adresse email"
                            />
                            <input
                                type="password"
                                placeholder="Votre mot de passe"
                            />
                            <input
                                type="password"
                                placeholder="Confirmation de mot de passe"
                            />
                            <button>S'inscrire</button>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form action="#">
                            <h1>Se connecter</h1>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <Link to="#">Mots de passe oublier?</Link>
                            <button>Connexion</button>
                        </form>
                    </div>

                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>
                                    To keep connected with us please login with your personal info
                                </p>
                                <button className="ghost" id="signIn" onClick={signIn}>
                                    Se connecter
                                </button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button className="ghost" id="signUp" onClick={signUp}>
                                    S'inscrire
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginUser;