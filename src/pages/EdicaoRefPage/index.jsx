import React, { useState } from "react";
//import axios from "axios";
import MenuInferiorCM from "./../../components/MenuCM/index";
import { doc, updateDoc } from 'firebase/firestore';
import Card from '../../components/ButtonCardCM'
import { db, storage } from "../../firebase";
import Header from "./../../components/HeaderCM";
import {v4} from "uuid"
import * as S from './styles';
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";


const options = [
  { value: 1, label: 'Portuguesa'},
  { value: 2, label: 'Italiana'},
  { value: 3, label: 'Oriental'},
  { value: 4, label: 'Alemã'},
];


const EditRefPage = () => {
  const [isUploadModal, setUploadModal]=useState(false)
  const [img, setImg]=useState('')
  const [isEdit, setIsEdit] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [editData, seteditData] = useState({
    title: 'Filé de Boi com Salada Alemã',
    description: 'Carne brasileira regada ao molho, acompanhada de uma deliciosa salada típica da Alemanha.',
    prices: 'Preço R$ 69,90',
    imageUrl:'',
    categories:[],
  });

  const handleCategoryChange=(selected)=>{
    setSelectedCategories(selected)
    const selectedCategoriesLabels=selected.map(option=> option.label)
    seteditData((prevData) => ({
      ...prevData,
      categories: selectedCategoriesLabels,
    }));
    console.log("opções, ", selectedCategories)
  }

  const handleChange =  (event, field) => {
    seteditData({ ...editData, [field]: event.target.value });
  };
  const handleUpdate=async()=>{
  const docRef=doc(db, 'update', 'produto');
  await updateDoc(docRef,{
    title:editData.title, 
    description:editData.description,
    prices:editData.prices,
    imageUrl:editData.imageUrl,
    categories:editData.categories
  })
.then(()=>{
  console.log("dados registrado no banco")
  setIsEdit(false)
})

.catch((error)=>{
  console.log(error);
})
setSelectedCategories([])
  }

    /*axios.post('https://cardapio-digital-backend.onrender.com/adiciona-produto')
  .then((res)=>{
    console.log("dados atualizados", res.data)
    setaddData(res.addData)
  })
  */

  const handleClick = () => {
    setIsEdit(true);
  };
const openModal=()=>{
  setUploadModal(true)
}
  const ImgUpload = async () => {
    try {
    
      const filePath = `files/${v4()}`;
      const imgRef = ref(storage, filePath);

      await uploadBytes(imgRef, img);
    
const downloadUrl=await getDownloadURL(imgRef)
  console.log("Imagem enviada com sucesso:", downloadUrl);
    
  seteditData({ ...editData, imageUrl: downloadUrl });
  setUploadModal(false)

    } catch (error) {
      console.error("Erro ao enviar imagem:", error);
    }
  };
const handleDelete=()=>{
  /* axios.delete('https://cardapio-digital-backend.onrender.com/teste')
  .then((res)=>{
    setEditData(res.data)})
console.log("dados atualizados", editData)
*/
  }




  return (
    <S.PageContainer>
      <Header />
      {isUploadModal ? (
        <S.ModalContainer>
          <S.ModalContent>
          <input type="file" onChange={(e)=>setImg(e.target.files[0]) }/> 
        <button onClick={ImgUpload}>upload</button>

          </S.ModalContent>
         
        
          </S.ModalContainer>
     
       
      ):
      <S.ImgContainer style={{backgroundImage: `url(${editData.imageUrl})`}}>
      <>
      
      <S.ButtonIcon onClick={openModal}>abrir</S.ButtonIcon>
      </>
     
      </S.ImgContainer>
}
    
      
      {isEdit ? (
        <S.Container >
          <h1>
            <input type="text" value={editData.title} onChange={(e) => handleChange(e, "title")} />
          </h1>
          <p>
            <input type="text" value={editData.description} onChange={(e) => handleChange(e, "description")} />
          </p>
          <h2>Categorias</h2>
          <Card onChange={handleCategoryChange} options={options} selectedcategories={selectedCategories}/> <br/>
          <h3><input type="text" value={editData.prices} onChange={(e) => handleChange(e, "prices")} /></h3>
        </S.Container>
      ) : (
        <>
        <S.Container >
          <h1 onClick={handleClick}>{editData.title}</h1>
          <p onClick={handleClick}>{editData.description}</p>
          <Card onChange={handleCategoryChange} options={options} selectedcategories={selectedCategories}/> <br/>
          <h3 onClick={handleClick}>{editData.prices}</h3>  

        </S.Container>
          
        </>
        
        
      )}
      <S.ButtonContainer>
        <S.UpdateButton onClick={handleUpdate}>Atualizar</S.UpdateButton>
        <S.DeleteButton onClick={handleDelete}>Excluir</S.DeleteButton>
      </S.ButtonContainer>
      <MenuInferiorCM />
    </S.PageContainer>
  );
      }
export default EditRefPage;
