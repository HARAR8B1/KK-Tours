import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, MessageSquare, Settings, LogOut, Save, Trash2, Plus } from 'lucide-react';
import { getSettings, saveSettings, getPackages, savePackages } from '../../utils/dataStore';
import './Admin.css';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('packages');
  
  const [settings, setSettingsData] = useState(getSettings());
  const [packages, setPackagesData] = useState(getPackages());
  const [saveMessage, setSaveMessage] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('kkAdminToken');
    if (!token) navigate('/admin');
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('kkAdminToken');
    navigate('/admin');
  };

  const handleSettingsChange = (e) => {
    const { name, value } = e.target;
    setSettingsData(prev => ({ ...prev, [name]: value }));
  };

  const saveSettingsForm = (e) => {
    e.preventDefault();
    saveSettings(settings);
    showSaveMessage('Settings updated successfully! Check the live site.');
  };

  const handlePackageChange = (index, field, value) => {
    const updated = [...packages];
    updated[index] = { ...updated[index], [field]: value };
    setPackagesData(updated);
  };

  const addNewPackage = () => {
    const newPkg = {
      id: Date.now(),
      title: "New Tour Package",
      location: "Location",
      duration: "X Days / Y Nights",
      price: "₹...",
      img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format&fit=crop",
      desc: "Package description here."
    };
    setPackagesData([...packages, newPkg]);
  };

  const deletePackage = (index) => {
    if (window.confirm('Are you sure you want to delete this package?')) {
      const updated = packages.filter((_, i) => i !== index);
      setPackagesData(updated);
    }
  };

  const savePackagesList = () => {
    savePackages(packages);
    showSaveMessage('Packages updated successfully! Check the live site.');
  };

  const showSaveMessage = (msg) => {
    setSaveMessage(msg);
    setTimeout(() => setSaveMessage(''), 3000);
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-sidebar">
        <div className="admin-sidebar-header">
          <h3>KK Tours Admin</h3>
        </div>
        <ul className="admin-nav">
          <li className={activeTab === 'packages' ? 'active' : ''} onClick={() => setActiveTab('packages')}>
            <Package size={18} /> Manage Packages
          </li>
          <li className={activeTab === 'settings' ? 'active' : ''} onClick={() => setActiveTab('settings')}>
            <Settings size={18} /> Site Details & Social
          </li>
        </ul>
        <div className="admin-sidebar-footer">
          <button className="btn-logout" onClick={handleLogout}>
            <LogOut size={18} /> Logout
          </button>
        </div>
      </div>

      <div className="admin-main">
        <div className="admin-header">
          <h2>Dashboard - {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
          <a href="/" target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">View Live Site</a>
        </div>
        
        <div className="admin-content">
          {saveMessage && <div className="alert alert-success" style={{backgroundColor: '#dcfce7', color: '#166534', border: '1px solid #bbf7d0'}}>{saveMessage}</div>}
          
          {activeTab === 'packages' && (
            <div className="admin-card">
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '20px'}}>
                <h3>Tour Packages</h3>
                <div>
                  <button className="btn btn-secondary btn-sm" style={{marginRight: '10px'}} onClick={addNewPackage}><Plus size={16}/> Add Package</button>
                  <button className="btn btn-primary btn-sm" onClick={savePackagesList}><Save size={16}/> Save Changes</button>
                </div>
              </div>
              
              <div className="packages-admin-list" style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                {packages.map((pkg, idx) => (
                  <div key={pkg.id} style={{border: '1px solid #ddd', padding: '15px', borderRadius: '8px', display: 'flex', gap: '15px'}}>
                    <div style={{flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}}>
                      <input type="text" className="form-control" value={pkg.title} onChange={(e) => handlePackageChange(idx, 'title', e.target.value)} placeholder="Title" />
                      <input type="text" className="form-control" value={pkg.location} onChange={(e) => handlePackageChange(idx, 'location', e.target.value)} placeholder="Location" />
                      <input type="text" className="form-control" value={pkg.duration} onChange={(e) => handlePackageChange(idx, 'duration', e.target.value)} placeholder="Duration" />
                      <input type="text" className="form-control" value={pkg.price} onChange={(e) => handlePackageChange(idx, 'price', e.target.value)} placeholder="Price" />
                      <input type="text" className="form-control" value={pkg.img} onChange={(e) => handlePackageChange(idx, 'img', e.target.value)} placeholder="Image URL" style={{gridColumn: '1 / -1'}} />
                      <textarea className="form-control" value={pkg.desc} onChange={(e) => handlePackageChange(idx, 'desc', e.target.value)} placeholder="Description" rows="2" style={{gridColumn: '1 / -1'}}></textarea>
                    </div>
                    <div>
                      <button onClick={() => deletePackage(idx)} style={{background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '5px'}}>
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'settings' && (
            <div className="admin-card">
              <h3>Contact Details & Social Links</h3>
              <form onSubmit={saveSettingsForm}>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
                  <div className="form-group">
                    <label>Contact Phone</label>
                    <input type="text" className="form-control" name="phone" value={settings.phone} onChange={handleSettingsChange} />
                  </div>
                  <div className="form-group">
                    <label>WhatsApp Number (format: 919876543210)</label>
                    <input type="text" className="form-control" name="whatsapp" value={settings.whatsapp} onChange={handleSettingsChange} />
                  </div>
                  <div className="form-group" style={{gridColumn: '1 / -1'}}>
                    <label>Address</label>
                    <input type="text" className="form-control" name="address" value={settings.address} onChange={handleSettingsChange} />
                  </div>
                  <div className="form-group" style={{gridColumn: '1 / -1'}}>
                    <label>Email Address</label>
                    <input type="email" className="form-control" name="email" value={settings.email} onChange={handleSettingsChange} />
                  </div>
                  <div className="form-group">
                    <label>Facebook URL</label>
                    <input type="text" className="form-control" name="facebook" value={settings.facebook} onChange={handleSettingsChange} />
                  </div>
                  <div className="form-group">
                    <label>Instagram URL</label>
                    <input type="text" className="form-control" name="instagram" value={settings.instagram} onChange={handleSettingsChange} />
                  </div>
                  <div className="form-group">
                    <label>YouTube URL</label>
                    <input type="text" className="form-control" name="youtube" value={settings.youtube} onChange={handleSettingsChange} />
                  </div>
                  <div className="form-group">
                    <label>Business Hours</label>
                    <input type="text" className="form-control" name="businessHours" value={settings.businessHours} onChange={handleSettingsChange} />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary" style={{marginTop: '20px'}}><Save size={16} style={{marginRight: '8px'}}/> Save Settings</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
