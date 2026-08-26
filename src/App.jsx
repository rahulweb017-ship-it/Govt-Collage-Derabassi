import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'

export default function App() {
  return (
    <Router>
      <Layout>
        <HomePage />
      </Layout>
    </Router>
  )
}
