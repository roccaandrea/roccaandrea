<button onclick="Numeri50Casuali(50)"> 50 Numeri casuali</button>
    <p id="output3"></p> 
    <button onclick="ContaMedia()"> media</button>
    <p id="output4"></p> 
    
    <script>
        function Numeri50Casuali(n) {
            let dado=0;
            let casuale=0;
            let str="";
            for(let i=0;i<n;i++)
            {
            casuale=Math.random();
            dado=Math.round(casuale*49)+1;
            str=str+" "+ dado;  
            }
            document.getElementById("output3").innerHTML=str;
            
        }
        function ContaMedia() {
    num = Math.round(Math.random() * 1000);
    document.getElementById("output4").innerHTML ="Media " + num;
}

    </script>

</body>
</html>
</body>
</html>
