import "./Inicio.css"
import subrayado_izq from "../assets/subrayado_izq.png"
import subrayado_centro from "../assets/subrayado_centro.png"
import { useEffect, useState } from 'react'

function TypingEffect({ text }) {
    const [currentWord, setCurrentWord] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [linea, setLinea] = useState('|');

    useEffect(() => {
        const lineaInterval = setInterval(() => {
            setLinea(prevLinea => (prevLinea === '|' ? '' : '|'));
        }, 500);
        return () => clearInterval(lineaInterval);
    }, []);

    useEffect(() => {
        setCurrentWord('');
        setCurrentIndex(0);
    }, [text]);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeoutId = setTimeout(() => {
                setCurrentWord(prev => prev + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, 100);
            return () => clearTimeout(timeoutId);
        }
    }, [currentIndex, text]);

    return (
        <span>
            {" "+currentWord}
            {linea}
        </span>
    );
}

function Inicio() {
    const spanContents = ["Construcción", "Interiores", "El Hogar"];
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        if (currentTextIndex < spanContents.length) {
            const timeoutId = setTimeout(() => {
                setCurrentTextIndex(prevIndex => prevIndex + 1);
            }, spanContents[currentTextIndex].length * 100 + 1000);
            return () => clearTimeout(timeoutId);
        }else {
            const timeoutId = setTimeout(() => {
                setCurrentTextIndex(0);
            }, 1);
            return () => clearTimeout(timeoutId);
        }
    }, [currentTextIndex]);
    return (
        <>
        <title>Edu - Holding Group</title>
        <div className="inicio_container">
            <div className="first_container">
                <div className="text_container">
                    <h1>Soluciones para 
                        {spanContents[currentTextIndex] && (
                            <TypingEffect text={spanContents[currentTextIndex]} />
                        )}
                    </h1>
                </div>
            </div>

            <div className="trust_container">
                <h1>¿Por qué debes confiar en nosotros?</h1>
                <img className="subrayado" src={subrayado_centro} alt="subrayado" draggable="false"/>
                <p>En Edu Holding Group, nos dedicamos a ofrecer una educación de alta calidad a través de programas personalizados impartidos por instructores expertos. Nuestra metodología innovadora combina teoría y práctica, asegurando que cada estudiante desarrolle las habilidades necesarias para triunfar en su carrera. Con un enfoque centrado en el alumno y una red activa de oportunidades, estamos comprometidos a apoyar tu crecimiento personal y profesional en cada paso del camino.</p>
            </div>

            <div className="information_container">
                <h1>¿Tienes un proyecto grande?</h1>
                <img className="subrayado" src={subrayado_izq} alt="subrayado"  draggable="false"/>
                <p>Nosotros te brindamos los mejores productos, con el mejor servicio.</p>
                <button>Necesito información</button>
            </div>

            <div className="support_container">
                <h1>Nuestros clientes nos respaldan</h1>
                <img className="subrayado" src={subrayado_centro} alt="subrayado"  draggable="false"/>
                <p>Insertar comments de clientes</p>
            </div>

            <div className="brands_container">
                <h1>Trabajamos con las mejores marcas</h1>
                <img className="subrayado" src={subrayado_centro} alt="subrayado"  draggable="false"/>
                <p>Insertar Carrousel</p>
            </div>

            <div className="contact_container">
                <div className="contact_info_container">
                    <h1>Es hora de empezar a construir tu mejor oportunidad de negocio</h1>
                    <img className="subrayado" src={subrayado_izq} alt="subrayado"  draggable="false"/>
                    <p>Completando el formulario te asesoramos según tu necesidad</p>
                </div>
                <div className="contact_form_container">
                    <FormInicio/>
                </div>
            </div>

        </div>
        </>
    )
}

function FormInicio() {
    return (
        <form action="">
            <input type="text" placeholder="¿Cuál es tu nombre?" required/>
            <input type="text" placeholder="¿Cuál es tu apellido?" required/>
            <input type="email" placeholder="¿Algún correo para escribirte?" required/>
            <input type="number" placeholder="¿Algún telefono para llamarte?" required/>
            <textarea
                placeholder="Describe tu necesidad"
                rows="4"
                cols="50"
            />
            <button type="submit">Necesito asesoría</button>
        </form>
    );
}

export default Inicio