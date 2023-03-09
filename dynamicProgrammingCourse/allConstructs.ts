const allConstructWithTabulation = (wordBank: string[], target: string): string[][]=>{
    if(target === '') return [[]];
    const table: any = new Array(target.length+1).fill(0).map(v=>[]);
    table[0] = [[]];

    for(let i= 0; i<= target.length; i++){
        for(let word of wordBank){
            if(target.slice(i,i+ word.length ) === word){
                const newCombinations = table[i].map((subArray:any)=>[...subArray, word]);
                table[i+word.length].push(...newCombinations);
            }
        }
    }
    return table[target.length];

    
}

//still inneficient
const allConstructWithMemo = (wordBank: string[], target: string, memo: any ={}): string[][]=>{
    if(target === '') return [[]];
    if(target in memo) return memo[target];

    const result: string[][] = [];

    for(let word of wordBank){
        //where does word is contained in target
        if(target.indexOf(word) === 0){
            const suffix =  target.slice(word.length); //what remains after our word;
            const suffixWays = allConstructWithMemo(wordBank, suffix, memo);
            const targetWays = suffixWays.map(way=>[word, ...way]);
            result.push(...targetWays);
        }
    }
    // console.log(result);
    memo[target]= result;

    return memo[target];

}

const allConstruct = (wordBank: string[], target: string): string[][]=>{
    if(target === '') return [[]];

    const result: string[][] = [];

    for(let word of wordBank){
        //where does word is contained in target
        if(target.indexOf(word) === 0){
            const suffix =  target.slice(word.length); //what remains after our word;
            const suffixWays = allConstruct(wordBank, suffix);
            const targetWays = suffixWays.map(way=>[word, ...way]);
            result.push(...targetWays);
        }
    }
    // console.log(result);

    return result;

}
console.log(allConstructWithTabulation(['bo', 'rd','ate', 't', 'ska', 'sk', 'boa'], 'skateboard'));
console.log(allConstructWithTabulation(['purp', 'p', 'ur', 'le', 'purpl'], 'purple'));