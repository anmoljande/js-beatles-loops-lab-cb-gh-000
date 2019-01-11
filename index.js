// add solution here
function theBeatlesPlay(musicans,instruments)
{
  var arr=[];
  for(var i=0;i<musicans.length;i++)
  {
    var str=musicans[i]+" plays " + instruments[i];
    arr.push(str);
    
  }
  return arr;
}

function johnLennonFacts(facts)
{
  var i=0,n;
 n=facts.length;
 while(n--)
 {
   facts[i].push("!!!")
    i++;
   
 }
 return facts;
  
}