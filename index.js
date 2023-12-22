// Write your solution here!
        const cats = ["Milo", "Otis", "Garfield"];
        
        
        function destructivelyAppendCat(name){
            cats.push("Ralph");
            console.log(cats);

         }

         function destructivelyPrependCat(name){
            cats.unshift("Bob");
            console.log(cats);
         }
        
        function destructivelyRemoveLastCat(name){
            cats.pop("Ralph");
            console.log(cats);
         }

        function destructivelyRemoveFirstCat(name){
            cats.shift("Bob");
            console.log(cats);
         }
         function appendCat(name){

           var catt = [...cats, "Broom"];
           return catt;
        
        }

        function prependCat(name){
           
            var cat = ["Arnold", ...cats];
            return cat;
            

        }

        function removeLastCat(name){
            
            var caat = cats.slice(0, cats.length-1);
            return caat;
    

        }
       
       
        function removeFirstCat(name){
         const cati = cats.slice(1);
         return cati;
            

         }
        
