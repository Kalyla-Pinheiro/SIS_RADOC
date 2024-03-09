import React, {useState} from "react";
import "./Documento.css";
import Tesseract from "tesseract.js";

const Documento = () => {
  const [image, setImage] = useState(null);
    const [text, setText] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(URL.createObjectURL(file));

        Tesseract.recognize(
            file,
            'eng', // idioma (neste caso, inglês)
            { logger: m => console.log(m) } // opcional - para acompanhar o progresso no console
        ).then(({ data: { text } }) => {
            setText(text);
        });
      }

    /*
      <h2>OCR (Reconhecimento Óptico de Caracteres) com Tesseract.js em React</h2>

      <input type="file" accept="image/*" onChange={handleImageChange} />
            {image && <img src={image} alt="Imagem de entrada" style={{ maxWidth: '100%' }} />}
            {text && <div>
                <h3>Texto Reconhecido:</h3>
                <p>{text}</p>
            </div>}
    */
      
  return (
    <div className="documento-container">
      <div className="wrapper-documento">
        <h1>Tela de Documentos</h1>
            
      </div>
    </div>
  );
};

export default Documento;
/*import React from "react";
import "./Documento.css";

const Documento = () => {
  return (
    <div className="documento-container">
      <div className="wrapper-documento">
        <h1>Tela de Documentos</h1>
      </div>
    </div>
  );
};

export default Documento;*/
