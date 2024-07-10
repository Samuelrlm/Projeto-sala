import { useParams } from "react-router-dom";
import carros from "../../mocks/listaCarros";

export default function Carrinho(){
    const { id } = useParams();

    const carro = carros.find((carro) => carro.id === Number(id));
    const listaCarros = carros.filter((carro) => carro.id !== Number(id));

    return(
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <div className="w-full h-[70%] flex">
                <div className="w-[40%] flex items-center justify-center">
                    <img src={carro.foto} alt={carro.modelo} />
                </div>
                <div className="w-[60%] h-[100%] flex flex-col items-center justify-center pt-5">
                    <h1 className="font-bold text-2xl">Detalhes do veiculo</h1>
                    <div className="w-full h-[100%]  flex flex-col">
                        <div className="flex items-center gap-2">
                            <p className="font-bold text-lg">Modelo: </p>
                            <p> {carro.modelo}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="font-bold text-lg">Marca: </p>
                            <p> {carro.marca}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="font-bold text-lg">Categoria: </p>
                            <p> {carro.categoria}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="font-bold text-lg">Ano: </p>
                            <p> {carro.ano}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="font-bold text-lg">Diária: </p>
                            <p> {carro.diaria}</p>
                        </div>
                        <div className="w-full flex gap-4 pt-5">
                            <input type="text" placeholder="Diarias" className="w-[50%] h-10 border-2 border-gray-300 rounded-md px-2"/>
                            <button className="w-[200px] h-10 bg-blue-500 text-white rounded-md">Calcular</button>
                        </div>
                        <div className="w-full flex mt-4">
                            <div className="w-[20%] h-10 rounded-md bg-green-200 flex items-center pl-2 gap-1">
                                <p>R$</p>
                                <p>500</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[30%] flex  items-center justify-around">
                {listaCarros.map((carro) => {
                    return(
                        <div className="w-[400px] h-[80%] rounded-md  flex items-center justify-center">
                           <div className="w-1/2 h-full flex items-center justify-center p-2">
                                <img className="w-[300px]" src={carro.foto} alt={carro.modelo} />
                           </div>
                           <div className="w-1/2 h-full flex flex-col">
                                <div className="flex flex-col pb-6">
                                    <div className="flex items-center gap-2">
                                        <p className="font-bold text-lg">{carro.modelo}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <p className="font-bold text-lg">R$ </p>
                                        <p> {carro.diaria}</p>
                                    </div>
                                </div>
                                <button className="w-full h-10 bg-orange-400 text-white rounded-md">Alugar</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}