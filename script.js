const btn=document.querySelector(".btnSearch");
const inputDate=document.querySelector("input");
const images=document.querySelector(".images");
const detailsContainer=document.querySelector(".details-container ");


let selectedImageData=null;

const dataArray=[];

document.addEventListener("DOMContentLoaded", function () {
btn.addEventListener("click",() => {

const filteredData=dataArray.filter((dateItem) => dateItem.date === inputDate.value)
console.log(filteredData)
displayFilteredData(filteredData);

 
})

});

const displayFilteredData =(filteredData)=>{
  images.innerHTML="";

filteredData.forEach((dateItem)=>{
  const imagesDiv=document.createElement("div");
  imagesDiv.classList.add("image-container");

  const imagesDivInnerHtml=`
  
  <div class="image">

  <img src="${dateItem.hdurl}" alt="${dateItem.title}" >
  
  </div>
  <div class="img-details">
      <h2 class="title">${dateItem.title}</h2>
    <span class="date">Date:  ${dateItem.date}</span>   
  </div>
  
  `

 imagesDiv.innerHTML=imagesDivInnerHtml;
 images.appendChild(imagesDiv);
 

imagesDiv.addEventListener("click",() => {
selectedImageData = dateItem;
showDetails(selectedImageData);

 })
  
 })
  
}

const showDetails=(detail)=>{
 const containerData=document.createElement("div");
 containerData.classList.add("container-data");

 const dataInnerHtml=`

 <button class="closeBtn"><i class="fa-solid fa-xmark"></i></button>
  
 <div class="image-data">
 
     <img src="${detail.hdurl}" alt="" loading="lazy"">
 </div>
 <div class="img-details">
     <h2 class="data-title">${detail.title}</h2>
     <span class="data-date">${detail.date}</span>
     <span class="data-copyright">${detail.copyright}</span>
     <p class="data-explanation" >${detail.explanation} </p>
 </div>

 
 `

 containerData.innerHTML=dataInnerHtml;
 detailsContainer.appendChild(containerData);


 const closeBtn=detailsContainer.querySelector(".closeBtn");
 closeBtn.addEventListener("click", function(){
  detailsContainer.removeChild(containerData);
 })
  
  



}


  const getPicture = async () => {      
    const url = `https://api.nasa.gov/planetary/apod?api_key=Yourkey&start_date=2023-08-01&end_date=2023-08-30`;
    
    try {
         const response = await fetch(url);
          const data = await response.json();
          dataArray.push(...data);
       
           displayFilteredData(dataArray)
           

        
         
      } catch (err) {
          console.log(`Hata oluştu: ${err}`);
      }
  }
 
 

  window.addEventListener("load",getPicture);
 


