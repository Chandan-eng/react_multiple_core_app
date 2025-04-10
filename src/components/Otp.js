// import { useRef, useState } from "react";

// const Otp=()=>{
//     const [otp,setOtp]=useState('');
//     const [otpFields,setOtpFields]=useState([]);
//     const ref=useRef(null);
//     const handleSentOtp=(length=6)=>{
//         let otp="";
//         for (let i=0;i<length;++i){
//             console.log(Math.floor(Math.random() * 10))
//             otp += Math.floor(Math.random() * 10);
//         }
//         console.log("otp#",otp);
//     }
//     const handleChange=(value,index)=>{
//         console.log('value',value);
//         console.log('index',index);
//         if(value.length===1 && index!==5){
//             otpFields[index+1].focus();
//         }
//         otpFields[index].value=value;
//         setOtp(otpFields.map((otp)=>otp.value).join(''));


//     }

//     console.log('otp',otp);

//     return (
//         <div>
//             <h1>OTP</h1>
//             <div>
//                 {
//                     [1,2,3,4,5,6].map((item,index)=>(
//                         <input
//                          key={index}
//                         type="text" 
//                         style={{width:'50px',margin:'5px'}}
//                         value={otpFields[index]}
//                         onChange={(e)=>{handleChange(e.target.value,index)}}
//                         ref={(input)=>otpFields[index]=input}
//                         maxLength={1}
//                         />
//                     ))
//                 }
//             </div>
//             <div style={{display:'flex',gap:'20px',marginLeft:'50px'}}>
//                 <button>Verify Otp</button>
//                 <button onClick={()=>handleSentOtp()}>Sent Otp</button>
//             </div>
//         </div>
//     )
// }

// export default Otp;
import { useRef, useState } from "react";

const Otp = () => {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]); // Initialize OTP fields
    const [sentOtp, setSentOtp] = useState(""); // Store the sent OTP
    const inputRefs = useRef([]); // Using useRef for input focus handling

    const handleSentOtp = (length = 6) => {
        let generatedOtp = "";
        for (let i = 0; i < length; i++) {
            generatedOtp += Math.floor(Math.random() * 10);
        }
        console.log("Generated OTP:", generatedOtp);
        setSentOtp(generatedOtp);
        setOtp(["", "", "", "", "", ""]); // Clear the OTP fields
        inputRefs.current[0].focus(); // Focus the first input field
    };

    const handleChange = (value, index) => {
        if (!/^\d?$/.test(value)) return; // Allow only single-digit numbers

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move to next input field if a digit is entered
        if (value && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    const verifyOtp = () => {
        if (otp.includes("")) {
            alert("Please fill all the fields");
            return;
        }
        if (otp.join("") === "") {
            alert("Please enter OTP");
            return;
        }
        if (otp.join("") === sentOtp) {
            alert("OTP verified");
        } else {
            alert("Incorrect OTP");
        }
    };

    console.log("OTP:", otp.join(""));

    return (
        <div>
            <h1>OTP</h1>
            <div>
                {otp.map((_, index) => (
                    <input
                        key={index}
                        type="text"
                        style={{ width: "50px", margin: "5px", textAlign: "center", fontSize: "18px" }}
                        value={otp[index]}
                        onChange={(e) => handleChange(e.target.value, index)}
                        onKeyDown={(e) => {
                            if (e.key === "Backspace" && index > 0) {
                                inputRefs.current[index - 1].focus();
                                inputRefs.current[index - 1].select();
                            }
                            if (e.key === "ArrowLeft" && index > 0) {
                                inputRefs.current[index - 1].focus();
                                inputRefs.current[index - 1].select();
                            }
                            if (e.key === "ArrowRight" && index < 5) {
                                inputRefs.current[index + 1].focus();
                                inputRefs.current[index + 1].select();
                            }
                        }
                    
                    }
                        ref={(el) => (inputRefs.current[index] = el)}
                        maxLength={1}
                    />
                ))}
            </div>
            <div style={{ display: "flex", gap: "20px", marginLeft: "50px" }}>
                <button onClick={()=>verifyOtp()}>Verify OTP</button>
                <button onClick={() => handleSentOtp()}>Send OTP</button>
            </div>
        </div>
    );
};

export default Otp;
