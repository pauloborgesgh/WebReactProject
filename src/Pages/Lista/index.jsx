

import { useState, useEffect } from 'react';
import swal from 'sweetalert';
import api from '../../../Service/api.js';
import Header from '../../Components/Header/index.jsx';
import Footer from '../../Components/Footer/index.jsx';
import './lista.css';

const Lista = () => {
  const [denuncias, setDenuncias] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({});
  const [userId, setUserId] = useState(null); // Estado para armazenar o ID do usuário
  
  const IdUsuarioCriado = localStorage.getItem('userId');
  useEffect(() => {
    getUserId(); // Primeiro, obtém o ID do usuário
    getDenuncias(); // Depois, carrega as denúncias
    userId
  }, []);

  const getUserId = async () => {
    try {
      const response = await api.get('http://app-api-prd.up.railway.app/user/id_usuario'); // Supondo que essa rota retorne o usuário logado
      setUserId(response.data.id); // Armazena o ID do usuário no estado
      console.log(`IdUsuarioCriado`,IdUsuarioCriado)
    } catch (error) {
      swal("Erro!", "Não foi possível obter o ID do usuário.", "error");
    }
  };

  const getDenuncias = async () => {
    try {
      const response = await api.get('http://app-api-prd.up.railway.app/denuncias');
      setDenuncias(response.data);
      response.data.forEach(denuncia => {
        console.log(`Denúncia ID: ${denuncia.id}`);
        console.log(`Created By: ${denuncia.created_by}`);
       // Mostra o ID do usuário após ele ser carregado
      });
    } catch (error) {
      swal("Erro!", "Não foi possível carregar as denúncias.", "error");
    }
  };




  const startEditing = (denuncia) => {
    if (denuncia.created_by === IdUsuarioCriado) {
      setEditId(denuncia.id);
      setEditData({ ...denuncia });
    } else {
      swal("Ação não permitida!", "Você não tem permissão para editar esta denúncia.", "error");
    }
  };

  const deleteDenuncia = async (id) => {
    const denunciaToDelete = denuncias.find(denuncia => denuncia.id === id && denuncia.created_by === IdUsuarioCriado);

    if (denunciaToDelete) {
        // Mostra uma caixa de confirmação antes de deletar
        const result = await swal({
            title: "Tem certeza?",
            text: "Você realmente deseja deletar esta denúncia?",
            icon: "warning",
            buttons: ["Cancelar", "Sim, deletar"],
            dangerMode: true,
        });

        // Se o usuário confirmar a exclusão
        if (result) {
            try {
                const response = await api.delete(`https://app-api-prd.up.railway.app/denuncias/${id}`, { data: { created_by: IdUsuarioCriado } }); // Envia o IdUsuarioCriado como `created_by`
                if (response.status === 200) {
                    swal("Denúncia deletada!", "A denúncia foi deletada com sucesso.", "success");
                    getDenuncias(); // Atualiza a lista após deletar
                } else {
                    swal("Erro!", "Não foi possível deletar a denúncia.", "error");
                }
            } catch (error) {
                console.error("Erro ao deletar denúncia:", error);
                swal("Erro!", "Ocorreu um erro ao deletar a denúncia.", "error");
            }
        } else {
            swal("Cancelado", "A denúncia não foi deletada.", "info");
        }
    } else {
        swal("Ação não permitida!", "Você não tem permissão para deletar esta denúncia.", "error");
    }
};



const handleInputChange = (event) => {
  const { name, value } = event.target;
  setEditData(prevData => ({
      ...prevData,
      [name]: value
  }));
};


const saveEdit = async (id) => {
  const denunciaToEdit = denuncias.find(denuncia => denuncia.id === id && denuncia.created_by === IdUsuarioCriado);

  if (denunciaToEdit) {
      // Mostra uma caixa de confirmação antes de salvar as edições
      const result = await swal({
          title: "Confirmar Edição",
          text: "Você realmente deseja salvar as alterações feitas nesta denúncia?",
          icon: "warning",
          buttons: ["Cancelar", "Sim, salvar"],
          dangerMode: false,
      });

      // Se o usuário confirmar a edição
      if (result) {
          try {
              const response = await api.put(`https://app-api-prd.up.railway.app/denuncias/${id}`, editData);
              if (response.status === 200) {
                  swal("Denúncia Atualizada!", "A denúncia foi atualizada com sucesso.", "success");
                  setEditId(null);
                  getDenuncias();
              } else {
                  swal("Erro!", "Não foi possível atualizar a denúncia.", "error");
              }
          } catch (error) {
              console.error("Erro ao atualizar denúncia:", error);
              swal("Erro!", "Ocorreu um erro ao atualizar a denúncia.", "error");
          }
      } else {
          swal("Edição cancelada", "As alterações não foram salvas.", "info");
      }
  } else {
      swal("Ação não permitida!", "Você não tem permissão para editar esta denúncia.", "error");
  }
};

const cancelEditing = () => {
  setEditId(null);
  setEditData({});
};



  return (
    <>
      <Header />
      <div className="container">
        <h1>Lista de Denúncias</h1>
        <div className="card1-container">
          {denuncias.map(denuncia => (
            <div key={denuncia.id} className='card1'>
              {editId === denuncia.id ? (
                <>
                  <p>Rua: <input name="rua" value={editData.rua} onChange={handleInputChange} /></p>
                  <p>Número: <input name="numero" value={editData.numero} onChange={handleInputChange} /></p>
                  <p>Bairro: <input name="bairro" value={editData.bairro} onChange={handleInputChange} /></p>
                  <p>Data: <input name="Dia" value={editData.Dia} onChange={handleInputChange} /></p>
                  <p>Cidade: <input name="cidade" value={editData.cidade} onChange={handleInputChange} /></p>
                  <p>Observação: <input name="obs" value={editData.obs} onChange={handleInputChange} /></p>
                  <button onClick={() => saveEdit(denuncia.id)}>Salvar</button>
                  <button onClick={cancelEditing}>Cancelar</button>
                </>
              ) : (
                <>
                  <p>Rua: <span>{denuncia.rua}</span></p>
                  <p>Número: <span>{denuncia.numero}</span></p>
                  <p>Bairro: <span>{denuncia.bairro}</span></p>
                  <p>Data: <span>{new Date(denuncia.Dia).toLocaleDateString('pt-BR')}</span></p>
                  <p>Cidade: <span>{denuncia.cidade}</span></p>
                  <p>Observação: <span>{denuncia.obs}</span></p>
                  <button
                    className='edit'
                    onClick={() => startEditing(denuncia)}
                    // Desabilita o botão se o usuário não for o criador
                  >
                    Editar
                  </button>
                  <button
                    className='delete'
                    onClick={() => deleteDenuncia(denuncia.id)}
                     // Desabilita o botão se o usuário não for o criador
                  >
                    Deletar
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Lista;
