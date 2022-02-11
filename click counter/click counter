<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
    p{
    color:blue;
    font-size:30px;
    }
    </style>
    
  </head>
  <body>
  
  <p id ="demo">----</p>
  
  <button onclick="myStopFunction()">Stop time</button>
  
  <script>
  const myInterval = setInterval(pippo, 1000);
  let contatore=0;
  
  function pippo()  {
    contatore++;
    document.getElementById("demo").innerHTML = contatore +" ";
    }
    
    function myStopFunction() {
        clearInterval(myInterval);
    }
    </script>
  

    <p id="out">0.0</p>
    <p id="nclick">0</p>
    <button type="button" onclick="count()">Invia</button>
    <script>
      let i = 0;
      let start = Date.now();
      let counter = 0;
      function count() {
        document.getElementById("out").innerHTML +=
          " " + (Date.now() - start) + " ms";
        counter++;
        document.getElementById("nclick").innerHTML = counter.toString();
      }
    </script>
  </body>
</html>
