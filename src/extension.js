function getBaseIndent(line) {
	const leadingWhitespace = line.match(/^(\s*)/);
	const baseIndent = leadingWhitespace ? leadingWhitespace[0].length : 0;
	return baseIndent;
}

function formatPdx(text, baseIndent) {
	const lines = text.split('\n');
	const formattedLines = [];
	const indentSize = 4;  // Number of spaces for each indent level
	let indentLevel = 0;
	let increaseIndentNextLine = false;

	lines.forEach((line, index) => {
		const trimmedLine = line.trim();

		// Adjust indent level based on the structure
		if (increaseIndentNextLine) {
			indentLevel++;
			increaseIndentNextLine = false;
		}
		if (trimmedLine.endsWith('{')) {
			increaseIndentNextLine = true;
		}

		// For lines that are just closing curly brackets, reduce indent level first
		if (trimmedLine === '}') {
			indentLevel = Math.max(indentLevel - 1, 0);
		}

		// Calculate the correct indentation for each line
		let currentIndent = '';
		if (index === 0) {
			// Handle the first line separately to avoid modifying its indentation
			formattedLines.push(trimmedLine);
		} else {
			currentIndent = ' '.repeat(baseIndent + (indentLevel * indentSize));
			formattedLines.push(currentIndent + trimmedLine);
		}
	});

	return formattedLines.join('\n');
}
const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('Congratulations, your extension "paradox-highlight" is now active!');

	// Register the format command
	let disposable = vscode.commands.registerCommand('ck3-formatter.format', function () {
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
			console.log("Document formatting triggered");
			const fullRange = fullDocumentRange(document);
			const baseIndent = getBaseIndent(document.lineAt(fullRange.start.line).text);
			const formatted = formatPdx(document.getText(), baseIndent);
			return [vscode.TextEdit.replace(fullRange, formatted)];
		}
	}

	let rangeFormatter = {
		provideDocumentRangeFormattingEdits(document, range) {
			console.log("Range formatting triggered");
			const text = document.getText(range);
			const baseIndent = getBaseIndent(document.lineAt(range.start.line).text);
			const formatted = formatPdx(text, baseIndent);
			return [vscode.TextEdit.replace(range, formatted)];
		}
	}

	// Register the document formatting provider
	vscode.languages.registerDocumentFormattingEditProvider('ck3', documentFormatter);
	vscode.languages.registerDocumentFormattingEditProvider('vic3', documentFormatter);
	vscode.languages.registerDocumentFormattingEditProvider('paradox', documentFormatter);

	// Register the document range formatting provider
	vscode.languages.registerDocumentRangeFormattingEditProvider('ck3', rangeFormatter);
	vscode.languages.registerDocumentRangeFormattingEditProvider('vic3', rangeFormatter);
	vscode.languages.registerDocumentRangeFormattingEditProvider('paradox', rangeFormatter);

	function fullDocumentRange(document) {
		const start = new vscode.Position(0, 0);
		const end = new vscode.Position(document.lineCount - 1, document.lineAt(document.lineCount - 1).text.length);
		return new vscode.Range(start, end);
	}
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
};

