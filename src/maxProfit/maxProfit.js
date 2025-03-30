/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//     // brute force - complexity n^2
//     let maxProfit = 0;

//     for (let i = 0; i < prices.length; i++) {
//         for( let j = i+1; j < prices.length; j++) {
//            const profit  = prices[j] - prices[i];
//            maxProfit = profit > maxProfit ? profit : maxProfit
//         }
//     }
//     return maxProfit;
// };

var maxProfit = function(prices) {
    // best solution- complexity n
    let maxProfit = 0;
    let minValue = prices[0];

    for(let i = 0; i < prices.length; i++) {
        minValue = Math.min(minValue, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - minValue);
    }

    return maxProfit;
};

// Export the function
module.exports = maxProfit;

// Keep the console.log for manual testing if needed
// console.log(maxProfit([7,6,4,3,1]));