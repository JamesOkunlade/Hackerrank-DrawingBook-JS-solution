# Hackerrank-DrawingBook-JS-solution



### Function description

Complete the pageCount function in the editor below. It should return the minimum number of pages Brie must turn. 

> pageCount has the following parameter(s): 

* n: the number of pages in the book 
* p: the page number to turn to 

### Solution (JavaScript)
```
function pageCount(n, p) {
  var frontFlip = Math.floor(p/2);
  var backFlip = Math.floor((n/2)-frontFlip);
  
  var result = Math.min(frontFlip, backFlip);
  return result;


}
```

### Explanation
There are two possible ways for Brie to flip her book open: either from the front or the back. The point of the function is to determine in which way she would have to flip less to get to the target page.

For the first case i.e. **Front flip**

The number of flip she has to make is just the lower bound of the target page divided by 2 i.e. 

`Math.floor(p / 2).`

For the seconde case i.e. **Back flip**

In this case, we firstly need to get the total number of flips to see through the entire pages of the book then minus the front flip from it. i.e. 

`Math.floor((n/2)-frontFlip).`

Once the number of flip for the two ways have been dertermined, just take the min one. i.e. 

`Math.min(frontFlip, backFlip)`


> #### If you have an alternative solution, kindly checkout on a new branch and request for a pull request to merge your copy.
