import { useState } from "react";
import { useFetch } from "./hooks/useFetch";

const App = () => {
    const [count, setCount] = useState(0);

    console.log("App");

    const { data, loading, error } = useFetch(
        "https://jsonplaceholder.typicode.com/users/"
    );

    if (loading) return <h1>Cargando usuarios...</h1>;
    if (error) return <h1>{error}</h1>;

    return (
        <>
            <h1>Buenos días</h1>
            <h2>Usuarios:</h2>

            <ul>
                {data.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
            <button onClick={() => setCount(count + 1)}>
              Counter: {count}
            </button>
        </>
    );
};

export default App;
