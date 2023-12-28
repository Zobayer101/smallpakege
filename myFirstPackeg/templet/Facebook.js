

const TypeWriter=()=>{

  //-------------------varible declare.......------------------;

 let arr=['Designers','Developers','Students','Professionals'];
 let WordCount=0;
 let letterCount=0;

 let CurrentText='';
 let currentWord='';

 var timeout=400;

 let isDeleting=false;

const Type=()=>{

  //----------------------____INTIAL_____VALUE_END__ZERO_______----------------------------------;

  if(WordCount===arr.length){
    WordCount=0;
  }

  //----------------------____SET___ONE___DATA___IN__NEW___ARRAY__-----------------------;

  currentWord=arr[WordCount];

  //--------------------______CONDITION___CHACK___IT__WAS_DELLETING_OR_WRITING__------;

  if(isDeleting){

    //--------------------__REVERS__ARRAY_DATA__ONE_BY_ONE__--------------------------;

    CurrentText=currentWord.slice(0,--letterCount);

  }else{

    //-----------------___IT__WILL_WRITING____DATA__ONE_BY_ONE______--------------------;

    CurrentText=currentWord.slice(0,++letterCount);
  }
  //------------------___NOW________PRINNTING_MIN_DATA_HERE______-------------------------;

  console.log(CurrentText);

  //-------------------------------------_____NOW_____HERE______TIMEING____FUNCTION__________---------------;

      // ---------__WRITING_SLOW_DELETING__FIRST__------------;

  timeout=isDeleting?200:400;
  
  if(!isDeleting && CurrentText.length === currentWord.length){
    timeout=2000;
    isDeleting=true;
  }else if(isDeleting && CurrentText.length === 0){
    timeout = 1000;
    isDeleting=false;
    WordCount++;
     
  }

  setTimeout(Type,timeout)
}

Type();
}
TypeWriter();



