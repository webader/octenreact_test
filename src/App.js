import React, {useState} from 'react';

const App = () => {
    // let [login, setLogin] = useState('Put your login');
    // let [password, setPassword] = useState('Put your password');
    // //для того щоб форма стала контрольованою привязуємо useState
    //
    // function onLoginChange(e) {
    //     setLogin(e.target.value);
    // }
    // function onPasswordChange(e) {
    //     setPassword(e.target.value);
    // }

    //2 варіант
    let [formState, setFormState] = useState({login: '', password: ''})
    function onSubmit(e) {
        console.log(e.target.login.value);
        console.log(e.target.password.value);
        e.preventDefault();
        console.log(formState);
    }

    function onChange(e) {
        console.log({[e.target.name]:e.target.value});
        setFormState({...formState, [e.target.name]:e.target.value})
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" name={'login'} value={formState.login} onChange={onChange}/>
                <input type="text" name={'password'} value={formState.password} onChange={onChange}/>
                <button>submit</button>
            </form>
        </div>
    );
};

export default App;
