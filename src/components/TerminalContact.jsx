import { motion } from 'framer-motion';

export default function TerminalContact() {
  return (
    <div className="w-full max-w-2xl mx-auto bg-[#0a0a0a] border border-white/10 rounded-md overflow-hidden font-mono text-xs shadow-2xl shadow-black">
      {/* Terminal Title Bar */}
      <div className="bg-[#121212] border-b border-white/5 px-4 py-3 flex items-center justify-between">
        <div className="flex space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40" />
        </div>
        <div className="text-gray-500 text-[10px] tracking-widest">COMMS_TERMINAL // SECURE_NODE</div>
        <div className="w-12" />
      </div>

      {/* Terminal Work Area */}
      <div className="p-6 space-y-4 text-gray-300">
        <div>
          <span className="text-emerald-400">guest@portfolio:~$</span> sudo systemctl init contact.service
          <p className="text-gray-500 mt-1">✓ Connection route established via secure socket layer.</p>
        </div>

        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-2">
            <span className="text-gray-500">identity_name:</span>
            <input 
              type="text" 
              className="bg-transparent border-b border-transparent focus:border-emerald-500/40 outline-none text-emerald-300 flex-1 py-0.5 px-1 transition-colors font-mono"
              placeholder="e.g., anonymous_operator"
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-2">
            <span className="text-gray-500">return_endpoint:</span>
            <input 
              type="email" 
              className="bg-transparent border-b border-transparent focus:border-emerald-500/40 outline-none text-emerald-300 flex-1 py-0.5 px-1 transition-colors font-mono"
              placeholder="operator@network.io"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <span className="text-gray-500">transmission_payload:</span>
            <textarea 
              rows={3}
              className="bg-transparent border border-white/5 focus:border-emerald-500/40 outline-none text-emerald-300 p-2 transition-colors font-mono resize-none w-full mt-1"
              placeholder="Enter details of your project or proposal query..."
            />
          </div>

          <div className="pt-2">
            <button 
              type="submit"
              className="bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 px-4 py-2 rounded transition-all font-mono hover:shadow-[0_0_15px_rgba(16,185,129,0.15)]"
            >
              ./execute_transmission.sh
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}