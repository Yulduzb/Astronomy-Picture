
const btn=document.querySelector(".btnSearch");
const inputDate=document.querySelector("input");
const images=document.querySelector(".images");




let selectedImageData=null;

const dataArray=[];




btn.addEventListener("click",() => {

const filteredData=dataArray.filter((dateItem) => dateItem.date === inputDate.value)
console.log(filteredData);
console.log(typeof filteredData);
  displayFilteredData(filteredData);
  

 
})



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
 
  
 })
  
}




  const getPicture = async () => {      
    const url = `https://api.nasa.gov/planetary/apod?api_key=187vZS1Rm7Y6cEluSk2VucgxgJrs4tCeV4iI4mpI&start_date=2023-08-01&end_date=2023-08-30`;
    
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
 


