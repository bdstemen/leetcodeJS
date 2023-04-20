var intToRoman = function(num) {
  const arr = [1000, 500, 100,50,10,5,1];
  const symbols = ['M', 'D','C','L','X','V','I'];
  let res = '';
  for(let i=0; i<arr.length; i++){
      res+=symbols[i].repeat(Math.floor(num/arr[i]));
      num = num%arr[i];
      if(i==0 && num>=900){
          res+='CM';
          num -=900;
      }else if(i==1 && num>=400){
          res+='CD';
          num-=400;
      }else if(i==2 && num>=90){
          res+='XC';
          num-=90;
      }else if(i==3 && num>=40){
          res+='XL';
          num-=40
      }else if(i==4 && num>=9){
          res+='IX';
          num-=9
      }else if(i==5 && num>=4){
          res+='IV';
          num-=4
      }
  }
  return res;
};