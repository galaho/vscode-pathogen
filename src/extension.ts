'use strict';

import * as vscode from 'vscode';
import Generate = require('./commands/generate');

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.commands.registerCommand('extension.pathogen.generate', Generate.run));
}

export function deactivate() { }
