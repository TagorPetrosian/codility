# Interview prep Codility and LeetCode Questions

## Test

`npm run test`

## Todo:

- [ ] Improve longest common prefix - device and conquer
- [ ] Fix binary conversion on humming distance
- [x] Add last elem to prototype for example `arr.last()` instead of `arr[arr.length -1]` ==> modify replace greatest
- [x] Also add Array.prototype.first , OneBeforeLast, OneAfterFirst
- [ ] Investigate Generator.prototype.next and how works with arrays

## Utility function definition on Array.prototype

```
// functional sort
Object.defineProperty(Array.prototype, 'sortf', {
  value: function(compare) { return [].concat(this).sort(compare); }
});
```

....
