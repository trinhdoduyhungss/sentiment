# sentiment
# Simple sentiment
# Data words
|Words|Label|
|-----|-----|
|vui vẻ|vui|
|tức giận|bực|
|lo lắng|buồn|
|bực mình|bực|
|rất sốc|buồn|
|hơi lo lắng|bình thường|
|kiêu ngạo|vui|
|xấu hổ|buồn|
|rất bối rối|buồn|
|chán|buồn|
|tự tin|vui|
|bị lừa|buồn|
|lúng túng|buồn|
|rất buồn|buồn|
|rất hạnh phúc|vui|
|thất vọng|buồn|
|vô cùng hạnh phúc|vui|
|nhiệt tình|vui|
|hứng thú|vui|
|xúc động|buồn|
|thèm muốn|vui|
|đố kỵ|bực|
|hơi xấu hổ|bình thường|
|tuyệt vọng|buồn|
|điên tiết|bực|
|...See more at data.json...|...See more at data.json...|
# Example:
``` Yêu anh lắm đấy nhé, bao nhiêu tình yêu em đều trao cho anh. Nhưng sao anh lại ghét, em hận những ai bạc tình như vậy ```
# Results
``` [bực, bực, vui] ```
- ==> label: bực : 67%
#Check accuracy of module
- With 37 sentence for test ( data_test.js ), the accuracy is 0.92.