import { useState } from 'react';
import ButtonW from '../elements/ButtonW'
import styles from '../../styles/Formulario/Formulario.module.css'

const Formulario = () => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log('Nome:', nome);
    console.log('Telefone:', telefone);
    console.log('Email:', email);
    console.log('Mensagem:', mensagem);
    // Resetar os campos após o envio
    setNome('');
    setTelefone('');
    setEmail('');
    setMensagem('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formulario}> {/* Adicione a classe aos elementos */}
      <div>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="tel"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <textarea
          placeholder="Mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          required
        />
      </div>
      
      <div>
        <ButtonW name='Enviar'/>
      </div>

    </form>
  );
};

export default Formulario;