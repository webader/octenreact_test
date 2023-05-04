import React, {createRef} from 'react';

const App = () => {
    // це називається не контрольований компонент тому що реакт не контролює стан наших інпутів
    let login = createRef(); // reference object
    let password = createRef()

    function onSubmit(e) {
        console.log(login.current.value);
        console.log(password.current.value);
        //create obj && send to api
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" name={'login'} ref={login}/>
                <input type="text" name={'password'} ref={password}/>
                <button>log in</button>
            </form>
        </div>
    );
};

export default App;
