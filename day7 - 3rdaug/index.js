//nitish code
n=5

for(let row=1; row<=n; row++){
    let result = ''
    //to add 1st part of pattern i.e; spaces
    for(let spaces=1; spaces<=2*(n-row);spaces++ ){
        result=result+' '
    }
    //to add 2nd part of pattern
    for(let j=1; j<=row;j++ ){
        result=result+j+' '
    }
    //to add 3rd part of pattern
    for(let k=row-1; k>=1; k-- ){
        result=result+k+' '
    }

    console.log(result);
}


//Sudhakar's code 
let n=5;
let pattern="";
for(let row=1;row<=n;row++)
{
    for(let space=1;space<=n-row;space++)
    {
        pattern=pattern+" "+' '
    }
    for(let number=1;number<=row;number++)
    {
        pattern=pattern+number+' ';
    }
    for(number=row;number>1;number--)
    {
        pattern=pattern+(number-1)+' ';
    }
    pattern=pattern+"\n";
    
}
console.log(pattern);

//animesh code

let n=5;
let string ='';
let l=1;
for(i=n;i>0;i--)
{
   for(j=0;j<i;j++)
   {
    string +='  ';
   }
   for(k=1;k<=l;k++)
   {
    string +=k + ' ';
   }
   for(m=l;m>1;m--)
   {
    string +=m-1 + ' ';
   }
   l++;
   string +='\n';
}
m=n;
for(i=1;i<n;i++)
{
    for(j=i+1;j>0;j--)
    {
        string +='  ';
    }
    for(k=1;k<m;k++)
    {
        string +=k + ' ';
    }
    m--;
    for(p=m-1;p>0;p--)
    {
        string+=p + ' ';
    }
    string +='\n';
}
console.log(string);