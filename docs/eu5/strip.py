#!/usr/bin/env python3
import os
import re

BASE_DIR = os.path.dirname(__file__)
IN_DIR = os.path.join(BASE_DIR, "original/")
OUT_DIR = os.path.join(BASE_DIR, "stripped/")
SPECIAL_SET = {
	"yes", "no", # RHS constants
	"root", "from", "this", "prev", # Special scopes
	"or", "and", "not", "nor", "nand", # Boolean operators
	"limit", "if", "else", "else_if", "trigger_if", "trigger_else", "trigger_else_if", "while", "switch", # Control scopes
	"add_to_temporary_list", "assert_if", "assert_read", "custom_description", "custom_tooltip", "debug_log", "save_temporary_scope_as", "save_temporary_scope_value_as" # Multi scopes
}

for filename in os.listdir(IN_DIR):
	fin = os.path.join(IN_DIR, filename)
	fout = os.path.join(OUT_DIR, filename)

	# Open & discard garbled codes
	try:
		text = open(fin, encoding="utf-8", errors="replace").read()
	except:
		print(f"Error when open {fin} for reading")
		exit(1)

	lines = []
	if fin.endswith("triggers.log") or fin.endswith("effects.log"):
		for line in text.split("\n"):
			if line.startswith("## "):
				lines.append(line.split("## ")[1])
	elif fin.endswith("modifiers.log"):
		for line in text.split("\n"):
			if re.match(r'^Tag: .*$', line):
				lines.append(line.split(":")[1].split(",")[0].strip())
	elif fin.endswith("event_targets.log"):
		for item in text.split("###"): # Group by seperator
			if item.find("Wild") != -1:
				continue # Skip item with "Wild Card" property
			for line in item.split('\n'):
				if line.find(" ") == 0:
					if item.find("Require") != -1:
						lines.append("@" + line.split(" ")[1])
					else:
						lines.append(line.split(" ")[1])
	lines = list(set(lines) - SPECIAL_SET)
	lines.sort()
	try:
		open(fout, encoding="utf-8", mode="w", newline="\n").write("\n".join(lines) + "\n") # Append an EOL befor EOF
	except:
		print(f"Error when open {fout} for writing")
		exit(1)
