// Code your solution in this file!

function distanceFromHqInBlocks(pickuplocation)
{ const scuberHq= 42;
    
    if (scuberHq<pickuplocation)
    {
        return pickuplocation-scuberHq

    }
    else
    {
        return scuberHq-pickuplocation 
    }
    
    
    

}


function distanceFromHqInFeet(pickuplocation)
{   
const feetPerBlock=264;
const blocks= distanceFromHqInBlocks(pickuplocation);
{
    return blocks*feetPerBlock
}

}
console.log(distanceFromHqInFeet("50"));
console.log(distanceFromHqInBlocks("43"));

function  distanceTravelledInFeet(start,destination)
{
const feetPerBlock=264;

 function distance()
 {
    if (start > destination)
    {
        return start-destination
    }
    else 
    {
        return destination-start
    }
 }

{
    return distance()*feetPerBlock
}
}
console.log(distanceTravelledInFeet("34","42"));
function calculatesFarePrice(start, destination)
{
    const distanceTravelled=distanceTravelledInFeet(start,destination)
    if(distanceTravelled<=400)
    {
        return 0;
    }
    if ( distanceTravelled > 400 && distanceTravelled< 2000 )
    {
        return .02*(distanceTravelled-400)
    }
    if (distanceTravelled > 2000 && distanceTravelled < 2500)
    {
        return 25
    }
    if( distanceTravelled > 2500)
     
    {
        return 'cannot travel that far'
    }

}
console.log(calculatesFarePrice("34","35"));
console.log(calculatesFarePrice("34","40"));
console.log(calculatesFarePrice("33","41"));
console.log(calculatesFarePrice("30","50"));