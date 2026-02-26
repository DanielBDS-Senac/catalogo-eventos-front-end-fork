## Abra o terminal e execute o seguinte código:

```bash
npm create vite@latest catalogo-eventos-front-end --template react
cd catalogo-eventos-front-end
npm install
```

##Instale o tailwindcss com o seguinte comando no terminal:
```bash
npm install -D tailwindcss@3.4.17 postcss autoprefixer @tailwindcss/cli
npm install react-router-dom
npx tailwindcss init -p
```

## No arquivo criado **tailwind.config.js** substitua o conteúdo por:

```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0b0f14",
        card: "rgba(255,255,255,0.06)",
        muted: "#9fb0c8",
        text: "#25b309",
        brand1: "#20aa4b",
        brand2: "#7cffc1",
        brand3: "#48cb76",
      },
      borderRadius: {
        radius: "20px",
      },
    },
  },
  plugins: [],
}
```

## No arquivo que está em **src/index.css** substitua tudo pelo seguinte código:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
  min-height: 100vh;
  overflow-x: hidden;
  color: #25b309;
  background: radial-gradient(1200px 800px at 10% -10%, rgba(116,241,255,.15), transparent),
              radial-gradient(1000px 600px at 110% 10%, rgba(165,140,255,.12), transparent),
              linear-gradient(180deg, #0a0d12, #0b0f14 30%, #0b0f14 70%, #0a0d12);
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, Helvetica, sans-serif;
}

```

## Exemplo de organização de pastas

```
src/
│── components/
│     ├── layout/
│     │     ├── Navbar.jsx
│     │     ├── SideMenu.jsx
│     │     └── Hero.jsx
│     ├── eventos/
│     │     ├── EventoCard.jsx
│     │     ├── EventoModal.jsx
│     │     └── EventosGrid.jsx
│     ├── turismo/
│     │     ├── TurismoCard.jsx
│     │     └── TurismoList.jsx
│     └── ui/
│           └── Button.jsx
│
│── pages/
│     ├── Home.jsx
│     ├── Eventos.jsx
│     ├── Turismo.jsx
│     ├── Conta.jsx
│     ├── Contato.jsx
│
│── hooks/
│── context/
│── utils/
│── App.jsx
│── main.jsx
```


## Altere o arquivo **/src/App.tsx**, apague todo o conteúdo e coloque o seguinte código:

```typescript
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Eventos from "./pages/Eventos";
import Turismo from "./pages/Turismo";
import Conta from "./pages/Conta";
import Contato from "./pages/Contato";
import Navbar from "./components/layout/Navbar";
import SideMenu from "./components/layout/SideMenu";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <SideMenu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/turismo" element={<Turismo />} />
        <Route path="/conta" element={<Conta />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}
```
