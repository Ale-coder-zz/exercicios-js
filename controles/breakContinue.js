const nums = [6.7, 7.4, 9.8, 8.1, 7.7]
for(x in nums) {
    if (x == 5) break
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5 ) {
        continue
    }
    console.log((`${y} = ${nums[y]}`))
} 

