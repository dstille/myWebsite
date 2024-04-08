function getCombosOf2(elements) {
    out = [];
    for (i=0; i<elements.length; i++)
        for (j=i+1; j<elements.length; j++)
            out.push([elements[i], elements[j]]);
    return out;
}

function getCombosOf3(elements) {
    out = [];
    for (i=0; i<elements.length; i++)
        for (j=i+1; j<elements.length; j++)
            for (k=j+1; k<elements.length; k++)
                out.push([elements[i], elements[j], elements[k]]);
    return out;
}

function getCombosOf4(elements) {
    out = [];
    for (i=0; i<elements.length; i++)
        for (j=i+1; j<elements.length; j++)
            for (k=j+1; k<elements.length; k++)
                for (l=k+1; l<elements.length; l++)   
                    out.push([elements[i], elements[j], elements[k], elements[l]]);
    return out;
}

function getCombosOf5(elements) {
    out = [];
    for (i=0; i<elements.length; i++)
        for (j=i+1; j<elements.length; j++)
            for (k=j+1; k<elements.length; k++)
                for (l=k+1; l<elements.length; l++)   
                    for (m=l+1; m<elements.length; m++)  
                        out.push([elements[i], elements[j], elements[k], elements[l], elements[m]]);
    return out;
}

function getCombosOf6(elements) {
    out = [];
    for (i=0; i<elements.length; i++)
        for (j=i+1; j<elements.length; j++)
            for (k=j+1; k<elements.length; k++)
                for (l=k+1; l<elements.length; l++)   
                    for (m=l+1; m<elements.length; m++)  
                        for (n=m+1; n<elements.length; n++)      
                            out.push([elements[i], elements[j], elements[k], elements[l], elements[m], elements[n]]);
    return out;
}

function getCombosOf7(elements) {
    out = [];
    for (i=0; i<elements.length; i++)
        for (j=i+1; j<elements.length; j++)
            for (k=j+1; k<elements.length; k++)
                for (l=k+1; l<elements.length; l++)   
                    for (m=l+1; m<elements.length; m++)  
                        for (n=m+1; n<elements.length; n++)      
                            for (o=n+1; o<elements.length; o++)      
                                out.push([elements[i], elements[j], elements[k], elements[l], elements[m], elements[n], elements[o]]);
    return out;
}

function getCombosOf8(elements) {
    out = [];
    for (i=0; i<elements.length; i++)
        for (j=i+1; j<elements.length; j++)
            for (k=j+1; k<elements.length; k++)
                for (l=k+1; l<elements.length; l++)   
                    for (m=l+1; m<elements.length; m++)  
                        for (n=m+1; n<elements.length; n++)      
                            for (o=n+1; o<elements.length; o++)      
                                for (p=o+1; p<elements.length; p++)    
                                    out.push([elements[i], elements[j], elements[k], elements[l], elements[m], elements[n], elements[o], elements[p]]);
    return out;
}


function myFunction(value, index, array) {
    console.log(value)
    console.log(index)
    console.log(array)
    out = []
    for (i=index+1; i<array.length; i++) {
        out.push([value, array[i]])
    }
    return out;
  }

  function choose(elements, k) {
    switch(k) {
        case 2: return getCombosOf2(elements);
        case 3: return getCombosOf3(elements);
        case 4: return getCombosOf4(elements);
        case 5: return getCombosOf5(elements);
        case 6: return getCombosOf6(elements);
        case 7: return getCombosOf7(elements);
        case 8: return getCombosOf8(elements);
    }
  }

console.log("hello from the console")
elements = [1,2,3,4,5,6,7,8,9,10]
combos = choose(elements, 7)
console.log(combos)
console.log(combos.length)









//document.getElementById("mathBox").innerHTML = "combination results go here!"