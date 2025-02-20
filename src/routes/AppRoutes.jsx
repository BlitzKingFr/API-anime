
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import AnimeDetails from '../pages/AnimeDetails'
const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/anime/:id' element={<AnimeDetails/>}></Route>
        </Routes>
    </Router>
  )
}

export default AppRoutes