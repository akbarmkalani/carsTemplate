const slider = document.querySelector(".slider");
const sliderValue = document.querySelector(".slider-value");
 let _move = document.querySelectorAll("._newModel")

  let _heart = document.querySelectorAll('.heart')
  let _data = document.querySelectorAll('.data')
  let _txt = document.querySelectorAll(".txt")

   let _gridGallery = document.querySelectorAll('.gridGallery')
   let _bgDash = document.querySelectorAll('.bg-da')
   console.log(_bgDash);
  let  _topDesign = document.querySelectorAll('.topDesign')

/* _gridGallery ==== */

for(let i = 0; i<_gridGallery.length; i++){
  _gridGallery[i].addEventListener('mouseover', () =>{
    _bgDash [i].style.transform = "translate(-50%, -50%) translateX(0%)"
  })
  _gridGallery[i].addEventListener('mouseleave', () =>{
    _bgDash [i].style.transform = "translate(-50%, -50%) translateX(100%)"
  })
}

  //topDesign
   for(let i = 0; i<_topDesign.length; i++){
    _topDesign[i].addEventListener('mouseover', () =>{
      _txt[i].style.transform = "translateY(0%)"
    })
    _topDesign[i].addEventListener('mouseleave', () =>{
      _txt[i].style.transform = "translateY(100%)"
    })
   }



   //new model
 for(let i = 0; i<_move.length; i++){
  
          _move[i].addEventListener("mouseover", ()=>{
            _heart[i].style.transform =  "translateX(0)" 
            _data[i].style.transform =  "translateX(0)" 
       
          })
          _move[i].addEventListener('mouseleave', () => {
            _heart[i].style.transform =  "translateX(300%)" 
            _data[i].style.transform =  "translateX(-300%)"
          })


 }








slider.addEventListener("input", () => {
  sliderValue.textContent = slider.value;
}); 