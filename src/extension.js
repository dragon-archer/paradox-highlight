const vscode = require('vscode');

function getBaseIndent(line) {
	const leadingWhitespace = line.match(/^(\s*)/);
	const baseIndent = leadingWhitespace ? leadingWhitespace[0].length : 0;
	return baseIndent;
}

function formatPdx(text, baseIndent) {
	const lines = text.split('\n');
	const formattedLines = [];
	const indentSize = vscode.workspace.getConfiguration('editor').get('tabSize');
	const insertSpaces = vscode.workspace.getConfiguration('editor').get('insertSpaces');
	let indentLevel = 0;
	let increaseIndentNextLine = false;

	lines.forEach((line, index) => {
		const trimmedLine = line.trim();

		// Adjust indent level based on the structure
		if (increaseIndentNextLine) {
			indentLevel++;
			increaseIndentNextLine = false;
		}
		// Opening curly bracket with optional comment except those inside comments
		// TODO: Escape '#' inside strings
		if (trimmedLine.match(/^[^#]*\{\s*(#.*)?$/)) {
			increaseIndentNextLine = true;
		}

		// Closing curly bracket with optional comment
		// TODO: Check for paired curly brackets instead of forcing to start with '}'
		if (trimmedLine.match(/^\}\s*(#.*)?/)) {
			indentLevel = Math.max(indentLevel - 1, 0);
		}

		// Calculate the correct indentation for each line
		let currentIndent = '';
		if (index === 0 || trimmedLine === '') {
			// Handle the first line separately to avoid modifying its indentation
			formattedLines.push(trimmedLine);
		} else {
			if (insertSpaces) {
				currentIndent = ' '.repeat(baseIndent + (indentLevel * indentSize));
			}
			else {
				currentIndent = '\t'.repeat(baseIndent + indentLevel);
			}
			formattedLines.push(currentIndent + trimmedLine);
		}
	});

	return formattedLines.join('\n');
}

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	// Register the format command
	let disposable = vscode.commands.registerCommand('paradox-highlight.format', function () {
		let editor = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}

		let document = editor.document;
		let range = new vscode.Range(
			document.positionAt(0),
			document.positionAt(document.getText().length)
		);

		let baseIndent = getBaseIndent(document.lineAt(range.start.line).text);
		let formatted = formatPdx(document.getText(), baseIndent);
		editor.edit(editBuilder => {
			editBuilder.replace(range, formatted);
		});
	});

	context.subscriptions.push(disposable);

	let documentFormatter = {
		provideDocumentFormattingEdits(document) {
			const fullRange = fullDocumentRange(document);
			const baseIndent = getBaseIndent(document.lineAt(fullRange.start.line).text);
			const formatted = formatPdx(document.getText(), baseIndent);
			return [vscode.TextEdit.replace(fullRange, formatted)];
		}
	}

	let rangeFormatter = {
		provideDocumentRangeFormattingEdits(document, range) {
			const text = document.getText(range);
			const baseIndent = getBaseIndent(document.lineAt(range.start.line).text);
			const formatted = formatPdx(text, baseIndent);
			return [vscode.TextEdit.replace(range, formatted)];
		}
	}

	// Register the document formatting provider
	vscode.languages.registerDocumentFormattingEditProvider('ck3', documentFormatter);
	vscode.languages.registerDocumentFormattingEditProvider('eu4', documentFormatter);
	vscode.languages.registerDocumentFormattingEditProvider('hoi4', documentFormatter);
	vscode.languages.registerDocumentFormattingEditProvider('vic3', documentFormatter);
	vscode.languages.registerDocumentFormattingEditProvider('paradox', documentFormatter);

	// Register the document range formatting provider
	vscode.languages.registerDocumentRangeFormattingEditProvider('ck3', rangeFormatter);
	vscode.languages.registerDocumentRangeFormattingEditProvider('eu4', rangeFormatter);
	vscode.languages.registerDocumentRangeFormattingEditProvider('hoi4', rangeFormatter);
	vscode.languages.registerDocumentRangeFormattingEditProvider('vic3', rangeFormatter);
	vscode.languages.registerDocumentRangeFormattingEditProvider('paradox', rangeFormatter);

	function fullDocumentRange(document) {
		const start = new vscode.Position(0, 0);
		const end = new vscode.Position(document.lineCount - 1, document.lineAt(document.lineCount - 1).text.length);
		return new vscode.Range(start, end);
	}
}

function deactivate() { }

module.exports = {
	activate,
	deactivate
};
