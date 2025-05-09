
import "./info.css";

const Info = () => {
    return (
        <section className="info-container">
            <div className="info-card">
                <h1 className="info-title">Desarrollador React | Creando experiencias digitales</h1>
                <p className="info-description">
                    Especializado en Firebase, Vercel y optimización visual con Cloudinary. Resolviendo problemas y construyendo interfaces intuitivas.
                </p>
                <button className="cta-button">Ver proyectos</button>
            </div>

            <div className="info-grid">
                <div className="info-item">
                    <h2>🚀 Experiencia</h2>
                    <p>React, Firebase, vercel, Css Grid/Flexbox</p>
                </div>
                <div className="info-item">
                    <h2>💡 Diferenciador</h2>
                    <p>Enfoque emprendedor, soluciones escalables</p>
                </div>
                <div className="info-item">
                    <h2>🎯 Qué aporto</h2>
                    <p>Optimización, diseño escalable, usabilidad</p>
                </div>
            </div>
        </section>
    );
};

export default Info;