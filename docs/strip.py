#!/usr/bin/env python3
import os

IN_DIR = "./ck3/original"
OUT_DIR = "./ck3/stripped"
SPECIAL_SET = {
	"yes", "no", # RHS constants
	"root", "from", "this", "prev", # Special scopes
	"or", "and", "not", "nor", "nand", # Boolean operators
	"limit", "if", "else", "else_if", "trigger_if", "trigger_else", "trigger_else_if", "while", "switch", # Control scopes
	"add_to_temporary_list", "assert_if", "assert_read", "custom_description", "custom_tooltip", "debug_log", "save_temporary_opinion_value_as", "save_temporary_scope_as", "save_temporary_scope_value_as" # Multi scopes
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
			if line.find("-") > 0: # Discard seperator and description
				line = line.split(" -")[0]
				if line.find(" ") == -1: # Discard some rare cases
					lines.append(line)
	elif fin.endswith("modifiers.log") or fin.endswith("modifiers_all.log"):
		for line in text.split("\n"):
			if line.startswith("Tag:"): # Only select tag
				lines.append(line.split(": ")[1])
	elif fin.endswith("event_targets.log"):
		for item in text.split("\n\n--------------------\n\n")[1:-1]: # Group by seperator & discard title + tail
			if item.find("Wild") != -1:
				continue # Skip item with "Wild Card" property
			for line in item.split('\n'):
				if line.find("-") != -1:
					if item.find("Require") != -1:
						lines.append("@" + line.split(" -")[0])
					else:
						lines.append(line.split(" -")[0])
	lines = list(set(lines) - SPECIAL_SET)
	lines.sort()
	try:
		open(fout, encoding="utf-8", mode="w", newline="\n").write("\n".join(lines) + "\n") # Append an EOL befor EOF
	except:
		print(f"Error when open {fout} for writing")
		exit(1)
