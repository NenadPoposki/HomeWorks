
niz=[1,2,3,4,50,"sssa",9];

function zbir(arr){
	let suma = 0;
	for(i=0; i<arr.length; i++){
        if(arr[suma] != isNaN){
         console.log("is not number");
		}// }    iskreno mislam deka tuka imam nekoja greska i zatoa e so komentar
		
        
		suma = suma + arr[i];
	}
	return suma;
}


console.log(zbir(niz))