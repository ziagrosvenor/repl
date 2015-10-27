import React from "react"
import CodeMirror from "react-codemirror"
import "../node_modules/react-codemirror/node_modules/codemirror/mode/javascript/javascript"
const API_URL = "http://localhost:3001"

const App = React.createClass({
  displayName: "MhCryptokenRepl",
  getInitialState() {
    return {
      src: "Try mh-cryptoken"
    }
  },

  onCodeUpdate(textEditorInput) {
    window.fetch(API_URL + "/crypto", {
      method: "post",
      body: JSON.stringify({code: textEditorInput})
    })
  },

  render() {
    return (
      <div>
        <CodeMirror
          forceTextArea={true}
          options={{mode: "javascript", lineNumbers: true, tabSize: 2}}
          textAreaClassName={['form-control']}
          textAreaStyle={{minHeight: '10em'}}
          value={this.state.src}
          theme={'solarized'}
          onChange={this.onCodeUpdate}
        />
      </div>
    )
  }
})

window.fetch(API_URL + "/doc").then((doc) => {
  document.getElementById("doc").innerHTML(doc)
})

React.render(React.createElement(App), document.getElementById("app"))