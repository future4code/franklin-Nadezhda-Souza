import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E03AQFAvjdHhG-G0g/profile-displayphoto-shrink_800_800/0/1647797259240?e=1658966400&v=beta&t=rYT_AoKI6EO3NioxXdM9qSMHU_st9ZzbDUxJh30bPa8" 
          nome="Nadezhda" 
          descricao="Oi, eu sou Nadezhda. Sou aluna da Labenu. Adoro tomar sorvete e ouvir musicas."
        />
        
        <ImagemButton 
          imagem="https://i.pinimg.com/564x/09/0a/ea/090aea0be7fa8331086ce7023350ef0a.jpg" 
          texto="Ver mais"
        />

        <CardPequeno
          imagem="https://i.pinimg.com/564x/11/0c/f7/110cf7e9239491d7b8742409fab5cf5d.jpg" 
          nome="Email: " 
          descricao=" email@domain.com" 
        />

        <CardPequeno
          imagem="https://i.pinimg.com/564x/35/c1/14/35c11477d386737c8890f6cc0c0cd2d7.jpg" 
          nome="Endereço: " 
          descricao=" 221b Baker Street, Londres." 
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências pessoais</h2>
        <CardGrande 
          imagem="https://i.ytimg.com/an/_cy2msyfX-I6vXt0oxRGEg/featured_channel.jpg?v=62829fba" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://scontent.fjdo10-2.fna.fbcdn.net/v/t39.30808-6/221260984_4165603486880457_479290927328533074_n.png?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGlXNXbPxlPKU1b9wzqM81dS6FY8Ym-jFlLoVjxib6MWfGeJt1Wsspj7f7oVM0hkySKQEFHiJ0d4XfSg5vo9mGa&_nc_ohc=zZzDwS9spzQAX-I343T&_nc_ht=scontent.fjdo10-2.fna&oh=00_AT9B-DbUVYt38XnCIf1ZX9_Z9GSejGOjYHY-d_4zVaMiSw&oe=6293DFC6"
          nome="UFPE" 
          descricao="Bacharelado em engenharia civil." 
        />

        <CardGrande 
          imagem="https://media.istockphoto.com/photos/canadian-flag-button-flag-of-canada-badge-3d-illustration-picture-id542202774" 
          nome="Intercambio" 
          descricao="Intercambio Canadá 2015-2016." 
        />

        <CardGrande 
          imagem="https://scontent.fjdo10-2.fna.fbcdn.net/v/t1.6435-9/45416242_2223406121229738_5298895229762404352_n.png?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEwrXRQD1nQNSIPLxSVVyI54VU_PGQbO7XhVT88ZBs7tXM3wVBgsdwlwTaxftNBM4BzZBFu3kVPnPKKz4XtmH9D&_nc_ohc=zw71ADDLVK4AX81d4Jv&_nc_ht=scontent.fjdo10-2.fna&oh=00_AT_In3nqnP6qYvtXXrDN3PnMgNuGEthMHsk2Sk2bXq6hXQ&oe=62B6DEB6" 
          nome="Desenvolvedora I" 
          descricao="Grupo Boticário." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
