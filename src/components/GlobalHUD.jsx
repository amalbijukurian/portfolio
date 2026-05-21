export default function GlobalHUD({ activeState, onConnectClick }) {
  return (
    <div className="fixed inset-0 z-10 pointer-events-none font-mono">
      {/* Subtle grid accent overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Top Left: Persistent Identity Node */}
      <div className="absolute top-6 left-8 text-[10px] text-gray-400 tracking-[0.2em] uppercase flex items-center space-x-2">
        <span className="inline-block w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
        <span className="font-sans font-bold text-white tracking-normal text-xs mr-1">AMAL BIJU</span>
        <span className="text-gray-500">// SYS_STATUS</span>
      </div>

      {/* Top Right: Scroll Link Action Target */}
      <div className="absolute top-5 right-8 pointer-events-auto">
        <button 
          onClick={onConnectClick}
          className="text-[10px] text-emerald-400 hover:text-white tracking-[0.2em] uppercase bg-emerald-950/10 hover:bg-emerald-500/10 border border-emerald-500/20 hover:border-emerald-500/50 px-3 py-1.5 rounded transition-all duration-300 cursor-pointer"
        >
          [ CONNECT_PORT ]
        </button>
      </div>

      {/* Bottom Telemetry Bars */}
      <div className="absolute bottom-6 left-8 text-[10px] text-gray-500 tracking-[0.2em] uppercase">
        STATE_INDEX // 0{activeState}
      </div>
      <div className="absolute bottom-6 right-8 text-[10px] text-gray-500 tracking-[0.2em] uppercase">
        GL_RENDERER // 60_FPS
      </div>
    </div>
  );
}