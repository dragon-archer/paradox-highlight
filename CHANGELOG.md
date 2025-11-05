# Paradox Highlight Changelog

## Version 1.9.0, 2025-11-05

### Bugfix

- Fix duplicating UUID of `Hearts of Iron IV`

### Enhancement

- Add more `Europa Universalis V` parameters

### New Features

- Add support for `Europa Universalis V`
- Enable formatting for `Europa Universalis V`

## Version 1.8.3, 2025-10-02

### Enhancements

- Update `Victoria 3` to version 1.10.3 (Kaffee)

## Version 1.8.2, 2025-06-19

### Enhancements

- Update `Victoria 3` to version 1.9.0 (Lady Grey)

## Version 1.8.1, 2024-11-22

### Enhancements

- Update `Crusader Kings III` to version 1.14.1 (Traverse)
- Update `Victoria 3` to version 1.8.1 (Masala Chai)
- Add more `Europa Universalis IV` builtin commands
- Add more `Europa Universalis IV` parameters

## Version 1.8.0, 2024-11-11

### Bugfix

- Allow dots inside quotes in `localization`

### Enhancements

- Add more `Europa Universalis IV` builtin commands
- Add more `Europa Universalis IV` and `Hearts of Iron IV` parameters

### New Features

- Add support for `Hearts of Iron IV`
- Enable formatting for `Hearts of Iron IV`

## Version 1.7.2, 2024-10-26

### Bugfix

- Fix RHS event targets in `Europa Universalis IV`

### Enhancements

- Add more `Europa Universalis IV` builtin commands
- Add more `Europa Universalis IV` and `Crusdaer Kings III` parameters

### New Feature

- Enable formatting for `Europa Universalis IV`

## Version 1.7.1, 2024-10-24

### Enhancement

- Update `Crusader Kings III` to version 1.13.2 (Basileus)

## Version 1.7.0, 2024-10-19

### Enhancements

- Update `Crusader Kings III` to version 1.13.1.2 (Basileus)
- Update `Victoria 3` to version 1.7.6 (Kahwah)
- Add more `Europa Universalis IV` and `Victoria 3` parameters

### New Feature

- Add support for `Europa Universalis IV`

## Version 1.6.0, 2024-07-06

### Enhancements

- Update `Crusader Kings III` to version 1.12.5 (Scythe)
- Update `Victoria 3` to version 1.7.3 (Kahwah)
- Improve auto language detection using Steam ID
- Add more `Victoria 3` parameters

### New Feature

- Add Chinese version of README

## Version 1.5.0, 2024-06-26

### Enhancements

- Update `Victoria 3` to version 1.7.0 (Kahwah)
- Improve auto language detection

## Version 1.4.0, 2024-06-08

### New Feature

- Add a formatter for Paradox Scripts

### Enhancement

- Add more `Victoria 3` parameters

## Version 1.3.4, 2024-05-26

### Bugfix

- Fix localization quote highlight

## Version 1.3.3, 2024-05-25

### Enhancements

- Improve localization argument highlight
- Add more `Victoria 3` parameters

## Version 1.3.2, 2024-04-14

### Bugfix

- Fix date highlight

### Enhancement

- Add more `Victoria 3` parameters

## Version 1.3.1, 2024-03-30

### Bugfix

- Fix empty capture

## Version 1.3.0, 2024-03-30

### Enhancements

- Update `Victoria 3` to version 1.6.2 (Blackcurrant)
- Add more `Victoria 3` parameters

## Version 1.2.2, 2024-03-22

### Enhancement

- Add more `Victoria 3` parameters

## Version 1.2.1, 2024-03-02

### Enhancement

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
