import reactDOM from 'react-dom/client'
import { NavBar } from './components/NavBar'
import { Corpo } from './components/Corpo'
function App() {
    return (
        <>
            <NavBar />
            <Corpo />
        </>
    )
}

let root = reactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)
// reactDOM.render(<App />, document.querySelector('.root'))

