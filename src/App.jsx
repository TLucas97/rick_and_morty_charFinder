import './App.css'
import { useState, useEffect } from 'react'

function App() {
    const [repo, setRepo] = useState('')
    const [user, setUser] = useState('')
    const changeRepo = (e) => {
        setRepo(e.target.value)
    }

    useEffect(() => {
        if (repo !== '') {
            fetch(`https://rickandmortyapi.com/api/character/?name=${repo}`)
                .then((res) => res.json())
                .then((data) => setUser(data?.results[0]))
        } else {
            console.log('waiting for search')
        }
    }, [repo])
    return (
        <div className="App">
            <header className="App-header">
                <img
                    src={
                        user
                            ? user?.image
                            : 'https://1000logos.net/wp-content/uploads/2022/03/Rick-and-Morty.png'
                    }
                    alt="character"
                    style={{ borderRadius: '50%', width: '200px' }}
                />
                <p>{user ? user?.name : ''}</p>
                <p>
                    {user ? 'Origin:' : ''} {user ? user?.origin.name : ''}
                </p>
                <small>
                    {user ? 'Location:' : ''} {user ? user?.location.name : ''}
                </small>
                <small>
                    {user ? 'Status:' : ''} {user ? user?.status : ''}
                </small>
                <input
                    onChange={() => setRepo}
                    type="text"
                    placeholder="Type a character name"
                    onKeyDown={changeRepo}
                    className="inputField__bootstrap"
                />
                <h2>Search for a Rick and Morty Character</h2>
            </header>
        </div>
    )
}

export default App
