window.addEventListener("message", function(event){
  if(event.data.action == 'SHOW_NUMBER'){
    window.document.querySelectorAll("#santamonicaFormFillerIndex").forEach(e=>{
      e.style.display = 'block'
    })
  }else if(event.data.action == 'HIDE_NUMBER'){
    window.document.querySelectorAll("#santamonicaFormFillerIndex").forEach(e=>{
      e.style.display = 'none'
    })
  }
const iframes = [...window.document.querySelectorAll('iframe')];
  iframes.forEach(iframe => {
    console.log('transferred msg to ',iframe);
    
    iframe.contentWindow.postMessage({action:event.data.action}, '*')
  })
})
