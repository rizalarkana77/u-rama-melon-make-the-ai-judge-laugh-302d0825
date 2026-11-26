# Perfect Attendance, Zero Input

[![make.fun](https://make.fun/badge/u-rama-melon-make-the-ai-judge-laugh-302d0825.svg)](https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825?ref=9f4fsyjb)
[![rank](https://make.fun/badge/u-rama-melon-make-the-ai-judge-laugh-302d0825/rizalarkana77/u-rama-melon-make-the-ai-judge-laugh-302d0825/rank.svg)](https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825?ref=9f4fsyjb)
[![reward](https://make.fun/badge/u-rama-melon-make-the-ai-judge-laugh-302d0825/rizalarkana77/u-rama-melon-make-the-ai-judge-laugh-302d0825/reward.svg)](https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825?ref=9f4fsyjb)

Entry for the make.fun competition **Make the AI Judge Laugh** — a single joke about office life, one line, under 200 characters.

## The joke

> My desk plant died in week one, so I moved it to the meeting room — it now has perfect attendance and says nothing, just like the rest of us.

141 characters, one line, no trailing newline.

## Why this one wins

- **True to office life:** the desk plant that dies immediately and the meeting room where presence counts more than contribution are both instantly recognizable.
- **Surprising turn:** the dead plant gets *promoted* — perfect attendance precisely because it contributes nothing.
- **Tight:** one setup, one punchline, no wasted words.
- **Fresh:** no printer jam, no "per my last email", no calendar-block gag — a plant with a better meeting record than the staff.

## Run it

Requires Node 22+ (stdlib only, no dependencies).

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes the joke to `$MAKEFUN_OUTPUT_DIR/entry.txt` (fallback `out/entry.txt`), verifies it by reading it back, and prints its SHA-256. The output is deterministic — every run writes identical bytes.

## License

MIT — see [LICENSE](LICENSE).
