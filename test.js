//rearrange string based on array
function ConvertStrings(s, index, n)
{
    let a = new Array(s.length);
    a.fill('0');
    let b = new Array(s.length);
    b.fill('0');

    // Convert String to array
    for(let ii = 0; ii < s.length; ii++)
    {
        a[ii] = s[ii];
        b[ii] = s[ii];
    }

    let i = 0, j = 0;

    // Move characters to specified indices
    while(j < s.length && i < n)
    {
        let k = index[i];
        let temp = a[j].charCodeAt();
        b[k] = String.fromCharCode(temp);

        j += 1;
        i += 1;
    }

    let tmp = "";
    // Convert the list to String
    for(i = 0; i < s.length; i++)
    {
        tmp = tmp + b[i];
    }

    // Print the answer
    console.log(tmp);
}
 
let s = "geeksforgeeks";
let index = [ 5, 6, 7, 0, 1, 2, 8, 9, 10, 3, 4, 11, 12];
  
let n = index.length;
  
ConvertStrings(s.split(''), index, n);
