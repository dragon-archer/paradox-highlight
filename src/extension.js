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

        let formatted = formatCK3(document.getText());
        editor.edit(editBuilder => {
            editBuilder.replace(range, formatted);
        });
    });

    context.subscriptions.push(disposable);

    // Register the document formatting provider
    vscode.languages.registerDocumentFormattingEditProvider('ck3', {
        provideDocumentFormattingEdits(document) {
            const formatted = formatCK3(document.getText());
            return [vscode.TextEdit.replace(fullDocumentRange(document), formatted)];
        }
    });

    function fullDocumentRange(document) {
        const start = new vscode.Position(0, 0);
        const end = new vscode.Position(document.lineCount - 1, document.lineAt(document.lineCount - 1).text.length);
        return new vscode.Range(start, end);
    }

    function formatCK3(text) {
        const lines = text.split('\n');
        const formattedLines = [];
        let indentLevel = 0;
        const indentSize = 4;  // Number of spaces for each indent level

        lines.forEach(line => {
            const trimmedLine = line.trim();

            // Decrease indent level for closing braces
            if (trimmedLine.startsWith('}')) {
                indentLevel--;
            }

            // Add the formatted line with appropriate indentation
            const indent = ' '.repeat(Math.max(0, indentLevel * indentSize));
            formattedLines.push(indent + trimmedLine);

            // Increase indent level for opening braces
            if (trimmedLine.endsWith('{')) {
                indentLevel++;
            }
        });

        return formattedLines.join('\n');
    }
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
