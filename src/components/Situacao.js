import { useState } from "react";

function Notas(){
    const [nota1, setNota1] = useState(0);
    const [nota2, setNota2] = useState(0);
    const [nota3, setNota3] = useState(0);
    const [media, setmedia] = useState(0);
    const [situacao, setSituacao] = useState();
 function calcMedia(){
     const media = (nota1 + nota2 + nota3) /3;
     setmedia(media);
     setSituacao(media >= 6 ? "Aprovado" : "Reprovado")
 }

 return(
     <div>
         <h2>Media de Notas com Situacao:</h2>
         <label htmlFor="nota1">Nota1:</label>
         <input
             id="nota1"
             type="number"
             value={nota1}
             onChange={(event)=> setNota1 (Number(event.target.value))}
         />
<br/>

<label htmlFor="nota2">Nota2:</label>
         <input
             id="nota2"
             type="number"
             value={nota2}
             onChange={(event)=> setNota2 (Number(event.target.value))}
         />
<br/>

<label htmlFor="nota3">Nota3:</label>
         <input
             id="nota3"
             type="number"
             value={nota3}
             onChange={(event)=> setNota3 (Number(event.target.value))}
         />
         <br/>
         <button onClick={calcMedia}>Calcular Media</button>
         {media >0 &&(
             <div>
                 <p> A media é: {media}</p>
                 <p> Situacao: {situacao}</p>
             </div> 
         )
         
        }
     </div>


     
 )
}

export default Notas

