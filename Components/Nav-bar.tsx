import Link from "next/link";

function Navbar() {
  return(
    <>
      <ul className="flex gap-10 justify-center h-14 items-center" >
        <li className="bg-slate-600 hover:bg-slate-700 px-2 rounded flex items-center h-8 " ><Link className="text-white " href="/">Home</Link></li>
        <li className="bg-slate-600 hover:bg-slate-700 px-2 rounded flex items-center h-8 " ><Link className="text-white " href="/list-form">Gestor de Usuarios</Link></li>
        <li className="bg-slate-600 hover:bg-slate-700 px-2 rounded flex items-center h-8 " ><Link className="text-white " href="/find-images">Buscador de Imagenes</Link></li>
        <li className="bg-slate-600 hover:bg-slate-700 px-2 rounded flex items-center h-8 " ><Link className="text-white " href="/todo-list">TODO App</Link></li>
      </ul>
    </>
  );
}

export default Navbar;