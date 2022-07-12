function darkMenu(){
    document.body.classList.add('dark-theme')
    document.body.classList.remove('dark-theme')
  }

  const theme = document.getElementById("theme"); // muda para o dark modo

  theme.addEventListener("change", (e) => {
   document.body.classList.toggle("dark", e.target.checked);

})