import Header from "./modules/Header"
import Main from "./modules/Main"
import Products from "./modules/Products"
import './App.css'
import Management from "./modules/Management"
import Customer from "./modules/Customer"
import Colloborative from "./modules/Colloborative"

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Main />
        <Products />
        <Management /> 
        <Customer />
        <Colloborative />
      </main>
    </>
  )
}

export default App