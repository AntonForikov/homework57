// import { useState } from 'react';

import UserForm from "./components/UserForm/UserForm";
import User from "./components/Users/User";

function App() {
    // const [count, setCount] = useState(0);

    return (
        <div className='row p-3 justify-content-between'>
            <UserForm />
            <User/>
        </div>
    );
}

export default App;
