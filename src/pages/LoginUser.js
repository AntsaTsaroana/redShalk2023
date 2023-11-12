import { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/scss/loginUser.scss';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

const LoginUser = () => {
  const { getLoggedIn } = useContext(AuthContext);
  const redirect = useNavigate();
  const container = useRef(null);

  const signUp = () => {
    container.current.classList.add('right-panel-active');
  };

  const signIn = () => {
    container.current.classList.remove('right-panel-active');
  };
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  const [emaile, setEmaile] = useState('');
  const [passworde, setPassworde] = useState('');

  const registerSubmit = async (e) => {
    e.preventDefault();
    if (confPassword === password) {
      await axios({
        method: 'POST',
        url: `http://localhost:5000/api/auth/register`,
        data: {
          nom: nom,
          prenom: prenom,
          email: email,
          password: password,
        },
      })
        .then((res) => {
          console.log(res.data);
        })

        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log('Mot de passe non identique');
    }
  };
  const loginSubmit = async (e) => {
    e.preventDefault();
    e.preventDefault();
    try {
      const connected = await axios({
        method: 'POST',
        url: `http://localhost:5000/api/auth/login`,
        data: {
          email: emaile,
          password: passworde,
        },
      });
      if (connected.status === 200) {
        await getLoggedIn();

        console.log(connected.data);
        redirect('/dashboard');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="enregistrement">
        <div className="containerEnregistrement" id="container" ref={container}>
          <div className="form-container sign-up-container">
            <form action="#" onSubmit={registerSubmit}>
              <h1>Créer Compte</h1>
              <input
                type="text"
                placeholder="Votre nom"
                onChange={(event) => {
                  setNom(event.target.value);
                }}
                value={nom}
              />
              <input
                type="text"
                placeholder="Votre prénom"
                onChange={(event) => {
                  setPrenom(event.target.value);
                }}
                value={prenom}
              />
              <input
                type="email"
                placeholder="Votre adresse email"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                value={email}
              />
              <input
                type="password"
                placeholder="Votre mot de passe"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                value={password}
              />
              <input
                type="password"
                placeholder="Confirmation de mot de passe"
                onChange={(event) => {
                  setConfPassword(event.target.value);
                }}
                value={confPassword}
              />
              <button type="submit">S'inscrire</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="#" onSubmit={loginSubmit}>
              <h1>Se connecter</h1>
              <input
                type="email"
                placeholder="Email"
                onChange={(event) => {
                  setEmaile(event.target.value);
                }}
                value={emaile}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(event) => {
                  setPassworde(event.target.value);
                }}
                value={passworde}
              />
              <Link to="#">Mots de passe oublier?</Link>
              <button type="submit">Connexion</button>
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
