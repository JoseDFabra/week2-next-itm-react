"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

interface FormData {
  nombre: string;
  apellido: string;
  correo: string;
}

const ListaDeTareas = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [user, setUser] = useState<FormData[]>([]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // Agrega los datos al estado 'user'
    setUser([...user, data]);
    console.log(data);
    reset();
  };

  return (
    <div className="h-screen w-screen">
      <div className="flex mt-10 items-center flex-col h-full">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <label htmlFor="nombe" className="text-white font-semibold" >Nombre:</label>
          <input
          className="rounded bg-gray-600 p-2 text-white"
          type="text"
            placeholder="Nombre"
            {...register("nombre", { required: true })}
            />
            {errors.nombre && (
              <span className="text-red-500 font-bold"> El campo nombre es requerido</span>
            )}

          <label htmlFor="apellido"  className="text-white font-semibold">Apellido:</label>
          <input
          className="rounded bg-gray-600 p-2 text-white"
          type="text"
          placeholder="Apellido"
          {...register("apellido", { required: true })}
          />
          {errors.apellido && (
            <span className="text-red-500 font-bold">El campo apellido es requerido</span>
            )}

          <label htmlFor="correo" className="text-white font-semibold">Correo:</label>
          <input
          className="rounded bg-gray-600 p-2 text-white"
          type="text"
          placeholder="Correo"
          {...register("correo", { required: true})}
          />
          {errors.correo && (
            <span className="text-red-500 font-bold">El campo Correo es requerido</span>
            )}
          <div className="flex justify-center" >
          <button type="submit" className="bg-green-600 hover:bg-green-700 mt-2 rounded-xl w-1/2">
            Save
          </button>

          </div>
        </form>
      <div className="mt-7" >
        <h2  className="text-white font-semibold" >Datos ingresados:</h2>
        <ul>
          {user.map((userData, index) => (
            <li key={index} className="bg-blue-400 p-3 rounded font-semibold my-2" >{`
            ${userData.nombre}  
            ${userData.apellido} 
            ${userData.correo}
            `}
              </li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
};

export default ListaDeTareas;
