import{a as N,r as s,j as c}from"./index-5f3f7aa1.js";import{F as R,S as b}from"./SearchList-6b671eb6.js";import{u as w}from"./useFetch-9a7e2af1.js";import"./extends-4c19d496.js";import"./iconBase-57c87a10.js";import"./globalPrice-f134fd83.js";import"./index.esm-025f5bc5.js";import"./index.esm-d62ef926.js";import"./index.esm-86ffb413.js";import"./index.esm-a1487e7a.js";import"./useDispatch-83269ac2.js";function T(){const l=N(),[i,h]=s.useState(l.state);s.useState([]);const[t,o]=s.useState([]),[p,u]=s.useState(0),[d,F]=s.useState([0,1e5]),[P,x]=s.useState(d[0]),[C,S]=s.useState(d[1]),[r,n]=s.useState([]);s.useState(!1);const[f,B]=s.useState("desc");s.useEffect(()=>{h(l.state||""),(l==null?void 0:l.state)!==i&&h(l.state||"")},[l.state,i]);const{data:g,loading:A,error:L}=w(`/api/apparels?populate=*&filters[apparel_name][$contains]=${i}${t.map(e=>`&[filters][brands][id][$eq]=${e}`)}&[filters][apparel_price][$lte]=${C}&[filters][apparel_price][$gte]=${P}&sort=apparel_price:${f}`);console.log("sort",f),console.log("apparelSearch",i),console.log("searcResults",g);const _=e=>{r.includes(e)?n(r.filter(a=>a!==e)):n([...r,e]),console.log(r)},z=e=>{u(e)},D=(e,a)=>{F(a),x(a[0]),S(a[1])},E=e=>{t.includes(e)?o(t.filter(a=>a!==e)):o([...t,e]),console.log("selectedBrands",t)},$=(e,a)=>{e==="category"?o(""):e==="sizes"?n([]):e==="discount"?u(0):e==="minPrice"?x(0):e==="maxPrice"&&S(0)},v=()=>{o([]),n([]),u(0)},m=()=>t.length>0||r.length>0||p>0;console.log("isFilterApplied",m());const j=[{type:"brand",value:t},{type:"sizes",value:r},{type:"discount",value:p}];return c.jsx("div",{className:"w-full h-full bg-white-100",children:c.jsx("div",{className:"w-full flex gap-[20px] px-[15px] sm:px-[60px] pb-[40px] pt-[80px]",children:c.jsxs("div",{className:"w-full flex gap-0 sm:gap-[20px] mt-[20px]",children:[c.jsx(R,{apparelSearch:i,handleSizeChange:_,handleDiscountChange:z,handlePriceChange:D,handleBrandChange:E,handleFilterChange:$,handleClearAllFilters:v,isFilterApplied:m,filters:j,value:d,selectedBrands:t,selectedDiscount:p,selectedSizes:r}),c.jsx(b,{loading:A,filters:j,apparelSearch:i,searchResults:g,handleFilterChange:$,isFilterApplied:m,handleClearAllFilters:v,setSort:B,sort:f})]})})})}export{T as default};