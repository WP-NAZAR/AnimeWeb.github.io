export default function Navbar() {
    return (
        <>
            <div className="w-full h-[60px] bg-white flex justify-between items-center px-[20px]">
                <div className="w-[20%] h-auto">
                    <h1 className="text-black text-[24px]">AnimeWeb</h1>
                </div>
                <div className="w[80%] h-auto text-black text-[15px]">
                    <ul className="flex gap-[20px]">
                        <li><a href="">Home</a></li>
                        <li><a href="">Jadwal</a></li>
                        <li><a href="">AnimeList</a></li>
                        <li><a href="">DonghuaList</a></li>
                        <li><a href="">Movie</a></li>
                        <li><a href="">Live Action</a></li>
                        <li><a href="">Rekomendasi</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}