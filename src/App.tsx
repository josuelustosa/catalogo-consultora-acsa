import logo from "./assets/logo-catalogo-consultora-acsa.png"

function App() {

  const logoText = "Logo Catálogo Consultora Ácsa"

  return (
    <div className="bg-primary-900 py-6">
      <img
        src={logo}
        alt={logoText}
        className="m-auto w-55 pb-4"
        title={logoText}
      />

      <div className="flex justify-center gap-6 text-sm text-primary-100">
        <a href="#">Início</a>
        <a href="#">o Boticário, Eudora & OUI</a>
        <a href="#"> Natura & Avón</a>
        <a href="#">Romance & Favorita</a>
        <a href="#">Moda Íntima</a>
      </div>
    </div>
  )
}

export default App
