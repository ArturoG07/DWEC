function primos(n) {
    let primos = [];
    for (let i = 2; i < n; i++) {

        let primo = true;
        for (let j = 2; j < i; j++) {

            if (i % j == 0) {
                primo = false;
            }
        }
        if (primo) {
            
            primos.push(i);
        }
        
        
    }
    console.log(primos);
    }
    
primos(100);