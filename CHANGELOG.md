# Paradox Highlight Changelog

## Version 1.2.1, 2024-03-02

### Enhancements

- Make scopes prior than parameters

### Bug Fixes

- Fix `save_temporary_value_as`
- Fix highlight inside string
- Fix folding

## Version 1.2.0, 2024-02-23

### New Features

- Allow comparable rhs
- Allow highlight inside strings

### Enhancements

- Add more `Victoria 3` parameters
- Allow numbers to start an identifier
- Add one more multi-scope effect `save_temporary_value_as`

### Bug Fix

- Fix bar in `event_target`

## Version 1.1.2, 2024-02-13

### Enhancements

- Add more `Victoria 3` parameters
- Improve folding support

## Version 1.1.1, 2024-02-12

### Enhancement

- Add more `Victoria 3` parameters

### Bug Fixes

- Fix highlight after `|`
- Fix typo in `package.json`

## Version 1.1.0 for Victoria 3, 2024-02-11

### New Features

- Add syntax for `Victoria 3`
- Add docs for `Victoria 3`
- Colorful badges on README

### Enhancements

- Improve the robustness of scripts
- Make parameter highlight a base part of all syntaxes

## Version 1.0.2, 2024-02-11

### Enhancements

- Support more parameters
- Support more keywords

### Bug Fix

- Fix wrong highlight for `scope`, `event_target`, and `rhs_parameter`

## Version 1.0.1, 2024-02-03

### Enhancements

- Support more parameters
- Improve localization highlight

## Version 1.0.0 All-round Highlight, 2024-02-02

### New Features

- Support highlight inside strings
- Add intro images in `README.md`
- Develop corresponding theme

## Version 0.6.0 Detail Improvements, 2024-02-01

### New Features

- Support colors
- Support LHS date
- Seperate around bar (`|`)
- Support `scripted_trigger` and similar grammars

### Enhancement

- Support more parameters

### Bug Fixes

- Fix conflict between `event_target` and `parameter_lhs`
- Fix adjacent comment
- Fix version links

## Version 0.5.0 Property Highlight, 2024-01-31

### New Features

- Highlight common properties
- Allow LHS numbers

### Bug Fix

- Add missing builtin types

## Version 0.4.0 RHS Improvements, 2024-01-30

### New Features

- Support `?=` operator
- Support macro parameters (quoted in `$` pairs)
- Support array
- Support percentage numbers
- Support more detailed `LHS` recognition

### Enhancement

- Improve highlight for `RHS`

### Bug Fixes

- Fix UUID
- Fix negative number support

## Version 0.3.0 Scope Improvements, 2024-01-28

### New Features

- Support prefix scopes (`event_target`)
- Support all builtin scopes
- Support modifier highlight

### Enhancements

- Improve scope support
- Correctly seperate `LHS` by `.`

### Bug Fix

- Seperate `paradox` and `ck3` [microsoft/vscode-textmate#225](https://github.com/microsoft/vscode-textmate/issues/225)

## Version 0.2.0 for Crusader Kings III, 2024-01-22

### New Features

- Add syntax for `Crusader Kings III`
- Support syntax for `event_target`
- Add docs for Paradox builtin commands

## Version 0.1.0 Intial Release, 2024-01-21

### New Features

- Initial release
- Basic syntax highlight
