import{b as i,s as n,c as f,j as e,i as d,e as m,f as h,k as j}from"./index-5f3f7aa1.js";import{F as b}from"./index.esm-a1487e7a.js";import{C as w}from"./CheckoutSummary-520f1435.js";import{I as y,a as g}from"./globalPrice-f134fd83.js";import{u as o}from"./useDispatch-83269ac2.js";import"./iconBase-57c87a10.js";import"./index.esm-86ffb413.js";function N(a){const r=o(),t=i(n);return i(f),e.jsx("div",{className:"flex flex-row gap-[20px] flex-wrap",children:e.jsxs("div",{className:"flex flex-row items-center w-[20%] mr-[30px]",children:[e.jsx("p",{className:"text-[12px] text-[#ED7534] mr-[3px]",children:"QTY: "}),e.jsxs("div",{className:"flex flex-row items-center justify-right w-full",children:[e.jsx("div",{className:"flex-[1] h-[25px] w-[25px] rounded-full flex justify-center items-center bg-[#FFF7E9]",onClick:()=>{a.item.data.attributes.quantity>1&&r(d({newQuantity:{quantity:a.item.data.attributes.quantity-1},jwt:t.jwt,itemId:a.item.data.id}))},children:e.jsx(y,{className:"w-[20px] h-[20px] text-[#ED7534] cursor-pointer"})}),e.jsx("div",{className:"",children:e.jsx("div",{className:"flex-[1] px-[12px] py-[7px] text-[12px] rounded-full flex justify-center items-center bg-white-100",children:a.item.data.attributes.quantity})}),e.jsx("div",{className:"flex-[1] h-[25px] w-[25px] rounded-full flex justify-center items-center bg-[#FFF7E9]",onClick:()=>{r(d({newQuantity:{quantity:a.item.data.attributes.quantity+1},jwt:t.jwt,itemId:a.item.data.id}))},children:e.jsx(g,{className:"w-[20px] h-[20px] text-[#ED7534] cursor-pointer"})})]})]})})}function E(a){var c;const r=o(),t=i(m),p=(c=i(n))==null?void 0:c.jwt;console.log("cart",t);const u=()=>{let s=0;return t.map(x=>x.data.attributes.products.data.forEach(l=>s+=l.attributes.price*x.data.attributes.quantity)),s.toFixed(2)};return console.log("cart",t),e.jsxs("div",{className:"flex flex-row",children:[e.jsx("div",{className:"w-full flex-[8] duration-300 bg-white-100 px-[15px] sm:px-[60px] pb-[40px] pt-[80px]",children:e.jsx("div",{className:"w-full h-full flex flex-col pb-[20px]",children:t.length==0?e.jsx("div",{className:"h-full w-full flex justify-center items-center",children:e.jsxs("div",{className:"flex flex-col justify-center px-[35px]",children:[e.jsx("h1",{className:"text-[#9d5c0d] text-[18px] font-bold text-center ",children:"Oops! It looks like your cart is currently empty."}),e.jsx("p",{className:"mt-[10px] text-[12px] text-center ",children:"But fear not, your fashion journey is just a click away"})]})}):e.jsx("div",{className:"flex flex-col gap-[12px]",children:e.jsxs("div",{className:"w-full pt-[0px] sm:pt-[20px] flex flex-col h-full",children:[e.jsx("h1",{className:"text-[20px] font-bold mb-[30px]",children:"Shopping Cart"}),e.jsx("div",{className:"flex flex-col gap-[20px] justify-between",children:t.map((s,x)=>e.jsxs("div",{className:"w-full h-[250px] flex flex-row gap-[20px] p-[30px] items-center justify-between relative border-[1px] border-solid border-gray-200 rounded-[10px] duration-150 overflow-hidden]",children:[e.jsx("div",{className:"flex-[2] h-full rounded-[10px] w-[70px] bg-cover bg-center bg-no-repeat bg-black",style:{backgroundImage:`url(${h.url}${s.data.attributes.image_url})`}}),s.data.attributes.products.data.map(l=>e.jsxs("div",{className:"flex-[6.5] h-full py-[20px] flex flex-col justify-between gap-[5px]",children:[e.jsx("h1",{className:"text-[13px] font-semibold",children:l.attributes.name}),e.jsx("p",{className:"text-[10px]",children:l.attributes.desc}),e.jsxs("span",{className:"",children:[s.data.attributes.quantity," x ",l.attributes.price]}),e.jsx(N,{item:s})]},l.id)),e.jsx("button",{type:"button",className:"flex-[i] cursor-pointer",onClick:()=>{console.log("Delete button clicked"),r(j({id:s.data.id,jwt:p}))},children:e.jsx(b,{className:"text-[15px] text-red-600 duration-200 "})})]},s.data.id))})]})})})}),e.jsx("div",{className:"flex-[3.7] bg-gray-100 pb-[40px] pt-[80px]",children:e.jsx(w,{totalPrice:u(),cart:t})})]})}export{E as default};