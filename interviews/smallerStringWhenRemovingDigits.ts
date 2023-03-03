//we have string s and string t
//basically how many different ways can we remove digits, so that s is less than t, 
//ways we remove in t also matter
//2 for loops basically



//ribbons
const findRibbons = (a:number[], k:number) => {
    //left boundary
    let left = 1;
    //maximum
    let right = a.sort()[a.length-1];

    const canCut = (ribbons, k, mid):boolean =>{
        let pieces= 0;
        for(let i =0; i< ribbons.length; i ++){
            pieces += Math.floor(a[i]/mid);
        }
        return pieces>=k;
    }

    //binary search find the length that will maximize our length
    while(left<=right){
        let mid = Math.floor(left + (right-left)/2);
        
        if(canCut(a,k,mid)){
            left =  mid+1;
            
        }else{
            right = mid-1;
        }
        
    }

    return right;
}
