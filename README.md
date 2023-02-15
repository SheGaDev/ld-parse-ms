# ld-parse-ms

### Examples function **parseMilliseconds**
```js
const { parseMilliseconds } = require("ld-parse-ms");

parseMilliseconds(1234567890);
// return { years: 0, months: 0, weeks: 2, days: 0, hours: 6, minutes: 56, seconds: 7, milliseconds: 890 }

parseMilliseconds(1234567890, ["hours", "minutes", "seconds"]);
// return { hours: 6, minutes: 56, seconds: 7 }
```
### Examples function **formatTime**
```js
const { formatTime } = require("ld-parse-ms")

formatTime(1234567890, false)
// return "0г. 0мес. 2н. 0д. 6ч. 56мин. 7сек. 890мс."

formatTime(1234567890, true, ["minutes", "seconds"])
// return "`56мин.` `7сек.`"
```
### Examples function **formattingDiscordTimestamp**
```js
const { formattingDiscordTimestamp } = require("ld-parse-ms")

formattingDiscordTimestamp(1676064699727)
// return "<t:1676064699:f>"

formattingDiscordTimestamp(1676064699727, "R")
// return "<t:1676064699:R>"
```
## Style Timestamp
| style | format |
|:-----:|:------:|
|  "t"  | 21:31  |
|  "T"  | 21:31:39 |
|  "d"  | 10/02/2023 |
|  "D"  | 10 February 2023 |
|  "f"  | 10 February 2023 21:31 |
|  "F"  | Friday, 10 February 2023 21:31 |
|  "R"  | 3 hours ago |
