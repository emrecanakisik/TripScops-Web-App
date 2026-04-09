import './index.css'
import Layout from './components/Layout'
import { ToastProvider } from './components/ToastContext'

function App() {
  return (
    <ToastProvider>
      <Layout />
    </ToastProvider>
  )
}

export default App
