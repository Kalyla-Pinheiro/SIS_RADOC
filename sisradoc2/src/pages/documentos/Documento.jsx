import React, { useState, useEffect } from "react";
import "./Documento.css";
import apiUrls from "../../apis/apiUrls";

const Documento = () => {
  const [pdfs, setPdfs] = useState([]);

  useEffect(() => {
    const fetchPdfs = async () => {
      try {
        const response = await fetch(apiUrls.listar_pdf);
        if (response.ok) {
          const data = await response.json();
          setPdfs(data.files);
        } else {
          console.error("Erro ao buscar os PDFs:", response.statusText);
        }
      } catch (error) {
        console.error("Erro ao buscar os PDFs:", error);
      }
    };

    fetchPdfs();
  }, []);

  return (
    <div className="ajuste">
      <div className="documento-container">
        <div className="wrapper-documento">
          <h1>Tela de Documentos</h1>
          <div className="miniaturas-container">
            {pdfs.map((pdf, index) => (
              <a
                href={`http://localhost:5000/uploads/${pdf}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div key={index} className="miniatura-pdf">
                  <p>{pdf}</p>
                </div>
                {/* <img src="../../../public/pdf-img.png" alt="icone-pdf" /> */}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documento;
