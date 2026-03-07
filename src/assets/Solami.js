import React, { useState } from 'react';
import { Menu, X, Terminal, MessageSquare, Smartphone, Hash, ArrowRight, Activity, Zap, Code2 } from 'lucide-react';

const SolamiRedesign = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4f4f5] font-sans text-slate-900 selection:bg-amber-400 selection:text-slate-900 pb-12 md:pb-24">
      
      {/* 📱 MOBILE NAVIGATION (Sticky & App-like) */}
      <div className="md:hidden flex items-center justify-between p-5 bg-white/90 backdrop-blur-lg border-b border-slate-200 sticky top-0 z-50">
        <span className="text-xl font-serif font-bold text-[#004d40]">Solami<span className="text-amber-500">.</span></span>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="p-2 -mr-2 text-slate-900 bg-slate-100 rounded-full active:bg-slate-200 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* 📱 MOBILE MENU DROPDOWN */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[69px] bg-[#f4f4f5] z-40 p-4 flex flex-col gap-3 overflow-y-auto">
          <div className="bg-white rounded-3xl p-6 flex flex-col gap-4 shadow-sm border border-slate-200">
            {['Solutions', 'Pricing', 'About Solami'].map((item) => (
              <a key={item} href="#" className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3 last:border-0 last:pb-0 active:text-amber-500">
                {item}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3 mt-2">
            <button className="py-4 rounded-2xl font-bold text-slate-800 bg-white border border-slate-200 shadow-sm active:bg-slate-50 text-lg">Sign In</button>
            <button className="py-4 rounded-2xl font-bold text-white bg-amber-500 shadow-lg shadow-amber-500/25 active:bg-amber-600 text-lg">Get Started</button>
          </div>
        </div>
      )}

      {/* 💻 DESKTOP FLOATING NAVIGATION */}
      <nav className="hidden md:flex fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-xl border border-white rounded-full px-8 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] items-center gap-10">
        <span className="text-xl font-serif font-bold text-[#004d40] mr-4">Solami<span className="text-amber-500">.</span></span>
        {['Solutions', 'Pricing', 'About Solami'].map((item) => (
          <a key={item} href="#" className="text-sm font-semibold text-slate-600 hover:text-amber-500 transition-colors">
            {item}
          </a>
        ))}
        <div className="flex items-center gap-4 ml-4 pl-8 border-l border-slate-200">
          <a href="#" className="text-sm font-semibold text-slate-800 hover:text-amber-500">Sign In</a>
          <button className="px-6 py-2.5 rounded-full text-sm font-bold text-white bg-slate-900 hover:bg-[#004d40] transition-colors shadow-md">
            Get Started
          </button>
        </div>
      </nav>

      {/* MAIN CONTENT WRAPPER - Optimized padding for mobile */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 md:pt-40">
        
        {/* ROW 1: HERO & METRICS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-4 md:mb-6">
          
          {/* Main Hero Card */}
          <div className="md:col-span-3 bg-white rounded-3xl md:rounded-[2rem] p-6 sm:p-8 md:p-14 shadow-sm border border-slate-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-teal-50 rounded-full blur-3xl -mr-10 -mt-10 md:-mr-20 md:-mt-20"></div>
            
            <div className="relative z-10">
              <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-amber-100 text-amber-700 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6">
                Unleash Potential
              </span>
              
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-4 md:mb-6">
                Engagement, <br/>
                <span className="text-[#004d40]">minus the complexity.</span>
              </h1>
              
              <p className="text-base md:text-lg text-slate-600 max-w-2xl leading-relaxed mb-8 md:mb-10">
                Structure and automate meaningful interactions on SMS, Calls, USSD, and WhatsApp at scale. Flexible APIs built for global reach.
              </p>
              
              {/* Stacked input on mobile, row on desktop */}
              <div className="flex flex-col sm:flex-row gap-3 max-w-lg">
                <input 
                  type="email" 
                  placeholder="Enter email address" 
                  className="w-full sm:flex-1 rounded-2xl px-5 py-4 bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#004d40] text-base"
                />
                <button className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-white bg-amber-500 active:bg-amber-600 md:hover:bg-amber-600 shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 text-base">
                  Talk To Sales <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Mantra & Stats (Stacks naturally on mobile) */}
          <div className="md:col-span-1 flex flex-col sm:flex-row md:flex-col gap-4 md:gap-6">
            <div className="bg-[#004d40] rounded-3xl md:rounded-[2rem] p-6 md:p-8 shadow-sm flex-1 flex flex-col justify-center relative overflow-hidden text-center min-h-[160px]">
               <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-amber-300 via-transparent to-transparent"></div>
               <h3 className="text-2xl md:text-3xl font-serif italic text-amber-400 mb-1 relative z-10">"Choose to Believe."</h3>
               <p className="text-teal-100/80 text-sm font-medium relative z-10 uppercase tracking-widest">The Promise</p>
            </div>
            
            <div className="bg-white rounded-3xl md:rounded-[2rem] p-6 md:p-8 shadow-sm border border-slate-200 flex-1 flex flex-col justify-center items-center text-center min-h-[160px]">
              <Activity className="text-amber-500 mb-2" size={28} />
              <h4 className="text-3xl md:text-4xl font-black text-slate-900 mb-1">100+</h4>
              <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wide">Businesses Using Us</p>
            </div>
          </div>

        </div>

        {/* ROW 2: SOLUTIONS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-4 md:gap-6">
          
          <div className="bg-white rounded-3xl md:rounded-[2rem] p-6 md:p-8 shadow-sm border border-slate-200 active:border-amber-400 md:hover:border-amber-400 transition-colors">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-4 md:mb-6 text-[#004d40]">
              <MessageSquare size={24} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">Bulk SMS</h3>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              Send branded SMS for marketing or alerts. Connect deeply with your application.
            </p>
          </div>

          <div className="bg-white rounded-3xl md:rounded-[2rem] p-6 md:p-8 shadow-sm border border-slate-200 active:border-[#004d40] md:hover:border-[#004d40] transition-colors">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-4 md:mb-6 text-[#004d40]">
              <Hash size={24} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">USSD Tech</h3>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              Allow end-users without internet access to utilize your innovative services seamlessly.
            </p>
          </div>

          <div className="bg-white rounded-3xl md:rounded-[2rem] p-6 md:p-8 shadow-sm border border-slate-200 active:border-amber-400 md:hover:border-amber-400 transition-colors sm:col-span-2 md:col-span-1">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-4 md:mb-6 text-[#004d40]">
              <Smartphone size={24} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">Shortcodes</h3>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              Automate high-volume customer engagements perfectly tailored to your brand.
            </p>
          </div>

        </div>

        {/* ROW 3: DEVELOPER SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          
          {/* Dev Info */}
          <div className="bg-white rounded-3xl md:rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-sm border border-slate-200 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-xl bg-slate-100 text-slate-700 text-xs md:text-sm font-bold w-fit mb-4 md:mb-6">
              <Code2 size={16} /> Native SDKs & APIs
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 md:mb-6 leading-tight">
              Boost your business <br/> with a few lines of code.
            </h2>
            <p className="text-base md:text-lg text-slate-600 mb-6 md:mb-8">
              Whatever it is you want to build, we’re here to make it as easy as possible. Get started in no time.
            </p>
            
            {/* Scrollable on mobile, wrapping on desktop */}
            <div className="flex overflow-x-auto pb-4 -mx-2 px-2 md:pb-0 md:mx-0 md:px-0 md:flex-wrap gap-2 md:gap-3 mb-6 md:mb-8 no-scrollbar">
               {['Node.js', 'React Native', 'Java', 'Python'].map((lang, i) => (
                 <span key={lang} className={`px-4 py-2 rounded-xl border-2 text-sm md:text-base font-mono font-bold whitespace-nowrap ${i === 0 ? 'border-[#004d40] text-[#004d40] bg-teal-50' : 'border-slate-100 text-slate-600'}`}>
                   {lang}
                 </span>
               ))}
            </div>
            
            <button className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-white bg-slate-900 active:bg-[#004d40] md:hover:bg-[#004d40] transition-colors text-base">
              See Documentation
            </button>
          </div>

          {/* Dark IDE Card */}
          <div className="bg-slate-900 rounded-3xl md:rounded-[2rem] p-5 sm:p-8 shadow-2xl relative overflow-hidden flex flex-col w-full">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-teal-400 to-amber-400"></div>
            
            <div className="flex space-x-2 mb-4 md:mb-6 opacity-50">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            <div className="overflow-x-auto pb-4 no-scrollbar -mx-2 px-2 sm:mx-0 sm:px-0">
              <pre className="font-mono text-[11px] sm:text-[13px] md:text-sm leading-relaxed text-slate-300 w-max min-w-full">
                <code>
                  <span className="text-pink-400">const</span> {'{'} SolamiClient {'}'} = <span className="text-blue-300">require</span>(<span className="text-green-400">'solami-node'</span>);{'\n\n'}
                  <span className="text-slate-500">// Initialize client</span>{'\n'}
                  <span className="text-pink-400">const</span> client = <span className="text-pink-400">new</span> <span className="text-yellow-300">SolamiClient</span>({'{'}{'\n'}
                  {'  '}planId: <span className="text-green-400">'YOUR_PLAN_ID'</span>,{'\n'}
                  {'  '}token: <span className="text-green-400">'SECRET_TOKEN'</span>{'\n'}
                  {'}'});{'\n\n'}
                  <span className="text-pink-400">async function</span> <span className="text-blue-400">sendAlert</span>() {'{'}{'\n'}
                  {'  '}<span className="text-pink-400">await</span> client.sms.<span className="text-blue-400">send</span>({'{'}{'\n'}
                  {'    '}to: <span className="text-green-400">'+254700000000'</span>,{'\n'}
                  {'    '}message: <span className="text-green-400">'Your tour is booked!'</span>{'\n'}
                  {'  '}{'}'});{'\n'}
                  {'}'}
                </code>
              </pre>
            </div>
            
            <div className="mt-auto pt-4 md:pt-6 border-t border-slate-800 flex items-center justify-between text-[10px] md:text-xs font-mono text-slate-500">
               <span className="flex items-center gap-1.5"><Zap size={12} className="text-amber-500" /> Solami API</span>
               <span>Node.js</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default SolamiRedesign;