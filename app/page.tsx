import Image from "next/image";

export default function Home() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#f0c27b] flex flex-col items-center px-0 relative overflow-x-hidden">
      {/* 彩色渐变背景装饰 */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] bg-gradient-to-br from-yellow-200 via-orange-200 to-pink-200 rounded-full blur-3xl opacity-40 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[320px] h-[320px] bg-gradient-to-tr from-yellow-100 via-yellow-300 to-orange-100 rounded-full blur-3xl opacity-30 animate-pulse" />
      </div>

      {/* 顶部导航栏 */}
      <header className="w-full max-w-3xl flex items-center justify-between py-6 px-4 sm:px-10 mb-4 z-10 relative">
        <div className="flex items-center gap-3">
          <Image src="/next.svg" alt="Logo" width={44} height={44} className="rounded-2xl shadow-md bg-white/80 p-1" />
          <span className="text-2xl font-bold tracking-tight select-none bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 bg-clip-text text-transparent drop-shadow">H5 游戏导航</span>
        </div>
        <nav className="hidden sm:flex gap-8 text-gray-200 text-base font-semibold">
          <a href="#" className="hover:text-yellow-400 transition">首页</a>
        </nav>
      </header>

      {/* 主内容区域 */}
      <main className="flex-1 w-full flex flex-col items-center z-10 relative">
        <section className="w-full flex-1 flex flex-col items-center justify-center max-w-5xl mx-auto">
          {/* 游戏区 */}
          <div id="game-area" className="w-full h-[60vw] max-h-[70vh] min-h-[340px] rounded-3xl overflow-hidden bg-black flex items-center justify-center border border-yellow-100/30 shadow-2xl" style={{aspectRatio: '16/9'}}>
            <iframe
              src="https://cloud.onlinegames.io/games/2024/flash/gold-miner/index.html"
              title="Gold Miner"
              className="w-full h-full border-0 bg-black"
              allowFullScreen
            />
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="w-full max-w-3xl text-center text-xs text-gray-200 pb-6 select-none z-10 relative">
        © {currentYear} H5 游戏导航 | 精选自 OnlineGames.io
      </footer>
    </div>
  );
}
