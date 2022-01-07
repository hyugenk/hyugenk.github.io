  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  function openHome() {
    location.replace('index.html')
  }

  function thxForm() {
    document.getElementById("thx").style.display = "block";
    document.getElementById("myForm").style.display = "none";
  }

  function qtyCount() {
  var x = document.getElementById("qty").value;
  document.getElementById("demo").innerHTML = x;
  }


  function openFlyer1() {
    document.getElementById("flyer1").style.display = "block";
  }