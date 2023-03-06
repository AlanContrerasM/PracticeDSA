function maxProfit(prices: number[]): number {
    if(prices.length <1) return 0;
    let maxProfit =0;
    let min = prices[0];

    for(let i=1; i <prices.length; i++){
        let price = prices[i];
        if(price< min){
            min = price
        }else{
            if(price - min > maxProfit){
                maxProfit = price - min;
            }
        }
    }

    return maxProfit;

};

//You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.