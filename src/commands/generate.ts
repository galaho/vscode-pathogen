"use strict";

import process = require('child_process');
import vscode = require('vscode');

export async function run(args: any) {

    const destination = args ? args.fsPath : vscode.workspace.rootPath;

    const remote = await vscode.window.showInputBox({ prompt: "Enter the pathogen template repository" });

    if (remote === undefined) {
        console.error('undefined remote template repository');
        return;
    }

    const generate = process.spawn('pathogen', ['generate', remote, destination]);

    generate.stdout.on('data', async (data: any) => {
        let value = await vscode.window.showInputBox({ prompt: data.toString().replace(/:$/, '') });
        generate.stdin.write(`${value}\n`);
    });
}
