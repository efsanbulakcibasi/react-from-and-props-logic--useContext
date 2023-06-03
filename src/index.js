import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from './context/tasks';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider>
        {/* bunu sarmaladığımızda Povider fonks ile Tasks.Povider içerisinde children alır parametre olarak.
        dolayısıyla biz app'i dallandırdığımız için ve Appi kapsadığımız için her yerde kullanabiliriz.tüm uygulamamızda geçerli olcak şekilde 
        kullanabiliriz.
        Artık app içindeki tüm işlemlerimizi contex yapısıyla yapıcaz.
        Context'in içinde oluşturduğumuz provider fonskiyonu içinde yapıcaz
        bu durumda Api i olduğu gibi context yapımızı içine taşımamız gerekir. */}
        <App />
    </Provider>
);

reportWebVitals();
