function move(yAxis, xAxis, map){
    let ans = []
    let y = Number(yAxis)
    let x = Number(xAxis)

    if (!(x+2 > 7) && !(y-1 < 0)) ans.push(map[y-1][x+2])

    if (!(x+2 > 7) && !(y+1 > 7)) ans.push(map[y+1][x+2])
    if (!(y+2 > 7) && !(x+1 > 7)) ans.push(map[y+2][x+1])
    if (!(y+2 > 7) && !(x-1 < 0)) ans.push(map[y+2][x-1])
    if (!(x-2 < 0) && !(y+1 > 7)) ans.push(map[y+1][x-2])
    if (!(x-2 < 0) && !(y-1 < 0)) ans.push(map[y-1][x-2])
    if (!(y-2 < 0) && !(x-1 < 0)) ans.push(map[y-2][x-1])
    if (!(y-2 < 0) && !(x+1 > 7)) ans.push(map[y-2][x+1])
    return ans
}

export default move