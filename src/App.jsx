import React, { useState } from 'react';
import { Phone } from 'lucide-react';

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState('');
  const [cars, setCars] = useState([
    {
      id: 1,
      marque: 'BMW',
      modele: '320i',
      prix: 18500,
      annee: 2020,
      km: 45000,
      carburant: 'Essence',
      couleur: 'Noir',
      transmission: 'Automatique',
      image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop'
    }
  ]);

  const [formData, setFormData] = useState({
    marque: '',
    modele: '',
    prix: '',
    annee: '',
    km: '',
    carburant: 'Essence',
    couleur: '',
    transmission: 'Manuelle',
    image: ''
  });

  const handleAddCar = () => {
    if (formData.marque && formData.modele && formData.prix) {
      setCars([...cars, { ...formData, id: Date.now() }]);
      setFormData({
        marque: '',
        modele: '',
        prix: '',
        annee: '',
        km: '',
        carburant: 'Essence',
        couleur: '',
        transmission: 'Manuelle',
        image: ''
      });
    }
  };

  const handleDeleteCar = (id) => {
    if (confirm('Supprimer cette voiture?')) {
      setCars(cars.filter(car => car.id !== id));
    }
  };

  const handleLogin = () => {
    if (password === 'Pegase123') {
      setIsAdmin(true);
      setPassword('');
    } else {
      alert('Mot de passe incorrect!');
    }
  };

  if (isAdmin) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: 'white', padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid black', paddingBottom: '20px', marginBottom: '20px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>Pégase Automobile - Admin</h1>
          <button onClick={() => setIsAdmin(false)} style={{ padding: '10px 20px', backgroundColor: 'black', color: 'white', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
            Déconnexion
          </button>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ border: '2px solid black', padding: '20px', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '15px' }}>Ajouter une voiture</h2>
            <p style={{ color: '#666', marginBottom: '15px' }}>{cars.length} / 30 voitures</p>

            <input
              type="text"
              placeholder="Marque"
              value={formData.marque}
              onChange={(e) => setFormData({ ...formData, marque: e.target.value })}
              style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid black', fontSize: '14px' }}
            />
            <input
              type="text"
              placeholder="Modèle"
              value={formData.modele}
              onChange={(e) => setFormData({ ...formData, modele: e.target.value })}
              style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid black', fontSize: '14px' }}
            />
            <input
              type="number"
              placeholder="Prix"
              value={formData.prix}
              onChange={(e) => setFormData({ ...formData, prix: e.target.value })}
              style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid black', fontSize: '14px' }}
            />
            <input
              type="number"
              placeholder="Année"
              value={formData.annee}
              onChange={(e) => setFormData({ ...formData, annee: e.target.value })}
              style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid black', fontSize: '14px' }}
            />
            <input
              type="number"
              placeholder="Kilométrage"
              value={formData.km}
              onChange={(e) => setFormData({ ...formData, km: e.target.value })}
              style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid black', fontSize: '14px' }}
            />
            <input
              type="text"
              placeholder="Couleur"
              value={formData.couleur}
              onChange={(e) => setFormData({ ...formData, couleur: e.target.value })}
              style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid black', fontSize: '14px' }}
            />
            <select value={formData.carburant} onChange={(e) => setFormData({ ...formData, carburant: e.target.value })} style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid black', fontSize: '14px' }}>
              <option>Essence</option>
              <option>Diesel</option>
              <option>Électrique</option>
            </select>
            <select value={formData.transmission} onChange={(e) => setFormData({ ...formData, transmission: e.target.value })} style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid black', fontSize: '14px' }}>
              <option>Manuelle</option>
              <option>Automatique</option>
            </select>
            <input
              type="url"
              placeholder="URL Image"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid black', fontSize: '14px' }}
            />

            <button
              onClick={handleAddCar}
              disabled={cars.length >= 30}
              style={{ width: '100%', padding: '15px', backgroundColor: cars.length >= 30 ? '#ccc' : 'black', color: 'white', border: 'none', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' }}
            >
              ➕ Ajouter la voiture
            </button>
          </div>

          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Voitures ({cars.length})</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
            {cars.map((car) => (
              <div key={car.id} style={{ border: '2px solid black', overflow: 'hidden' }}>
                {car.image && <img src={car.image} alt={car.marque} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />}
                <div style={{ padding: '15px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>{car.marque} {car.modele}</h3>
                  <p style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>{car.prix} €</p>
                  <p style={{ fontSize: '12px', color: '#666', marginBottom: '10px' }}>
                    {car.annee} • {car.km} km • {car.carburant} • {car.couleur}
                  </p>
                  <button
                    onClick={() => handleDeleteCar(car.id)}
                    style={{ width: '100%', padding: '10px', backgroundColor: '#d32f2f', color: 'white', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}
                  >
                    🗑️ Supprimer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <div style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 999 }}>
        <button
          onClick={() => {
            const pwd = prompt('Mot de passe:');
            if (pwd) handleLogin();
            else setPassword(pwd);
          }}
          onClickCapture={() => {
            const pwd = prompt('Mot de passe admin:');
            if (pwd === 'Pegase123') setIsAdmin(true);
          }}
          style={{ fontSize: '12px', backgroundColor: 'transparent', border: 'none', color: '#999', cursor: 'pointer', padding: '5px 10px' }}
        >
          admin
        </button>
      </div>

      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '2px solid black', padding: '20px' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px' }}>Pégase Automobile</h1>
          <p style={{ fontSize: '20px', color: '#666' }}>Trouvez votre prochaine voiture</p>
        </div>
      </div>

      <section style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '30px', textAlign: 'center' }}>Nos voitures ({cars.length})</h2>

        {cars.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#999', fontSize: '18px' }}>Aucune voiture disponible</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
            {cars.map((car) => (
              <div key={car.id} style={{ border: '2px solid black', overflow: 'hidden', cursor: 'pointer' }}>
                {car.image && <img src={car.image} alt={car.marque} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />}
                <div style={{ padding: '15px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>{car.marque} {car.modele}</h3>
                  <p style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '15px' }}>{car.prix.toLocaleString()} €</p>
                  
                  <div style={{ fontSize: '12px', color: '#666', marginBottom: '15px', borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd', padding: '10px 0' }}>
                    <p>Année: {car.annee}</p>
                    <p>Kilométrage: {car.km.toLocaleString()} km</p>
                    <p>Carburant: {car.carburant}</p>
                    <p>Transmission: {car.transmission}</p>
                    <p>Couleur: {car.couleur}</p>
                  </div>

                  <a
                    href="tel:0643486124"
                    style={{ display: 'block', width: '100%', padding: '12px', backgroundColor: 'black', color: 'white', textAlign: 'center', textDecoration: 'none', fontWeight: 'bold', marginBottom: '5px', cursor: 'pointer' }}
                  >
                    📞 Mettre en relation
                  </a>
                  <p style={{ fontSize: '11px', color: '#666', textAlign: 'center' }}>06 43 48 61 24</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <footer style={{ borderTop: '2px solid black', padding: '20px', backgroundColor: '#f5f5f5', textAlign: 'center', color: '#666' }}>
        <p style={{ fontWeight: 'bold' }}>Pégase Automobile</p>
        <p style={{ fontSize: '14px' }}>📞 06 43 48 61 24</p>
        <p style={{ fontSize: '12px', marginTop: '10px', color: '#999' }}>© 2024 Tous droits réservés</p>
      </footer>
    </div>
  );
}
