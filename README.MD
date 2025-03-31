# Interview prep Codility and LeetCode Questions

## Test

`npm run test`

## Todo:

- [ ] Improve longest common prefix - device and conquer
- [ ] longest common subsequence
- [ ] Fix binary conversion on humming distance
- [x] Add last elem to prototype for example `arr.last()` instead of `arr[arr.length -1]` ==> modify replace greatest
- [x] Also add Array.prototype.first , OneBeforeLast, OneAfterFirst
- [ ] Investigate Generator.prototype.next and how works with arrays
- [ ] Add example of using Generator.prototype.next with arrays
- [ ] how yeild works with arrays
- [ ] how to use generator to create an iterator
- [ ] how to use generator to create an async iterator
- [ ] how to use generator to create an async iterator with arrays
- [ ] implement promise.all with generator
- [ ] implement promise.race with generator
- [ ] implement promise.any with generator
- [ ] implement promise.allSettled with generator


## Utility function definition on Array.prototype

```
// functional sort
Object.defineProperty(Array.prototype, 'sortf', {
  value: function(compare) { return [].concat(this).sort(compare); }
});
```

....
