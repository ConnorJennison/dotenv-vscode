// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode')

const DOTENV_VAULT_VERSION = '1.11.1'
const TERMINAL_NAME = 'dotenv-official'

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate (context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(`Congratulations, your extension "dotenv-vault-vscode" with dotenv-vault@${DOTENV_VAULT_VERSION} is now active!`)

  const login = vscode.commands.registerCommand('dotenv.login', function () { dotenvLogin() })
  const logout = vscode.commands.registerCommand('dotenv.logout', function () { dotenvLogout() })
  const neww = vscode.commands.registerCommand('dotenv.new', function () { dotenvNew() })
  const open = vscode.commands.registerCommand('dotenv.open', function () { dotenvOpen() })
  const pull = vscode.commands.registerCommand('dotenv.pull', function () { dotenvPull() })
  const push = vscode.commands.registerCommand('dotenv.push', function () { dotenvPush() })
  const status = vscode.commands.registerCommand('dotenv.status', function () { dotenvStatus() })
  const versions = vscode.commands.registerCommand('dotenv.versions', function () { dotenvVersions() })
  const whoami = vscode.commands.registerCommand('dotenv.whoami', function () { dotenvWhoami() })

  context.subscriptions.push(login)
  context.subscriptions.push(logout)
  context.subscriptions.push(neww)
  context.subscriptions.push(open)
  context.subscriptions.push(pull)
  context.subscriptions.push(push)
  context.subscriptions.push(status)
  context.subscriptions.push(versions)
  context.subscriptions.push(whoami)
}

// commands
function dotenvLogin () {
  const command = 'login'

  infoMessage(command)
  const terminal = getTerminal()
  runCommand(terminal, command)
}

function dotenvLogout () {
  const command = 'logout'

  infoMessage(command)
  const terminal = getTerminal()
  runCommand(terminal, command)
}

function dotenvNew () {
  const command = 'new'

  infoMessage(command)
  const terminal = getTerminal()
  runCommand(terminal, command)
}

function dotenvOpen () {
  const command = 'open'

  infoMessage(command)
  const terminal = getTerminal()
  runCommand(terminal, command)
}

function dotenvPull () {
  const command = 'pull'

  infoMessage(command)
  const terminal = getTerminal()
  runCommand(terminal, command)
}

function dotenvPush () {
  const command = 'push'

  infoMessage(command)
  const terminal = getTerminal()
  runCommand(terminal, command)
}

function dotenvStatus () {
  const command = 'status'

  infoMessage(command)
  const terminal = getTerminal()
  runCommand(terminal, command)
}

function dotenvVersions () {
  const command = 'versions'

  infoMessage(command)
  const terminal = getTerminal()
  runCommand(terminal, command)
}

function dotenvWhoami () {
  const command = 'whoami'

  infoMessage(command)
  const terminal = getTerminal()
  runCommand(terminal, command)
}

// helpers
function infoMessage(command) {
  vscode.window.showInformationMessage(`Running dotenv-vault ${command}`)
}

function getTerminal() {
  let terminal = vscode.window.activeTerminal
  if (!terminal) {
    terminal = vscode.window.createTerminal(TERMINAL_NAME)
  }

  return terminal
}

function runCommand(terminal, command) {
  terminal.sendText(`npx --yes dotenv-vault@${DOTENV_VAULT_VERSION} ${command} --yes`)
  terminal.show()
}

// this method is called when your extension is deactivated
function deactivate () {}

module.exports = {
  activate,
  deactivate
}
