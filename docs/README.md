# Docs

This directory contains all commands that Paradox Script Languages accept

## Structure

- [ck3](ck3/) - commands related to Crusader Kings III, current version: 1.11.1 (Peacock)
  - [original](ck3/original/) - logs dumped directly from the Game
    - Console command: `script_docs`
    - Note: Garbled codes have been removed using following regex: `(?<=-) .*[\x01-\x07\x80-\xff]$`, and trailing spaces are also removed.
