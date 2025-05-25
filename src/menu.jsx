import React, { useState } from 'react';

const postres = [
  {
    id: 1,
    nombre: 'Brownie Vegano',
    descripcion: 'Delicioso brownie de chocolate sin ingredientes de origen animal, rico y esponjoso.',
    precio: '$4.000',
    imagen: 'https://delantaldealces.com/wp-content/uploads/2014/05/brownies-veganos.jpg',
    ingredientes: ['Chocolate negro', 'Harina de almendra', 'Aceite de coco', 'Azúcar de coco'],
    categoria: 'Chocolates'
  },
  {
    id: 2,
    nombre: 'Tarta de Manzana',
    descripcion: 'Tarta tradicional con manzanas orgánicas frescas y base crujiente de avena.',
    precio: '$12.000',
    imagen: 'https://www.hola.com/horizon/landscape/3f40d4998fc3-tarta-manzan-arguinano-t.jpg',
    ingredientes: ['Manzanas orgánicas', 'Harina de avena', 'Canela', 'Jarabe de maple'],
    categoria: 'Frutas'
  },
  {
    id: 3,
    nombre: 'Helado de Coco',
    descripcion: 'Helado cremoso y refrescante hecho con leche de coco natural premium.',
    precio: '$4.000',
    imagen: 'https://www.recetasjudias.com/wp-content/uploads/2017/11/Helado-de-leche-de-coco-Parve-e1643912493338.jpg',
    ingredientes: ['Leche de coco', 'Azúcar de caña', 'Vainilla natural', 'Coco rallado'],
    categoria: 'Helados'
  },
  {
    id: 4,
    nombre: 'Cheesecake de Frutos Rojos',
    descripcion: 'Suave cheesecake vegano con base de nueces y coulis de frutos rojos.',
    precio: '$12.500',
    imagen: 'https://www.cocinavital.mx/wp-content/uploads/2017/06/cheesecake-de-frutos-rojos.jpg',
    ingredientes: ['Anacardos', 'Frutos rojos', 'Base de nueces', 'Limón'],
    categoria: 'Especialidades'
  },
  {
    id: 5,
    nombre: 'Muffins de Arándanos',
    descripcion: 'Esponjosos muffins integrales con arándanos frescos y semillas de chía.',
    precio: '$3.000',
    imagen: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=600&q=80',
    ingredientes: ['Harina integral', 'Arándanos', 'Semillas de chía', 'Leche de almendra'],
    categoria: 'Muffins'
  },
  {
    id: 6,
    nombre: 'Tiramisu Vegano',
    descripcion: 'Versión vegana del clásico tiramisu italiano con mascarpone de anacardos.',
    precio: '$15.000',
    imagen: 'https://cdn.nutritionstudies.org/wp-content/uploads/2022/02/vegan-tiramisu-1.jpg',
    ingredientes: ['Mascarpone vegano', 'Café espresso', 'Cacao en polvo', 'Bizcochos veganos'],
    categoria: 'Especialidades'
  },
  {
    id: 7,
    nombre: 'Galletas de Avena y Plátano x 3',
    descripcion: 'Galletas suaves y saludables con avena integral y plátano maduro. Sin azúcar añadida.',
    precio: '$8.000',
    imagen: 'https://i.blogs.es/0503c9/galletas-proteicas-platano1/1366_2000.jpg',
    ingredientes: ['Avena integral', 'Plátano', 'Canela', 'Chips de chocolate vegano'],
    categoria: 'Galletas'
  },
  {
    id: 8,
    nombre: 'Mousse de Aguacate y Cacao',
    descripcion: 'Mousse suave y decadente hecha con aguacate y cacao puro, endulzada naturalmente.',
    precio: '$13.000',
    imagen: 'https://www.trops.es/wp-content/uploads/2020/03/mousse-aguacate-chocolate-1024x683.jpg',
    ingredientes: ['Aguacate', 'Cacao en polvo', 'Dátil', 'Leche vegetal'],
    categoria: 'Chocolates'
  },
  {
    id: 9,
    nombre: 'Paletas de Mango y Maracuyá',
    descripcion: 'Paletas refrescantes hechas con frutas tropicales 100% naturales.',
    precio: '$3.500',
    imagen: 'https://vivirmejor.mx/wp-content/uploads/2023/06/Portada-paletas-de-mango-maracuya%CC%81.jpg',
    ingredientes: ['Mango', 'Maracuyá', 'Agua de coco', 'Jarabe de agave'],
    categoria: 'Helados'
  },
  {
    id: 10,
    nombre: 'Rollitos de Canela Veganos x 3',
    descripcion: 'Rollitos calientes con un toque de canela y glaseado de anacardos.',
    precio: '$15.000',
    imagen: 'https://okdiario.com/img/2021/09/28/rollos-de-canela-veganos-y-sin-gluten.jpg',
    ingredientes: ['Harina de trigo', 'Canela', 'Azúcar morena', 'Leche de avena'],
    categoria: 'Repostería'
  },
  {
    id: 11,
    nombre: 'Pudín de Chía con Frutas',
    descripcion: 'Pudín nutritivo con semillas de chía remojadas en leche vegetal, servido con frutas frescas.',
    precio: '$8.000',
    imagen: 'https://www.recetasnestle.com.ec/sites/default/files/srh_recipes/f20ac7a04bfc05258302812aa4ab5af4.jpg',
    ingredientes: ['Semillas de chía', 'Leche vegetal', 'Frutas variadas', 'Miel de agave'],
    categoria: 'Frutas'
  },
  {
    id: 12,
    nombre: 'Cupcake de Limón y Coco',
    descripcion: 'Cupcake suave con sabor cítrico y cobertura cremosa de coco rallado.',
    precio: '$4.500',
    imagen: 'https://i.ytimg.com/vi/DIJkDfZ4wvs/maxresdefault.jpg',
    ingredientes: ['Harina de coco', 'Limón', 'Leche de soja', 'Coco rallado'],
    categoria: 'Muffins'
  }
];

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f0f8f0 0%, #e8f5e8 50%, #f5f9f5 100%)',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  header: {
    position: 'relative',
    overflow: 'hidden',
    padding: '60px 16px',
    textAlign: 'center'
  },
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.1,
    pointerEvents: 'none'
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(10px)',
    padding: '10px 20px',
    borderRadius: '50px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#16a34a'
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '24px',
    background: 'linear-gradient(to right, #15803d, #16a34a, #22c55e)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    '@media (min-width: 768px)': {
      fontSize: '4rem'
    }
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#15803d',
    marginBottom: '24px',
    maxWidth: '100%',
    margin: '0 auto 24px',
    lineHeight: 1.5,
    padding: '0 8px'
  },
  filtersContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 16px 32px',
    textAlign: 'center'
  },
  filtersGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '8px'
  },
  filterButton: {
    padding: '10px 18px',
    borderRadius: '50px',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    border: 'none',
    fontSize: '14px'
  },
  filterButtonActive: {
    backgroundColor: '#16a34a',
    color: 'white',
    boxShadow: '0 8px 25px rgba(34, 197, 94, 0.3)'
  },
  filterButtonInactive: {
    backgroundColor: 'white',
    color: '#15803d',
    border: '1px solid #bbf7d0'
  },
  menuGrid: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 16px 60px',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '24px'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '24px',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'all 0.5s ease',
    cursor: 'pointer',
    position: 'relative'
  },
  cardHover: {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)'
  },
  imageContainer: {
    position: 'relative',
    height: '200px',
    overflow: 'hidden'
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.7s ease'
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.2), transparent)',
    opacity: 0,
    transition: 'opacity 0.3s ease'
  },
  favoriteButton: {
    position: 'absolute',
    top: '16px',
    right: '16px',
    padding: '8px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '16px'
  },
  categoryBadge: {
    position: 'absolute',
    top: '16px',
    left: '16px',
    backgroundColor: '#16a34a',
    color: 'white',
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '500'
  },
  ratingContainer: {
    position: 'absolute',
    bottom: '16px',
    left: '16px',
    right: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  ratingBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    padding: '4px 8px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#374151'
  },
  timeBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    padding: '4px 8px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#374151'
  },
  cardContent: {
    padding: '20px'
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '8px',
    transition: 'color 0.3s ease'
  },
  cardDescription: {
    color: '#6b7280',
    marginBottom: '16px',
    lineHeight: 1.6
  },
  ingredientsContainer: {
    marginBottom: '16px'
  },
  ingredientsGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '4px'
  },
  ingredientChip: {
    backgroundColor: '#f0fdf4',
    color: '#15803d',
    padding: '4px 8px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '500'
  },
  moreIngredients: {
    color: '#16a34a',
    fontSize: '12px',
    fontWeight: '500',
    padding: '4px 8px'
  },
  priceContainer: {
    textAlign: 'center'
  },
  price: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#16a34a'
  },
  footer: {
    background: 'linear-gradient(to right, #16a34a, #15803d)',
    padding: '48px 16px',
    textAlign: 'center',
    color: 'white'
  },
  footerTitle: {
    fontSize: '1.75rem',
    fontWeight: 'bold',
    marginBottom: '12px'
  },
  footerSubtitle: {
    fontSize: '1.1rem',
    marginBottom: '24px',
    opacity: 0.9,
    padding: '0 8px'
  },
  socialLinks: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px'
  },
  socialLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    color: 'white',
    padding: '12px 32px',
    borderRadius: '50px',
    fontWeight: '500',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    width: '200px',
    fontSize: '16px'
  },
  footerNote: {
    fontSize: '14px',
    opacity: 0.75,
    marginTop: '24px'
  }
};

function Menu() {
  const [favoritos, setFavoritos] = useState(new Set());
  const [filtroCategoria, setFiltroCategoria] = useState('Todos');
  const [hoveredCard, setHoveredCard] = useState(null);

  const categorias = ['Todos', ...new Set(postres.map(p => p.categoria))];
  
  const postresFiltrados = filtroCategoria === 'Todos' 
    ? postres 
    : postres.filter(p => p.categoria === filtroCategoria);

  const toggleFavorito = (id) => {
    const nuevosFavoritos = new Set(favoritos);
    if (nuevosFavoritos.has(id)) {
      nuevosFavoritos.delete(id);
    } else {
      nuevosFavoritos.add(id);
    }
    setFavoritos(nuevosFavoritos);
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerBackground}>
          <div style={{
            position: 'absolute',
            top: '40px',
            left: '40px',
            width: '128px',
            height: '128px',
            borderRadius: '50%',
            backgroundColor: '#bbf7d0',
            animation: 'pulse 2s infinite'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '160px',
            right: '80px',
            width: '96px',
            height: '96px',
            borderRadius: '50%',
            backgroundColor: '#86efac',
            animation: 'pulse 2s infinite 1s'
          }}></div>
        </div>
        
        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
          <div style={styles.badge}>
            <span style={{ fontSize: '20px' }}>🌱</span>
            <span>100% Vegano & Natural</span>
          </div>
          
          <h1 style={styles.title}>
            Dulces Naturales
          </h1>
          
          <p style={styles.subtitle}>
            Descubre nuestra exquisita selección de postres veganos, elaborados con amor y los mejores ingredientes naturales
          </p>
        </div>
      </div>

      {/* Filtros de categoría */}
      <div style={styles.filtersContainer}>
        <div style={styles.filtersGrid}>
          {categorias.map(categoria => (
            <button
              key={categoria}
              onClick={() => setFiltroCategoria(categoria)}
              style={{
                ...styles.filterButton,
                ...(filtroCategoria === categoria ? styles.filterButtonActive : styles.filterButtonInactive)
              }}
              onMouseEnter={(e) => {
                if (filtroCategoria !== categoria) {
                  e.target.style.backgroundColor = '#f0fdf4';
                }
              }}
              onMouseLeave={(e) => {
                if (filtroCategoria !== categoria) {
                  e.target.style.backgroundColor = 'white';
                }
              }}
            >
              {categoria}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de postres */}
      <div style={styles.menuGrid}>
        {postresFiltrados.map((postre) => (
          <div
            key={postre.id}
            style={{
              ...styles.card,
              ...(hoveredCard === postre.id ? styles.cardHover : {})
            }}
            onMouseEnter={() => setHoveredCard(postre.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Imagen */}
            <div style={styles.imageContainer}>
              <img
                src={postre.imagen}
                alt={postre.nombre}
                style={{
                  ...styles.cardImage,
                  transform: hoveredCard === postre.id ? 'scale(1.1)' : 'scale(1)'
                }}
              />
              
              {/* Overlay gradiente */}
              <div style={{
                ...styles.imageOverlay,
                opacity: hoveredCard === postre.id ? 1 : 0
              }}></div>
              

              {/* Badge de categoría */}
              <div style={styles.categoryBadge}>
                {postre.categoria}
              </div>

              {/* Rating y tiempo */}
              
            </div>

            {/* Contenido */}
            <div style={styles.cardContent}>
              <h3 style={{
                ...styles.cardTitle,
                color: hoveredCard === postre.id ? '#16a34a' : '#1f2937'
              }}>
                {postre.nombre}
              </h3>
              
              <p style={styles.cardDescription}>
                {postre.descripcion}
              </p>

              {/* Ingredientes */}
              <div style={styles.ingredientsContainer}>
                <div style={styles.ingredientsGrid}>
                  {postre.ingredientes.slice(0, 3).map((ingrediente, index) => (
                    <span
                      key={index}
                      style={styles.ingredientChip}
                    >
                      {ingrediente}
                    </span>
                  ))}
                  {postre.ingredientes.length > 3 && (
                    <span style={styles.moreIngredients}>
                      +{postre.ingredientes.length - 3} más
                    </span>
                  )}
                </div>
              </div>

              {/* Precio */}
              <div style={styles.priceContainer}>
                <span style={styles.price}>
                  {postre.precio}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer de contacto */}
      <div style={styles.footer}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={styles.footerTitle}>¿Te gustó nuestro menú?</h2>
          <p style={styles.footerSubtitle}>
            Síguenos en nuestras redes sociales y contáctanos para hacer tu pedido
          </p>
          
          <div style={styles.socialLinks}>
            <a 
              href="#" 
              style={styles.socialLink}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.target.style.transform = 'scale(1)';
              }}
            >
              <span style={{ fontSize: '20px' }}>📘</span>
              Facebook
            </a>
            
            <a 
              href="https://www.instagram.com/dulce.verde2025/" 
              style={styles.socialLink}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.target.style.transform = 'scale(1)';
              }}
            >
              <span style={{ fontSize: '20px' }}>📷</span>
              Instagram
            </a>
          </div>
          
          <p style={styles.footerNote}>
            Haz tu pedido por mensaje directo o WhatsApp
          </p>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
        
        /* Mobile First - Pantallas pequeñas por defecto */
        @media (min-width: 480px) {
          .menu-grid {
            padding: 0 24px 60px;
          }
        }
        
        /* Tablets */
        @media (min-width: 768px) {
          .menu-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 28px;
            padding: 0 24px 70px;
          }
          
          .header {
            padding: 70px 24px;
          }
          
          .footer {
            padding: 56px 24px;
          }
          
          .social-links {
            flex-direction: row;
            justify-content: center;
            gap: 20px;
          }
          
          .social-link {
            width: auto;
            padding: 12px 24px;
          }
        }
        
        /* Desktop */
        @media (min-width: 1024px) {
          .menu-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
            padding: 0 24px 80px;
          }
          
          .header {
            padding: 80px 24px;
          }
          
          .footer {
            padding: 64px 24px;
          }
          
          .image-container {
            height: 240px;
          }
          
          .card-content {
            padding: 24px;
          }
          
          .social-links {
            gap: 24px;
          }
        }
        
        /* Pantallas muy pequeñas */
        @media (max-width: 320px) {
          .title {
            font-size: 2rem;
          }
          
          .subtitle {
            font-size: 1rem;
          }
          
          .filter-button {
            padding: 8px 14px;
            font-size: 13px;
          }
          
          .card-content {
            padding: 16px;
          }
          
          .social-link {
            width: 180px;
            padding: 10px 24px;
            font-size: 15px;
          }
        }
        
        /* Mejoras táctiles para móvil */
        @media (hover: none) and (pointer: coarse) {
          .card:hover {
            transform: none;
          }
          
          .card:active {
            transform: scale(0.98);
          }
          
          .filter-button:hover {
            background-color: inherit;
          }
          
          .filter-button:active {
            transform: scale(0.95);
          }
          
          .favorite-button:hover {
            transform: none;
          }
          
          .favorite-button:active {
            transform: scale(0.9);
          }
          
          .social-link:hover {
            background-color: rgba(255, 255, 255, 0.1);
            transform: none;
          }
          
          .social-link:active {
            background-color: rgba(255, 255, 255, 0.2);
            transform: scale(0.95);
          }
        }
      `}</style>
    </div>
  );
}

export default Menu;
