import{j as e,a as y,u as I,r,w as O,m as c,x as k,y as f,z as w,Q as q,A as K,B as S,C as P,D as M}from"./index-5f3f7aa1.js";import{u as V}from"./useDispatch-83269ac2.js";const G="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfUAAAH1CAYAAADvSGcRAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QwTDhwBfsbw4AAABxtJREFUeNrt3NGNgzAQRdFMRFlUQgOuiQZcifuafEf5iFCA2HBOCSOxdx/ZbGTmAwAY39MJAEDUAQBRBwBEHQAQdQAQdQBA1AEAUQcARB0ARB0AEHUAQNQBAFEHAEQdAEQdABB1AEDUAQBRBwBRBwBEHQAQdQBA1AFA1AEAUQcARB0AEHUAQNQBQNQBAFEHAEQdABB1ABB1AEDUAQBRBwBEHQBEHQAQdQBA1AEAUQcARB0ARB0AEHUAQNQBAFEHAFEHAEQdABB1AEDUAQBRBwBRBwBEHQAQdQBA1AFA1AEAUQcARB0AEHUAEHUAQNQBAFEHAEQdABB1ABB1AEDUAQBRBwC+m5wA+MW8rOkK71ot4Qr8Q2R6HgHhFnssdUDEAVEHRBwQdUDIAVEHxBxEHRByQNQBMQdEHRBzQNRBzAFRB8QcGJL//Q6CDljqgJgDljog6IClDmIOYKmDoAOiDgg60D+v30HMAUsdEHRA1AFBB0QdBB1A1EHQAVEHBB0QdUDQAVEHQQcQdRB0QNQBQQdEHRB0QNRB0AFEHQAQdbDSAVEHBB0QdRB0AFEHAEQdrHRA1AFBB0QdABB1sNIBRB0ARB2w0gFRBwQdEHUAQNTBSgcQdQAQdQBA1OHyvHoHRB0AEHWw0gFEHQBEHQAQdbgkr94BUQcARB0AEHXYlVfvgKgDAKIOAIg67Mqrd0DUAQBRBwBEHQBEHfjk83RA1AEAUQcARB0ARB0AGMfkBMDVtFrCFRB1ACEHUYe78HU2MQdRBxBzOJQ/lAMEHSx1ADEHSx1A0EHUAUEHRB0QdBB1AEEHUQcQdBB1QNABUQcAUQew0kHUAQBRB7DSQdQBAFEHrHQQdQBA1AGsdBB1AEDUAUDUAQ7m1TuIOgAg6gAg6gCAqAMAog4AiDoAiDoAIOoAgKgDAKIOAIg6AIg6ACDqAICoAwCiDgCiDgCIOgAg6gCAqAOAqAMAog4AiDoAIOoAgKgDPZiXNV0B9hGZnif80IYztFrCFbDUEXQARB0ARB0AEHUAQNQBAFEHAFEHAEQdABB1AEDUAQBRBwBRBwBEHQAQdQBA1AFA1AEAUQcARB0AEHUAQNQBQNQBAFEHAEQdABB1ABB1AEDUAQBRBwBEHQBEHQAQdQBA1AEAUQcARB0ARB0AEHUAQNQBAFEHAFEHAEQdABB1AEDUAUDUAQBRBwBEHQAQdQBA1AFA1AEAUQcARB0AEHUAEHUAQNQBAFEHAEQdABB1ABB1AEDUAQBRBwBEHQBEHQAQdQBA1AEAUacjrZZwBYBzRGa6AmwwL6uHxi9/YKkDAKIOAIg6AIg6ACDqAICoAwCiDozH19lA1AEAUQcAUQcARB0AEHUAQNQBQNQBAFEHAEQdABB1AEDUAUDUAQBRBwBEHQAQdQAQdQBA1AEAUQcARB0ARB0AEHUAQNQBAFEHAEQdAEQdABB1AEDUAQBRBwBRBwBEHQAQdQBA1AFA1AEAUQcARB0AEHUAQNQBQNQBAFEHAEQdABB1ABB1AEDUAQBRBwBEHQBE3QkAQNQBAFEHAEQdABB1ABB1AEDUAQBRBwBEHQBEHQAQdQBA1AEAUQcARB0ARB0AEHUAQNQBAFEHAFEHAEQdABB1AEDUAUDUAQBRBwBEHQAQdQBA1AFA1AEAUQcARB0AEHUAEHUAQNQBAFEHAEQdAEQdABB1AEDUAQBRBwBEHQBEHQAQdQBA1AEAUQcAUQcARB0AEHUAQNQBAFEHAFEHAEQdABB1AEDUAUDUAQBRBwBEHQAQdQAQdQBA1AEAUQcARB0AEHUAEHUAQNQBAFEHAEQdAEQdABB1AEDUAQBRBwBRBwBEHQAQdQBA1AEAUQcAUQcARB0AEHUAQNQBQNQBAFEHAEQdABB1AEDUAUDUAQBRBwBEHQAQdQAQdQBA1AEAUQcARB0ARB0AEHUAQNQBAFEHAEQdAEQdABB1AEDUAQBRBwBRBwBEHQAQdQBA1AFA1AEAUQcARB0AEHUAQNQBQNQBAFEHAEQdABB1ABB1AEDUAQBRBwBEHQAQdQAQdQBA1AEAUQcARB0ARB0AEHUAQNQBAFEHAFEHAEQdABB1AEDUAQBRBwBRBwBEHQAQdQBA1AFA1AEAUQcARB0AEHU4RaslXAHoUWSmKwCApQ4AiDoAIOoAgKgDgKgDAKIOAIg6ACDqACDqAICoAwCiDgCIOgAg6gAg6gCAqAMAog4AiDoAiDoAIOoAgKgDAKIOAKIOAIg6ACDqAICoAwCiDgCiDgCIOgAg6gCAqAOAqAMAog4AiDoAIOoAIOoAgKgDAKIOAIg6ACDqACDqAICoAwCiDgCIOgCIOgAg6gCAqAMAog4AiDoAiDoAIOoAgKgDAKIOAKIOAIg6ACDqAICoA4CoAwCiDgCIOgAg6gCAqAOAqAMAog4AiDoAIOoAcA8v6m2pecAW/JMAAAAASUVORK5CYII=",h="/assets/glimerenew-eddb1a26.svg",L="/assets/google-b0b9055a.png",W="/assets/login-img-2d54e5e2.jpg";function Y(A){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:`w-full flex flex-col items-center px-[40px] duration-300 ${A.isVisible?"opacity-100":"opacity-0"}`,children:[e.jsxs("div",{className:"flex flex-col items-center ",children:[e.jsx("img",{src:h,alt:"",className:"w-[50px] mb-[20px]"}),e.jsx("h1",{className:" font-bold text-[22px] mb-[30px]",children:"Create an Account"})]}),e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:"w-full flex flex-row",children:[e.jsx("div",{className:"sm:col-span-3 mb-4 mr-5 flex-[1]",children:e.jsx("div",{className:"mt-2",children:e.jsx("input",{required:!0,type:"text",value:A.registerUser.firstname,name:"firstname",placeholder:"First Name",autoComplete:"name",className:"block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm  ring-black placeholder:text-gray-400 ring-[1px] focus:ring-[#9d5c0d] sm:text-sm sm:leading-6 bg-[#FFF7E9]",onChange:A.handleUserChange})})}),e.jsx("div",{className:"sm:col-span-3 mb-4 flex-[1]",children:e.jsx("div",{className:"mt-2",children:e.jsx("input",{required:!0,type:"text",value:A.registerUser.lastname,name:"lastname",placeholder:"Last Name",autoComplete:"name",className:"block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm  ring-black placeholder:text-gray-400 ring-[1px] focus:ring-[#9d5c0d] sm:text-sm sm:leading-6 bg-[#FFF7E9]",onChange:A.handleUserChange})})})]}),e.jsx("div",{className:"sm:col-span-4 mb-[22px]",children:e.jsx("div",{className:"mt-2",children:e.jsx("input",{required:!0,name:"email",value:A.registerUser.email,placeholder:"Email",type:"email",autoComplete:"email",className:"block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm  ring-black placeholder:text-gray-400 ring-[1px] focus:ring-[#9d5c0d] sm:text-sm sm:leading-6 bg-[#FFF7E9]",onChange:A.handleUserChange})})}),e.jsx("div",{className:"sm:col-span-4 mb-[22px]",children:e.jsx("div",{className:"mt-2",children:e.jsx("input",{required:!0,name:"password",value:A.registerUser.password,placeholder:"New Password",type:"password",autoComplete:"password",className:"block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm  ring-black placeholder:text-gray-400 ring-[1px] focus:ring-[#9d5c0d] sm:text-sm sm:leading-6 bg-[#FFF7E9]",onChange:A.handleUserChange})})}),e.jsx("div",{className:"sm:col-span-4 mb-[22px]",children:e.jsxs("div",{className:"mt-2",children:[e.jsx("input",{required:!0,name:"confirmPassword",value:A.confirmPassword,placeholder:"Confirm Password",type:"password",autoComplete:"confirm-password",className:"block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm  ring-black placeholder:text-gray-400 ring-[1px] focus:ring-[#9d5c0d] sm:text-sm sm:leading-6 bg-[#FFF7E9]",onChange:A.handleConfirmPassword}),e.jsx("p",{className:" text-red-700 text-[12px] mt-[5px]",children:A.error})]})}),e.jsx("div",{className:"flex justify-end my-[10px]",children:e.jsx("a",{href:"",className:"text-[14px]",children:"Forgot Password"})})]}),e.jsxs("div",{className:"w-full mt-6 flex flex-col items-center justify-center gap-x-6",children:[e.jsx("button",{type:"submit",className:"rounded-md w-full bg-primary-100 px-24 py-2 text-sm font-semibold text-white-100 shadow-sm duration-150 hover:bg-[#9d5c0d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",onClick:A.signUp,children:"Sign Up"}),e.jsxs("div",{className:"flex flex-row mt-[20px]",children:[e.jsx("p",{className:"text-[14px] mr-[5px]",children:"Already have an Account?"}),e.jsx("p",{className:"text-[14px] text-[#ed7534] cursor-pointer",onClick:()=>{A.setIsVisible(!1)},children:"Sign In"})]})]})]})})}function $(){const A=y(),o=I();V();const U={identifier:"",password:""},H={username:"",firstname:"",lastname:"",email:"",password:""},[Q,z]=r.useState(A.state),[t,n]=r.useState(Q==="signin"),[T,N]=r.useState(!1),[i,b]=r.useState(U),[a,x]=r.useState(H),[g,E]=r.useState(""),[R,d]=r.useState(""),[u,J]=r.useState("seller"),p=({target:s})=>{const{name:l,value:m}=s;b(B=>({...B,[l]:m}))},j=async()=>{try{i.identifier&&i.password&&await O(c,i.identifier,i.password).then(s=>{k(f(w,"users",s.user.uid)).then(l=>{if(l.exists())switch(l.data().role){case"seller":o("/market");break;case"user":o("/shop");break}})})}catch(s){q.error(s.message,{hideProgressBar:!0})}},D=({target:s})=>{const{name:l,value:m}=s;x(B=>({...B,[l]:m}))},F=({target:s})=>{const{value:l}=s;E(l),a.password!==l?d("Passwords do not match"):d("")},C=async()=>{try{if(a.password!==g){d("Passwords do not match");return}const s={blocked:!1,confirmed:!0,username:a.firstname+" "+a.lastname,firstname:a.firstname,lastname:a.lastname,email:a.email.toLowerCase(),password:a.password,role:u};a.firstname&&a.lastname&&a.email&&a.password&&await K(c,s.email,s.password).then(l=>S(f(w,"users",l.user.uid),{role:u})).then(()=>o("/shop")),x({username:"",firstname:"",lastname:"",email:"",password:""}),E(""),n(!1)}catch(s){d(s.message)}},v=async()=>{try{await P(c,M),c.currentUser!=null&&(localStorage.setItem("hasFetchedCartData","false"),o("/shop"))}catch(s){d(s),console.error(s)}};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"w-full h-[100vh]",children:[e.jsx("div",{className:`absolute h-full sm:flex hidden bg-cover bg-center bg-no-repeat z-10 w-[50%] bg-primary-100 duration-700 ease-in-out card ${t?"ml-[50%]":"mr-[50%]"}`,style:{backgroundImage:`url(${W})`}}),e.jsxs("div",{className:"w-full h-full flex",children:[e.jsx("div",{className:`sm:flex-[1] sm:w-[50%] sm:p-[50px] ${t?"w-full":"overflow-hidden w-[0%] p-0 flex-[0]"} flex flex-col justify-center`,children:e.jsx(Y,{isVisible:t,registerUser:a,handleUserChange:D,confirmPassword:g,handleConfirmPassword:F,signUp:C,setIsVisible:n,error:[R],authType:Q})}),e.jsx("div",{className:`sm:flex-[1] sm:w-[50%] sm:p-[50px] ${t?"w-[0%] p-0 flex-[0] overflow-hidden":"w-full"} flex flex-col justify-center`,children:e.jsxs("div",{className:`w-full flex flex-col items-center sm:px-[40px] px-[30px] duration-300 ${t?"opacity-0":"opacity-100"}`,children:[e.jsxs("div",{className:"flex flex-col items-center ",children:[e.jsx("img",{src:h,alt:"",className:"w-[50px] mb-[20px]"}),e.jsx("h1",{className:" font-bold text-[22px] ",children:"Welcome Back"}),e.jsx("p",{className:"mb-[15px] text-[14px]",children:"Sign in with"})]}),e.jsx("div",{className:"flex  w-full justify-center mb-[15px]",children:e.jsxs("div",{className:"flex flex-row gap-[20px]",children:[e.jsx("div",{className:"flex items-center justify-center border-[1px] bg-[#FFF7E9] border-solid border-black rounded-[5px] w-[120px] py-[10px] cursor-pointer",onClick:v,children:e.jsxs("div",{className:"flex flex-row items-center",children:[e.jsx("img",{src:L,alt:"",className:"w-[20px] h-[20px] mr-[10px]"}),e.jsx("h2",{className:"text-[14px]",children:"Google"})]})}),e.jsx("div",{className:"flex items-center justify-center border-[1px] bg-[#FFF7E9] border-solid border-black rounded-[5px] w-[120px] py-[10px] cursor-pointer",children:e.jsxs("div",{className:"flex flex-row items-center",children:[e.jsx("img",{src:G,alt:"",className:"w-[24px] mr-[5px]"}),e.jsx("h2",{className:"text-[14px]",children:"Facebook"})]})})]})}),e.jsxs("div",{className:"flex flex-row w-full items-center mb-[15px]",children:[e.jsx("hr",{className:"flex-[1]"}),e.jsx("div",{className:"flex-[1] flex flex-row justify-center items-center",children:e.jsx("p",{className:"text-[14px]",children:"or with email"})}),e.jsx("hr",{className:"flex-[1]"})]}),e.jsxs("div",{className:"w-full",children:[e.jsx("div",{className:"sm:col-span-3 mb-4",children:e.jsx("div",{className:"mt-2",children:e.jsx("input",{required:!0,type:"email",name:"identifier",placeholder:"Email",value:i.identifier,id:"email",autoComplete:"email",className:"block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm  ring-black placeholder:text-gray-400 ring-[1px] focus:border-primary-100 focus:ring-primary-100 sm:text-sm sm:leading-6 bg-[#FFF7E9]",onChange:p})})}),e.jsx("div",{className:"sm:col-span-4",children:e.jsx("div",{className:"mt-2",children:e.jsx("input",{required:!0,id:"password",name:"password",placeholder:"Password",value:i.password,type:"password",autoComplete:"password",className:"block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm  ring-black placeholder:text-gray-400 ring-[1px] focus:border-primary-100 focus:ring-primary-100 sm:text-sm sm:leading-6 bg-[#FFF7E9]",onChange:p})})}),e.jsx("div",{className:"flex justify-end my-[10px]",children:e.jsx("a",{href:"",className:"text-[14px]",children:"Forgot Password"})})]}),e.jsxs("div",{className:"w-full mt-6 flex flex-col items-center justify-center gap-x-6",children:[e.jsx("button",{type:"submit",className:"rounded-md w-full bg-primary-100 px-24 py-2 text-sm font-semibold text-white-100 shadow-sm duration-150 hover:bg-[#9d5c0d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",onClick:j,children:"Login"}),e.jsxs("div",{className:"flex flex-row mt-[20px]",children:[e.jsx("p",{className:"text-[14px] mr-[5px]",children:"Don’t have an Account?"}),e.jsx("p",{className:"text-[14px] cursor-pointer text-[#ed7534]",onClick:()=>{n(!0),N(!0)},children:"Sign Up"})]})]})]})})]})]})})}export{$ as default};