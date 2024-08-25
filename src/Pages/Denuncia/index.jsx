// import { TextField, Button, Container, Box, Typography } from '@mui/material';
// import { useEffect, useState, useRef } from 'react';
// import swal from 'sweetalert';
// import api from '../../../Service/api.js'
// import Footer from "../../Components/Footer";
// import Header from "../../Components/Header";
// import './denuncia.css';

// function Denuncia() {
//   const [denuncias, setUsers] = useState([]);
//   const inputRua = useRef();
//   const inputNumero = useRef();
//   const inputBairro = useRef();
//   const inputDia = useRef();
//   const inputCidade = useRef();
//   const inputObs = useRef();

//   async function createDenuncia() {
//     try {
//       await api.post('/denuncias', {
//         rua: inputRua.current.value,
//         numero: inputNumero.current.value,
//         bairro: inputBairro.current.value,
//         Dia: inputDia.current.value,
//         cidade: inputCidade.current.value,
//         obs: inputObs.current.value
//       });

//       swal("Denuncia Cadastrada", "Denuncia foi Cadastrada com Sucesso.", "success");
//       // Limpar campos após o envio
//       inputRua.current.value = '';
//       inputNumero.current.value = '';
//       inputBairro.current.value = '';
//       inputDia.current.value = '';
//       inputCidade.current.value = '';
//       inputObs.current.value = '';
//     } catch (error) {
//       swal("Erro!", "Ocorreu um erro ao Cadastrar o usuário.", "error");
//     }
//   }

//   return (
//     <>
//       <Header />
//       <Container maxWidth="md">
//         <Typography variant="h4" gutterBottom>
//           Cadastro de Denúncia
//         </Typography>
//         <Box component="form" noValidate autoComplete="off">
//           <Box display="flex" flexWrap="wrap" justifyContent="space-between" mb={2}>
//             <TextField
//               style={{ flexBasis: '48%' }}
//               label="Rua"
//               placeholder="Rua"
//               name="rua"
//               type="text"
//               required
//               inputRef={inputRua}
//               variant="outlined"
//               InputLabelProps={{
//                 style: { color: 'white' }
//               }}
//             />
//             <TextField
//               style={{ flexBasis: '48%' }}
//               label="Número"
//               placeholder="Número"
//               name="numero"
//               type="number"
//               required
//               inputRef={inputNumero}
//               variant="outlined"
//               InputLabelProps={{
//                 style: { color: 'white' }
//               }}
//             />
//           </Box>
//           <Box display="flex" flexWrap="wrap" justifyContent="space-between" mb={2}>
//             <TextField
//               style={{ flexBasis: '48%' }}
//               label="Bairro"
//               placeholder="Bairro"
//               name="bairro"
//               type="text"
//               required
//               inputRef={inputBairro}
//               variant="outlined"
//               InputLabelProps={{
//                 style: { color: 'white' }
//               }}
//             />
//             <TextField
//               style={{ flexBasis: '48%' }}
//               label="Data"
//               placeholder="Dia"
//               name="dia"
//               type="date"
//               required
//               inputRef={inputDia}
//               InputLabelProps={{
//                 shrink: true,
//                 style: { color: 'white' }
//               }}
//               variant="outlined"
//             />
//           </Box>
//           <Box display="flex" flexWrap="wrap" justifyContent="space-between" mb={1}>
//             <TextField
//               style={{ flexBasis: '48%' }}
//               label="Cidade"
//               placeholder="Cidade"
//               name="cidade"
//               type="text"
//               required
//               inputRef={inputCidade}
//               variant="outlined"
//               InputLabelProps={{
//                 style: { color: 'white' }
//               }}
//             />
//             <TextField
//               style={{ flexBasis: '48%' }}
//               label="Observação"
//               placeholder="Observação"
//               name="obs"
//               type="text"
//               inputRef={inputObs}
//               variant="outlined"
//               multiline
//               rows={4}
//               InputLabelProps={{
//                 style: { color: 'white' }
//               }}
//             />
//           </Box>
//           <Box display="flex" justifyContent="center" mt={2}>
//             <Button
//               style={{ width: '100%' }}
//               variant="contained"
//               color="primary"
//               onClick={createDenuncia}
//             >
//               Enviar Cadastro
//             </Button>
//           </Box>
//         </Box>
//       </Container>
//       <Footer />
//     </>
//   );
// }

// export default Denuncia; 
// acima o

// import { TextField, Button, Container, Box, Typography } from '@mui/material';
// import { useState, useRef } from 'react';
// import swal from 'sweetalert';
// import api from '../../../Service/api.js';
// import Footer from "../../Components/Footer";
// import Header from "../../Components/Header";
// import './denuncia.css';

// function Denuncia() {
//   const inputRua = useRef();
//   const inputNumero = useRef();
//   const inputBairro = useRef();
//   const inputDia = useRef();
//   const inputCidade = useRef();
//   const inputObs = useRef();

//   async function createDenuncia() {
//     const userId = localStorage.getItem('userId'); // Assumindo que você armazena o ID do usuário no localStorage

//     try {
//       await api.post('/denuncias', {
//         rua: inputRua.current.value,
//         numero: inputNumero.current.value,
//         bairro: inputBairro.current.value,
//         Dia: inputDia.current.value,
//         cidade: inputCidade.current.value,
//         obs: inputObs.current.value,
//         userId // Incluindo o ID do usuário no corpo da requisição
//       });

//       swal("Denúncia Cadastrada", "A denúncia foi cadastrada com sucesso.", "success");
//       // Limpar campos após o envio
//       inputRua.current.value = '';
//       inputNumero.current.value = '';
//       inputBairro.current.value = '';
//       inputDia.current.value = '';
//       inputCidade.current.value = '';
//       inputObs.current.value = '';
//     } catch (error) {
//       swal("Erro!", "Ocorreu um erro ao cadastrar a denúncia.", "error");
//     }
//   }

//   return (
//     <>
//       <Header />
//       <Container maxWidth="md">
//         <Typography variant="h4" gutterBottom>
//           Cadastro de Denúncia
//         </Typography>
//         <Box component="form" noValidate autoComplete="off">
//           <Box display="flex" flexWrap="wrap" justifyContent="space-between" mb={2}>
//             <TextField
//               style={{ flexBasis: '48%' }}
//               label="Rua"
//               placeholder="Rua"
//               name="rua"
//               type="text"
//               required
//               inputRef={inputRua}
//               variant="outlined"
//               InputLabelProps={{
//                 style: { color: 'white' }
//               }}
//             />
//             <TextField
//               style={{ flexBasis: '48%' }}
//               label="Número"
//               placeholder="Número"
//               name="numero"
//               type="number"
//               required
//               inputRef={inputNumero}
//               variant="outlined"
//               InputLabelProps={{
//                 style: { color: 'white' }
//               }}
//             />
//           </Box>
//           <Box display="flex" flexWrap="wrap" justifyContent="space-between" mb={2}>
//             <TextField
//               style={{ flexBasis: '48%' }}
//               label="Bairro"
//               placeholder="Bairro"
//               name="bairro"
//               type="text"
//               required
//               inputRef={inputBairro}
//               variant="outlined"
//               InputLabelProps={{
//                 style: { color: 'white' }
//               }}
//             />
//             <TextField
//               style={{ flexBasis: '48%' }}
//               label="Data"
//               placeholder="Dia"
//               name="dia"
//               type="date"
//               required
//               inputRef={inputDia}
//               InputLabelProps={{
//                 shrink: true,
//                 style: { color: 'white' }
//               }}
//               variant="outlined"
//             />
//           </Box>
//           <Box display="flex" flexWrap="wrap" justifyContent="space-between" mb={1}>
//             <TextField
//               style={{ flexBasis: '48%' }}
//               label="Cidade"
//               placeholder="Cidade"
//               name="cidade"
//               type="text"
//               required
//               inputRef={inputCidade}
//               variant="outlined"
//               InputLabelProps={{
//                 style: { color: 'white' }
//               }}
//             />
//             <TextField
//               style={{ flexBasis: '48%' }}
//               label="Observação"
//               placeholder="Observação"
//               name="obs"
//               type="text"
//               inputRef={inputObs}
//               variant="outlined"
//               multiline
//               rows={4}
//               InputLabelProps={{
//                 style: { color: 'white' }
//               }}
//             />
//           </Box>
//           <Box display="flex" justifyContent="center" mt={2}>
//             <Button
//               style={{ width: '100%' }}
//               variant="contained"
//               color="primary"
//               onClick={createDenuncia}
//             >
//               Enviar Cadastro
//             </Button>
//           </Box>
//         </Box>
//       </Container>
//       <Footer />
//     </>
//   );
// }

// export default Denuncia; 2 parte que estou testamdo

import { TextField, Button, Container, Box, Typography } from '@mui/material';
import { useRef } from 'react';
import swal from 'sweetalert';
import api from '../../../Service/api.js';
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import './denuncia.css';

function Denuncia() {
  const inputRua = useRef();
  const inputNumero = useRef();
  const inputBairro = useRef();
  const inputDia = useRef();
  const inputCidade = useRef();
  const inputObs = useRef();

  async function createDenuncia() {
    const created_by = localStorage.getItem('userId');  // Obtém o ID do usuário do localStorage

    // Formata a data corretamente para YYYY-MM-DD
    const dia = inputDia.current.value;

    console.log('Dados enviados:', {
      rua: inputRua.current.value,
      numero: inputNumero.current.value,
      bairro: inputBairro.current.value,
      Dia: dia,  // Envia o "dia" formatado corretamente
      cidade: inputCidade.current.value,
      obs: inputObs.current.value,
      created_by,  // Inclui o campo created_by no log
    });

    try {
      const response = await api.post('/denuncias', {
        rua: inputRua.current.value,
        numero: inputNumero.current.value,
        bairro: inputBairro.current.value,
        Dia: dia,  // Envia o "dia" formatado corretamente
        cidade: inputCidade.current.value,
        obs: inputObs.current.value,
        created_by,  // Envia o campo created_by na requisição
      });

      swal("Denúncia Cadastrada", `A denúncia foi cadastrada com sucesso.`, "success");

      // Limpar campos após o envio
      inputRua.current.value = '';
      inputNumero.current.value = '';
      inputBairro.current.value = '';
      inputDia.current.value = '';
      inputCidade.current.value = '';
      inputObs.current.value = '';
    } catch (error) {
      console.error('Erro ao cadastrar denúncia:', error); // Log de erro para depuração
      swal("Erro!", "Ocorreu um erro ao cadastrar a denúncia.", "error");
    }
  }

  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Cadastro de Denúncia
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <Box display="flex" flexWrap="wrap" justifyContent="space-between" mb={2}>
            <TextField
              style={{ flexBasis: '48%' }}
              label="Rua"
              placeholder="Rua"
              name="rua"
              type="text"
              required
              inputRef={inputRua}
              variant="outlined"
              InputLabelProps={{
                style: { color: 'white' }
              }}
            />
            <TextField
              style={{ flexBasis: '48%' }}
              label="Número"
              placeholder="Número"
              name="numero"
              type="number"
              required
              inputRef={inputNumero}
              variant="outlined"
              InputLabelProps={{
                style: { color: 'white' }
              }}
            />
          </Box>
          <Box display="flex" flexWrap="wrap" justifyContent="space-between" mb={2}>
            <TextField
              style={{ flexBasis: '48%' }}
              label="Bairro"
              placeholder="Bairro"
              name="bairro"
              type="text"
              required
              inputRef={inputBairro}
              variant="outlined"
              InputLabelProps={{
                style: { color: 'white' }
              }}
            />
            <TextField
              style={{ flexBasis: '48%' }}
              label="Data"
              placeholder="Dia"
              name="Dia"
              type="date"  // Tipo de input modificado para date
              required
              inputRef={inputDia}
              InputLabelProps={{
                shrink: true,
                style: { color: 'white' }
              }}
              variant="outlined"
            />
          </Box>
          <Box display="flex" flexWrap="wrap" justifyContent="space-between" mb={1}>
            <TextField
              style={{ flexBasis: '48%' }}
              label="Cidade"
              placeholder="Cidade"
              name="cidade"
              type="text"
              required
              inputRef={inputCidade}
              variant="outlined"
              InputLabelProps={{
                style: { color: 'white' }
              }}
            />
            <TextField
              style={{ flexBasis: '48%' }}
              label="Observação"
              placeholder="Observação"
              name="obs"
              type="text"
              inputRef={inputObs}
              variant="outlined"
              multiline
              rows={4}
              InputLabelProps={{
                style: { color: 'white' }
              }}
            />
          </Box>
          <Box display="flex" justifyContent="center" mt={2}>
            <Button
              style={{ width: '100%' }}
              variant="contained"
              color="primary"
              onClick={createDenuncia}
            >
              Enviar Cadastro
            </Button>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default Denuncia;
