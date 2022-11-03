function prime(num){
	let count=0;
	 for(let x=1 ; x<=num ; x++ ){
		if(num%x==0){
			count++
		}
	 }
	
	if(count==2){
		return  ture;
	}else{
		return false;
	}
	
	 }console.log(prime(18));