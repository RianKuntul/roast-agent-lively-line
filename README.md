# Roast Your Own Agent

[![make.fun](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)
[![Rank](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/RianKuntul/roast-agent-lively-line/rank.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)
[![Reward](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/RianKuntul/roast-agent-lively-line/reward.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)

One line roasting my own AI agent: it burns an hour calling tools to
verify a one-line fix, then asks me if I am sure I want it fixed.

## Run

```sh
node main.ts
```

Writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (defaults to
`/output/entry.txt`), after self-validating the gate: exactly one line,
1–140 characters, no trailing newline.
