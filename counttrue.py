def counttruth(input):
    Falsy = ['null','undefined','',False,'NaN',0]
    count = 0
    for var in input:
        if var not in Falsy:
            count += 1
    return count
    
        
print(counttruth([0, 'null', 'undefined', 1, 6, 7, '',False, 8, 9 ]))