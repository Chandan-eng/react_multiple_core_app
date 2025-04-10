import { useState } from "react"

const ImageUpload=()=>{
    const [img,setImg]=useState(null);

    const convertBase64=(file)=>{
        return new Promise((resolve,reject)=>{
            const fileReader=new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload=()=>{
                resolve(fileReader.result);
            }
            fileReader.onerror=(error)=>{
                reject(error);
            }
        })
    }


    const handleImage= async (e)=>{
        const file=e.target.files[0]
        const base64= await convertBase64(file);
        console.log(base64);
        console.log(URL.createObjectURL(file));
        if(file){
            setImg(URL.createObjectURL(file))
        }
    }

    return(
        <div>
            <h1>Upload Image...</h1>
            <div>
                <input type="file" accept="image/*" onChange={(e)=>handleImage(e)}/>
            {
                img && <img src={img} alt="preview" style={{width:'200px',marginTop:'10px'}}/>
            }
            </div>

        </div>
    )
}

export default ImageUpload;