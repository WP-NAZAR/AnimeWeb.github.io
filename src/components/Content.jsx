import { useState } from "react"
import './css/main.css'
export default function Content() {
    const [click, setClick] = useState(false)
    const anime = [
        {name : 'Tensei Shitara Slime Datta Ken Season 19', date : 'Up Jumat, 22:47 Wib'},
        {name : 'Tensei Shitara Slime Datta Ken Season 19', date : 'Up Jumat, 22:47 Wib'},
        {name : 'Tensei Shitara Slime Datta Ken Season 19', date : 'Up Jumat, 22:47 Wib'},
        {name : 'Tensei Shitara Slime Datta Ken Season 19', date : 'Up Jumat, 22:47 Wib'},
        {name : 'Tensei Shitara Slime Datta Ken Season 19', date : 'Up Jumat, 22:47 Wib'},
        {name : 'Tensei Shitara Slime Datta Ken Season 19', date : 'Up Jumat, 22:47 Wib'},
        {name : 'Tensei Shitara Slime Datta Ken Season 19', date : 'Up Jumat, 22:47 Wib'},
        {name : 'Tensei Shitara Slime Datta Ken Season 19', date : 'Up Jumat, 22:47 Wib'},
        {name : 'Tensei Shitara Slime Datta Ken Season 19', date : 'Up Jumat, 22:47 Wib'},
        {name : 'Tensei Shitara Slime Datta Ken Season 19', date : 'Up Jumat, 22:47 Wib'},
        {name : 'Tensei Shitara Slime Datta Ken Season 19', date : 'Up Jumat, 22:47 Wib'},
        {name : 'Tensei Shitara Slime Datta Ken Season 19', date : 'Up Jumat, 22:47 Wib'},
        {name : 'Tensei Shitara Slime Datta Ken Season 19', date : 'Up Jumat, 22:47 Wib'},
        {name : 'Tensei Shitara Slime Datta Ken Season 19', date : 'Up Jumat, 22:47 Wib'},
        {name : 'Tensei Shitara Slime Datta Ken Season 19', date : 'Up Jumat, 22:47 Wib'}
    ]

    const movie = [
        {nameMov : 'Spy X Family Movie : Code : White'},
        {nameMov : 'Spy X Family Movie : Code : White'},
        {nameMov : 'Spy X Family Movie : Code : White'},
        {nameMov : 'Spy X Family Movie : Code : White'},
        {nameMov : 'Spy X Family Movie : Code : White'},
        {nameMov : 'Spy X Family Movie : Code : White'},
    ]

    const evenlyAnime = () => {
        setClick(!click)
    }
    return (
        <>
            <div className="w-full h-auto bg-gray-950 text-white">
                <div className="flex justify-between px-[20px] pt-[20px]">
                    <div className="w-20% h-auto">
                        <h1>News Update</h1>
                    </div>
                    <div className="w[30%] h-auto">
                        <button className="bg-white text-black w-[150px] p-[4px] rounded-[5px]">Jadwal Update</button>
                        <button className="bg-white text-black w-[150px] p-[4px] rounded-[5px] ml-[20px]">Up Juli 2024</button>
                    </div>
                </div>
                <div className="w-full h-auto m-[20px] flex flex-wrap gap-[20px]">
                    {anime.map((item, index) => (
                        <div key={index} className={`w-[300px] h-[200px] bg-white text-white rounded-[20px] p-[10px] item-bg-${index}`}>
                            <h1>{item.name}</h1>
                            <p className="flex justify-end mt-[100px]">{item.date}</p>
                        </div>
                    ))}
                </div>
                <div className="w-full h-auto">
                    <div className="flex justify-center gap-[20px]">
                        <button className="w-[180px] p-[2px] bg-sky-500 rounded-[5px]">Halaman 1 Dari 2000</button>
                        <button className="w-[25px] h-[25px] p-[1px] bg-white text-black rounded-[50%]">1</button>
                        <button className="w-[25px] h-[25px] p-[1px] bg-white text-black rounded-[50%]">2</button>
                        <button className="w-[25px] h-[25px] p-[1px] bg-white text-black rounded-[50%]">3</button>
                        <button className="w-[25px] h-[25px] p-[1px] bg-white text-black rounded-[50%]">4</button>
                        <button className="w-[25px] h-[25px] p-[1px] bg-white text-black rounded-[50%]">5</button>
                        <button className="w-[25px] h-[25px] p-[1px] bg-white text-black rounded-[50%]">++</button>
                    </div>
                </div>
                <div className="w-full h-auto">
                    <div className="w-full">
                        <h1 className="text-[35px] pl-[20px]">+ MOVIE</h1>
                        <hr />
                    </div>
                    <div className="w-full h-auto mt-[10px] pl-[20px] flex gap-[20px] justify-center">
                        {movie.map((itemMov, indexMov) => (
                            <div key={indexMov} className={`w-[180px] h-[180px] bg-white bg-mov-${indexMov}`}>
                                <h1>{itemMov.nameMov}</h1>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full h-auto">
                    <div className="w-full">
                        <h1 className="text-[35px] pl-[20px]">+ LIVE ACTION</h1>
                        <hr />
                    </div>
                    <div className="w-full h-auto mt-[10px] pl-[20px] flex gap-[20px] justify-center">
                        {movie.map((itemMov, indexMov) => (
                            <div key={indexMov} className={`w-[180px] h-[180px] bg-white bg-mov-${indexMov}`}>
                                <h1>{itemMov.nameMov}</h1>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full h-auto">
                    <div className="w-full">
                        <h1 className="text-[35px] pl-[20px]">+ RECENTLY ADDED</h1>
                        <hr />
                    </div>
                    <div className="w-full h-auto mt-[10px] pl-[20px] flex gap-[20px] justify-center">
                        {movie.map((itemMov, indexMov) => (
                            <div key={indexMov} className={`w-[180px] h-[180px] bg-white bg-mov-${indexMov}`}>
                                <h1>{itemMov.nameMov}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
