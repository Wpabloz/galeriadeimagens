import { useState } from 'react';
import ImageCard from './components/ImageCard';
import './App.css';

function App() {
  const [imagens, setImagens] = useState<{ src: string; legenda: string }[]>([]);
  const [src, setSrc] = useState('');
  const [legenda, setLegenda] = useState('');

  const adicionarImagem = () => {
    if (src && legenda) {
      setImagens([...imagens, { src, legenda }]);
      setSrc('');
      setLegenda('');
    }
  };

  return (
    <div className="App">
      <h1>Galeria de Imagens</h1>
      <div>
        <input
          type="text"
          placeholder="URL da imagem"
          value={src}
          onChange={(e) => setSrc(e.target.value)}
        />
        <input
          type="text"
          placeholder="Legenda"
          value={legenda}
          onChange={(e) => setLegenda(e.target.value)}
        />
        <button onClick={adicionarImagem}>Adicionar Imagem</button>
      </div>
      <div>
        {imagens.map((img, index) => (
          <ImageCard key={index} src={img.src} legenda={img.legenda} />
        ))}
      </div>
    </div>
  );
}

export default App;