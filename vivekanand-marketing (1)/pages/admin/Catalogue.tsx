import React, { useState } from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { useStore } from '../../context/StoreContext';
import { Plus, Edit2, Trash2, Search, Save, X, Sparkles, Loader2, Image as ImageIcon } from 'lucide-react';
import { Product } from '../../types';
import { generateImage } from '../../services/geminiService';

const Catalogue: React.FC = () => {
  const { products, addProduct, updateProduct, deleteProduct, updateStock } = useStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState<Partial<Product>>({
    name: '', category: '', stockLevel: 0, minStockThreshold: 10, description: '', imageUrl: ''
  });

  // AI Image Gen State
  const [showAiGen, setShowAiGen] = useState(false);
  const [aiPrompt, setAiPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (product: Product) => {
    setEditingId(product.id);
    setFormData(product);
    setShowAiGen(false);
    setGeneratedImage(null);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      deleteProduct(id);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const productData = {
      ...formData,
      imageUrl: formData.imageUrl || 'https://picsum.photos/200' // Fallback
    };

    if (editingId) {
      updateProduct({ ...productData, id: editingId } as Product);
    } else {
      addProduct({ ...productData, id: Date.now().toString() } as Product);
    }
    // Reset
    resetForm();
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({ name: '', category: '', stockLevel: 0, minStockThreshold: 10, description: '', imageUrl: '' });
    setShowAiGen(false);
    setGeneratedImage(null);
    setAiPrompt('');
  };

  const handleGenerateImage = async () => {
    if (!aiPrompt.trim()) return;
    
    setIsGenerating(true);
    setGeneratedImage(null);
    
    const base64Image = await generateImage(aiPrompt);
    
    if (base64Image) {
      setGeneratedImage(base64Image);
    } else {
      alert("Failed to generate image. Please try again.");
    }
    setIsGenerating(false);
  };

  const applyGeneratedImage = () => {
    if (generatedImage) {
      setFormData({ ...formData, imageUrl: generatedImage });
      setShowAiGen(false);
    }
  };

  const LUXURY_PRESETS = [
    { label: "Minimal Luxury", prompt: "minimal luxury artificial jewellery on soft beige background, elegant gold tones, premium product photography, clean soft shadows, high-detail, macro highlight, professional studio lighting, minimalistic composition, no clutter, premium ecommerce banner style" },
    { label: "Macro Texture", prompt: "extreme close-up of artificial gold jewellery texture, shiny stone detailing, soft glow, beige backdrop, minimal luxury aesthetic, product macro photography" },
    { label: "Model Shoot", prompt: "Indian female model wearing elegant artificial jewellery, soft diffused light, simple neutral background, premium fashion photo, minimal styling, high-end look, soft shadows" },
    { label: "Floating Product", prompt: "single artificial jewellery piece floating on soft beige gradient, minimal premium style, clean shadows, elegant gold highlight, luxury ecommerce banner" }
  ];

  return (
    <AdminLayout>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 animate-fade-in">
        <div>
          <h1 className="text-3xl font-serif font-bold text-white mb-2">Catalogue Manager</h1>
          <p className="text-gray-400">Manage products, stock levels, and categories.</p>
        </div>
        <div className="flex gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-charcoal-light border border-gray-700 text-white pl-10 pr-4 py-2 rounded-lg focus:border-royal outline-none w-64"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Product Table */}
        <div className="lg:col-span-2 bg-charcoal-light rounded-xl border border-royal/10 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-white/5 text-xs uppercase text-gray-400 font-mono tracking-wider">
              <tr>
                <th className="p-4">Product</th>
                <th className="p-4">Stock</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              {filteredProducts.map(product => (
                <tr key={product.id} className="hover:bg-white/5 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-gray-700 overflow-hidden">
                         <img src={product.imageUrl} className="w-full h-full object-cover" alt="" />
                      </div>
                      <div>
                        <p className="font-bold text-white">{product.name}</p>
                        <p className="text-xs text-gray-500 capitalize">{product.category}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <span className={`font-mono font-bold ${product.stockLevel <= product.minStockThreshold ? 'text-red-400' : 'text-green-400'}`}>
                        {product.stockLevel}
                      </span>
                      <button onClick={() => updateStock(product.id, 10, 'IN')} className="px-2 py-0.5 bg-white/10 rounded hover:bg-white/20 text-xs">+</button>
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button onClick={() => handleEdit(product)} className="p-2 hover:bg-royal/20 text-gray-400 hover:text-royal rounded transition-colors">
                        <Edit2 size={16} />
                      </button>
                      <button onClick={() => handleDelete(product.id)} className="p-2 hover:bg-red-500/20 text-gray-400 hover:text-red-400 rounded transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredProducts.length === 0 && (
                <tr><td colSpan={3} className="p-8 text-center text-gray-500">No products found.</td></tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Add/Edit Form */}
        <div className="bg-charcoal-light border border-royal/10 rounded-xl p-6 h-fit sticky top-6">
          <h3 className="text-white font-bold mb-6 flex items-center gap-2">
            {editingId ? <Edit2 size={18} className="text-royal"/> : <Plus size={18} className="text-royal"/>}
            {editingId ? 'Edit Product' : 'Add New Product'}
          </h3>
          
          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="text-xs text-gray-500 uppercase font-bold mb-1 block">Product Name</label>
              <input 
                value={formData.name} 
                onChange={e => setFormData({...formData, name: e.target.value})}
                className="w-full bg-charcoal border border-gray-700 p-3 rounded text-white focus:border-royal outline-none"
                required 
              />
            </div>
            
            <div>
              <label className="text-xs text-gray-500 uppercase font-bold mb-1 block">Category</label>
              <input 
                value={formData.category} 
                onChange={e => setFormData({...formData, category: e.target.value})}
                className="w-full bg-charcoal border border-gray-700 p-3 rounded text-white focus:border-royal outline-none"
                placeholder="e.g. earrings, bangles"
                required 
              />
            </div>

            <div>
              <label className="text-xs text-gray-500 uppercase font-bold mb-1 block">Image URL</label>
              <div className="flex gap-2">
                <input 
                  value={formData.imageUrl} 
                  onChange={e => setFormData({...formData, imageUrl: e.target.value})}
                  className="flex-1 bg-charcoal border border-gray-700 p-3 rounded text-white focus:border-royal outline-none text-xs"
                  placeholder="https://..."
                />
                <button 
                  type="button" 
                  onClick={() => setShowAiGen(!showAiGen)}
                  className={`p-3 rounded border ${showAiGen ? 'bg-royal text-charcoal border-royal' : 'bg-white/5 border-white/10 text-royal hover:bg-white/10'}`}
                  title="Generate with AI"
                >
                  <Sparkles size={18} />
                </button>
              </div>
            </div>

            {/* AI Generator Panel */}
            {showAiGen && (
              <div className="bg-charcoal border border-royal/20 rounded-lg p-4 animate-fade-in space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-royal uppercase tracking-wider flex items-center gap-2">
                    <Sparkles size={12}/> AI Studio
                  </h4>
                  <button type="button" onClick={() => setShowAiGen(false)} className="text-gray-500 hover:text-white"><X size={14}/></button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {LUXURY_PRESETS.map((preset, idx) => (
                    <button 
                      key={idx}
                      type="button"
                      onClick={() => setAiPrompt(preset.prompt)}
                      className="text-[10px] bg-white/5 hover:bg-royal/20 hover:text-royal text-gray-400 px-2 py-1 rounded border border-white/5 transition-colors"
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>

                <textarea
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  placeholder="Describe the image (e.g., gold necklace on beige silk...)"
                  className="w-full bg-black/20 border border-gray-700 p-2 rounded text-xs text-white h-20 resize-none focus:border-royal outline-none"
                />

                <button
                  type="button"
                  onClick={handleGenerateImage}
                  disabled={isGenerating || !aiPrompt}
                  className="w-full bg-royal/10 hover:bg-royal/20 text-royal border border-royal/20 text-xs font-bold py-2 rounded flex items-center justify-center gap-2"
                >
                  {isGenerating ? <Loader2 size={14} className="animate-spin"/> : <Sparkles size={14}/>}
                  {isGenerating ? 'Designing...' : 'Generate Image'}
                </button>

                {generatedImage && (
                  <div className="mt-2 space-y-2">
                    <div className="rounded overflow-hidden border border-royal/30">
                      <img src={generatedImage} alt="AI Generated" className="w-full h-32 object-cover" />
                    </div>
                    <button 
                      type="button"
                      onClick={applyGeneratedImage}
                      className="w-full bg-green-600 hover:bg-green-700 text-white text-xs font-bold py-2 rounded flex items-center justify-center gap-2"
                    >
                      <ImageIcon size={14} /> Use This Image
                    </button>
                  </div>
                )}
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-500 uppercase font-bold mb-1 block">Stock</label>
                <input 
                  type="number" 
                  value={formData.stockLevel} 
                  onChange={e => setFormData({...formData, stockLevel: parseInt(e.target.value)})}
                  className="w-full bg-charcoal border border-gray-700 p-3 rounded text-white focus:border-royal outline-none"
                  required 
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 uppercase font-bold mb-1 block">Alert At</label>
                <input 
                  type="number" 
                  value={formData.minStockThreshold} 
                  onChange={e => setFormData({...formData, minStockThreshold: parseInt(e.target.value)})}
                  className="w-full bg-charcoal border border-gray-700 p-3 rounded text-white focus:border-royal outline-none"
                  required 
                />
              </div>
            </div>

            <div className="pt-4 flex gap-3">
              <button type="submit" className="flex-1 bg-royal text-charcoal font-bold rounded p-3 hover:bg-white transition-colors flex items-center justify-center gap-2">
                <Save size={16} /> Save
              </button>
              {editingId && (
                <button type="button" onClick={resetForm} className="bg-white/10 text-white rounded p-3 hover:bg-white/20 transition-colors">
                  <X size={16} />
                </button>
              )}
            </div>
          </form>
        </div>

      </div>
    </AdminLayout>
  );
};

export default Catalogue;