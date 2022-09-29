const increase=document.getElementById("btnIncrease");
const reset=document.getElementById("btnReset");
const decrease=document.getElementById("btnDecrease");
const idcount=document.getElementById("idcount");

let count=0;
increase.addEventListener("click",()=>{	
	idcount.innerHTML=(++count);	
});	

decrease.addEventListener("click",()=>{	
	if(count>0){
		count--;
		idcount.innerHTML=count;
	}
	
});	

reset.addEventListener("click",()=>{	
	count=0;
	idcount.innerHTML=count;
});		
