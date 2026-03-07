import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Sparkles, Crown, Heart, ArrowRight, Star, ChevronRight, Plus, Minus, Trash2, ArrowLeft, Ruler } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

// --- MOCK DATA ---
// --- EXPANDED MOCK DATA WITH STABLE HD IMAGES ---
const MOCK_PRODUCTS = [
  { 
    id: 1, 
    name: "Raw Vietnamese Bone Straight", 
    type: "Bundles", 
    price: 340, 
    image: "https://images.unsplash.com/photo-1615166699477-94943f721516?auto=format&fit=crop&q=80&w=800", 
    description: "Sleek, pristine raw Vietnamese hair. Naturally straight with an unmatched natural luster. Tangle-free and lasts up to 5 years with proper care." 
  },
  { 
    id: 2, 
    name: "Silky Straight Bob", 
    type: "Wigs", 
    price: 180, 
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800", 
    description: "Pre-cut, pre-plucked, and ready to wear. Glueless HD lace for a seamless, undetectable melt." 
  },
  { 
    id: 3, 
    name: "Curly HD Frontal", 
    type: "Lace", 
    price: 320, 
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1bfa82?auto=format&fit=crop&q=80&w=800", 
    description: "Deep wave texture with ultra-thin HD lace. Melts into any skin tone effortlessly." 
  },
  { 
    id: 4, 
    name: "Honey Blonde Balayage", 
    type: "Custom Color", 
    price: 290, 
    image: "https://images.unsplash.com/photo-1528652494191-c276b5cf0b74?auto=format&fit=crop&q=80&w=800", 
    description: "Professionally colored virgin hair. Minimal shedding and vibrant, long-lasting tones." 
  },
  { 
    id: 5, 
    name: "Brazilian Body Wave", 
    type: "Bundles", 
    price: 250, 
    image: "https://images.unsplash.com/photo-1515347619253-1e5b8e906c24?auto=format&fit=crop&q=80&w=800", 
    description: "100% raw virgin Brazilian hair. Double drawn for thick, luscious ends. Holds curls flawlessly." 
  },
  { 
    id: 6, 
    name: "Burgundy Highlight Unit", 
    type: "Wigs", 
    price: 275, 
    image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&q=80&w=800", 
    description: "Stand out with this rich burgundy custom-colored unit. 200% density for maximum volume and body." 
  },
  { 
    id: 7, 
    name: "Deep Wave Closure", 
    type: "Closures", 
    price: 150, 
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=800", 
    description: "5x5 HD Lace Closure. Perfectly matches our deep wave bundles for a protective, seamless install." 
  },
  { 
    id: 8, 
    name: "Kinky Straight Ponytail", 
    type: "Extensions", 
    price: 110, 
    image: "https://images.unsplash.com/photo-1600051823157-190b224e75d0?auto=format&fit=crop&q=80&w=800", 
    description: "100% human hair wrap-around ponytail. Blends perfectly with blown-out natural hair for a quick, elegant look." 
  }
];

// --- 1. HOME PAGE ---
function HomePage({ addToCart }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32">
      {/* HERO SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-8">
        <div className="md:col-span-3 bg-white rounded-3xl md:rounded-[2rem] p-6 sm:p-8 md:p-14 shadow-[0_2px_20px_rgb(0,0,0,0.02)] border border-rose-50/50 relative overflow-hidden flex flex-col md:flex-row items-center group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-100/50 rounded-full blur-3xl opacity-50 -mr-20 -mt-20 transition-transform duration-1000 group-hover:scale-110"></div>
          <div className="relative z-10 md:w-3/5 md:pr-8">
            <span className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-rose-50 text-rose-600 text-xs font-bold tracking-widest uppercase mb-6 border border-rose-100/50">
              <Sparkles size={14} strokeWidth={1.5} /> Summer Collection
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Discover Your <br/><span className="text-rose-400 italic">Perfect Crown.</span>
            </h1>
            <p className="text-base md:text-lg text-slate-600 max-w-lg leading-relaxed mb-8">
              Premium quality, 100% raw human hair sourced globally. Flawless HD lace, zero shedding, ultimate luxury.
            </p>
            <Link to="/collections" className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-white bg-slate-900 hover:bg-rose-500 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 active:scale-95 inline-flex">
              Shop The Look <ArrowRight size={18} strokeWidth={1.5} />
            </Link>
          </div>
          <div className="md:w-2/5 w-full mt-8 md:mt-0 h-72 md:h-full relative rounded-2xl md:rounded-[1.5rem] overflow-hidden shadow-2xl">
<img 
  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800" 
  alt="Deluxe Hair Model" 
  className="absolute inset-0 w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
/>
          </div>
        </div>
        <div className="md:col-span-1 flex flex-col sm:flex-row md:flex-col gap-4 md:gap-6">
          <div className="bg-rose-500 rounded-3xl md:rounded-[2rem] p-6 shadow-lg flex-1 flex flex-col justify-center relative overflow-hidden text-center min-h-[160px] group">
            <Crown className="mx-auto text-rose-200 mb-3" size={32} strokeWidth={1.5} />
            <h3 className="text-2xl font-serif italic text-white mb-1 relative z-10">"Luxury in every strand."</h3>
          </div>
          <div className="bg-white rounded-3xl md:rounded-[2rem] p-6 border border-rose-50 flex-1 flex flex-col justify-center items-center text-center min-h-[160px]">
            <div className="flex text-amber-400 mb-3 gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            <h4 className="text-3xl font-black text-slate-900 mb-1">4.9/5</h4>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">From 10,000+ Queens</p>
          </div>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="flex justify-between items-end mb-6 px-2">
        <h3 className="text-2xl font-serif font-bold text-slate-800">Trending Now</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
        {MOCK_PRODUCTS.map((product) => (
          <div key={product.id} className="bg-white rounded-3xl p-4 border border-rose-50 hover:shadow-xl transition-all duration-300 group flex flex-col">
            <Link to={`/product/${product.id}`} className="relative w-full h-64 rounded-2xl overflow-hidden mb-4 block cursor-pointer">
              <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); }} className="absolute top-3 right-3 p-2.5 bg-white/90 backdrop-blur rounded-full text-slate-400 hover:text-rose-500 transition-all shadow-sm z-10">
                <Heart size={18} strokeWidth={1.5} />
              </button>
            </Link>
            <div className="px-2 pb-2 flex-1 flex flex-col">
              <p className="text-[10px] text-rose-400 font-bold tracking-widest uppercase mb-1">{product.type}</p>
              <Link to={`/product/${product.id}`} className="text-lg font-medium text-slate-900 mb-2 leading-tight hover:text-rose-500 transition-colors">
                {product.name}
              </Link>
              <div className="mt-auto flex justify-between items-end">
                <p className="text-xl font-serif italic text-slate-700">${product.price}</p>
                <button onClick={() => addToCart(product)} className="p-2.5 bg-slate-900 text-white rounded-full hover:bg-rose-500 active:scale-95 transition-all shadow-md">
                  <Plus size={16} strokeWidth={2} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- 2. PRODUCT DETAILS PAGE (PDP) ---
function ProductPage({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = MOCK_PRODUCTS.find(p => p.id === parseInt(id));
  const [selectedLength, setSelectedLength] = useState('20"');

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!product) return <div className="pt-40 text-center text-2xl font-serif">Product Not Found</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-16">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-500 hover:text-rose-500 mb-8 transition-colors font-medium">
        <ArrowLeft size={18} strokeWidth={1.5} /> Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <div className="relative rounded-[2rem] overflow-hidden h-[500px] md:h-[700px] shadow-2xl shadow-rose-900/10">
          <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm text-rose-500 font-bold tracking-widest uppercase mb-2">{product.type}</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">{product.name}</h1>
          <div className="flex items-center gap-4 mb-6">
            <p className="text-3xl font-serif italic text-slate-700">${product.price}</p>
            <div className="flex items-center text-amber-400 text-sm gap-1 border-l border-slate-200 pl-4">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              <span className="text-slate-500 ml-1">(128 Reviews)</span>
            </div>
          </div>

          <p className="text-lg text-slate-600 mb-8 leading-relaxed">{product.description}</p>

          <div className="mb-8">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-4">
              <Ruler size={16} className="text-rose-500"/> Select Length
            </h3>
            <div className="flex flex-wrap gap-3">
              {['14"', '16"', '18"', '20"', '22"', '24"', '26"'].map(length => (
                <button 
                  key={length}
                  onClick={() => setSelectedLength(length)}
                  className={`px-5 py-3 rounded-xl border text-sm font-bold transition-all ${
                    selectedLength === length ? 'border-rose-500 bg-rose-50 text-rose-700 shadow-sm' : 'border-slate-200 text-slate-600 hover:border-rose-300 hover:bg-rose-50/50'
                  }`}
                >
                  {length}
                </button>
              ))}
            </div>
          </div>

          <button 
            onClick={() => addToCart({...product, name: `${product.name} (${selectedLength})`})}
            className="w-full bg-slate-900 text-white py-5 rounded-full font-bold hover:bg-rose-500 transition-all duration-300 shadow-xl shadow-slate-900/10 flex justify-center items-center gap-3 text-lg active:scale-95 mb-8"
          >
            <ShoppingBag size={20} strokeWidth={2} /> Add to Bag - ${product.price}
          </button>
        </div>
      </div>
    </div>
  );
}

// --- 3. GENERIC CATEGORY PAGE (For Navigation Links) ---
function CategoryPage() {
  const { category } = useParams();
  const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);
  
  useEffect(() => { window.scrollTo(0, 0); }, [category]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 min-h-[70vh] flex flex-col items-center justify-center text-center">
      <Sparkles className="text-rose-300 mb-4" size={48} strokeWidth={1} />
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">{formattedCategory}</h1>
      <p className="text-lg text-slate-600 max-w-md">Our highly anticipated {category} collection is currently being curated. Check back soon for exclusive drops.</p>
      <Link to="/" className="mt-8 px-8 py-4 bg-rose-50 text-rose-600 font-bold rounded-full hover:bg-rose-100 transition-colors flex items-center gap-2">
        <ArrowLeft size={18} strokeWidth={1.5} /> Return Home
      </Link>
    </div>
  );
}

// --- 4. MAIN APP ROUTER & LAYOUT ---
function AppContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const location = useLocation();

  // Close mobile menu whenever the route changes
  useEffect(() => { setIsMenuOpen(false); }, [location]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find(item => item.id === product.id && item.name === product.name);
      if (existing) return prev.map(item => item.id === product.id && item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item);
      return [...prev, { ...product, quantity: 1 }];
    });
    
    toast.success(`${product.name} added to bag`, {
      icon: '🛍️',
      style: { borderRadius: '100px', background: '#0f172a', color: '#fff', padding: '12px 24px', fontSize: '14px' },
    });
  };

  const updateQuantity = (id, name, delta) => {
    setCart((prev) => prev.map(item => {
      if (item.id === id && item.name === name) return { ...item, quantity: Math.max(1, item.quantity + delta) };
      return item;
    }));
  };

  const removeFromCart = (id, name) => setCart((prev) => prev.filter(item => !(item.id === id && item.name === name)));

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  const navLinks = ['Collections', 'Bundles', 'Accessories'];

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-slate-900 selection:bg-rose-200 selection:text-slate-900 overflow-x-hidden">
      
      {/* 📱 MOBILE NAVIGATION BAR */}
      <div className="md:hidden flex items-center justify-between p-5 bg-white/90 backdrop-blur-lg border-b border-rose-100 fixed w-full top-0 z-50">
        <Link to="/" className="text-xl font-serif font-bold text-slate-900 tracking-wide z-50">
          DELUXE<span className="text-rose-400 italic">Hair</span>
        </Link>
        <div className="flex items-center gap-4 z-50">
          <button onClick={() => setIsCartDrawerOpen(true)} className="relative p-2 text-slate-800">
            <ShoppingBag size={22} strokeWidth={1.5} />
            {cartItemCount > 0 && <span className="absolute top-0 right-0 w-4 h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border border-white">{cartItemCount}</span>}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 -mr-2 text-slate-900 bg-rose-50 rounded-full">
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* 📱 MOBILE MENU DROPDOWN */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[69px] bg-[#fafafa] z-40 p-4 flex flex-col gap-3 overflow-y-auto animate-in slide-in-from-top-4 duration-300">
          <div className="bg-white rounded-3xl p-6 flex flex-col gap-4 shadow-sm border border-rose-100">
            {navLinks.map((item) => (
              <Link 
                key={item} 
                to={`/category/${item.toLowerCase()}`}
                className="text-lg font-medium text-slate-800 border-b border-slate-50 pb-4 last:border-0 last:pb-0 hover:text-rose-500"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* 💻 DESKTOP FLOATING NAVIGATION */}
      <nav className="hidden md:flex fixed top-8 left-1/2 -translate-x-1/2 z-40 bg-white/85 backdrop-blur-xl border border-white/50 rounded-full px-8 py-3 shadow-sm items-center gap-10">
        <Link to="/" className="text-xl font-serif font-bold text-slate-900 tracking-wider mr-4">
          DELUXE<span className="text-rose-400 italic">Hair</span>
        </Link>
        
        {navLinks.map((item) => (
          <Link key={item} to={`/category/${item.toLowerCase()}`} className="text-sm font-medium text-slate-600 hover:text-rose-500">
            {item}
          </Link>
        ))}
        
        {/* Sign In Removed. Just the Cart left on the right side. */}
        <div className="flex items-center ml-4 pl-8 border-l border-slate-200">
          <button onClick={() => setIsCartDrawerOpen(true)} className="px-6 py-2.5 rounded-full text-sm font-bold text-white bg-slate-900 hover:bg-rose-500 transition-all flex items-center gap-2 active:scale-95 shadow-md">
            <ShoppingBag size={16} /> Cart {cartItemCount > 0 && `(${cartItemCount})`}
          </button>
        </div>
      </nav>

      {/* DYNAMIC PAGE RENDERER */}
      <Routes>
        <Route path="/" element={<HomePage addToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductPage addToCart={addToCart} />} />
        <Route path="/category/:category" element={<CategoryPage />} />
      </Routes>

      {/* CART DRAWER */}
      {isCartDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm" onClick={() => setIsCartDrawerOpen(false)}></div>
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col border-l border-rose-100 transform transition-transform duration-300">
            <div className="flex justify-between p-6 border-b border-rose-50 bg-white/80">
              <h2 className="text-2xl font-serif font-bold text-slate-900">Your Bag <span className="text-rose-400">({cartItemCount})</span></h2>
              <button onClick={() => setIsCartDrawerOpen(false)} className="p-2 hover:bg-rose-50 rounded-full"><X size={24}/></button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-4">
                  <div className="w-24 h-24 bg-rose-50 rounded-full flex items-center justify-center mb-4">
                    <ShoppingBag size={40} className="text-rose-300" />
                  </div>
                  <p className="text-lg font-medium">Your bag is empty.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <img src={item.image} alt={item.name} className="w-24 h-28 object-cover rounded-2xl border border-rose-50" />
                      <div className="flex-1 flex flex-col py-1">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-medium text-slate-900 leading-tight pr-4">{item.name}</h4>
                          <button onClick={() => removeFromCart(item.id, item.name)} className="text-slate-300 hover:text-red-500"><Trash2 size={16}/></button>
                        </div>
                        <p className="text-lg font-serif italic text-slate-600 mb-auto">${item.price}</p>
                        <div className="flex items-center gap-3 bg-slate-50 w-fit rounded-full p-1 mt-2">
                          <button onClick={() => updateQuantity(item.id, item.name, -1)} className="p-1 hover:bg-white rounded-full"><Minus size={14} /></button>
                          <span className="font-bold text-sm w-4 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.name, 1)} className="p-1 hover:bg-white rounded-full"><Plus size={14} /></button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-rose-50 bg-slate-50/50">
                <div className="flex justify-between mb-6 text-xl font-bold">
                  <span>Subtotal</span><span className="font-serif italic">${cartTotal}</span>
                </div>
                <button className="w-full bg-slate-900 text-white py-4 rounded-full font-bold hover:bg-rose-500 transition-all flex justify-center gap-2 shadow-lg">
                  Secure Checkout <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      <Toaster position="bottom-center" />
    </div>
  );
}

export default function DeluxeHairApp() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}