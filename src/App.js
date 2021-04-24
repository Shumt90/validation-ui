import './App.css';
import ReactJson from 'react-json-view'
import React from "react";

function App() {

    const rules = [
        {
            "ruleName": "sum",
            "values": [
                {
                    "source": "TABLE",
                    "key": "a"
                },
                {
                    "source": "TABLE",
                    "key": "b"
                },
                {
                    "source": "TABLE",
                    "key": "c"
                }
            ],
            "resultName": "sumOfABC",
            "description": null,
            "ruleType": "MUTATION"
        },
        {
            "ruleName": "isNumeric",
            "values": [
                {
                    "source": "ENV",
                    "key": "sumOfABC"
                }
            ],
            "resultName": null,
            "description": null,
            "ruleType": "CHECKER"
        },
        {
            "ruleName": "isEmail",
            "values": [
                {
                    "source": "CONSTANT",
                    "key": "itIsTestOfEmail"
                }
            ],
            "resultName": null,
            "description": null,
            "ruleType": "CHECKER"
        }
    ]

    const model = {methods: ["sum", "regExp", "min", "isEmail", "isPhone"]}

    function ValidationRowView({rule}) {

        const params = rule.values.map((value) => {
            return (value.source + ":" + value.key)
        }).join(', ')

        return (
            <tr>
                <button>Edit</button>
                <td>{rule.ruleName}({params})=>{rule.resultName}</td>
            </tr>
        );

    }

    function ValidationEdit({rule, model}) {


    }

    function ValidationView({rules1}) {
        return (
            <table>
                <tbody>
                {rules1.map((rule) =>
                    <ValidationRowView key={rule.name} rule={rule}/>
                )}
                </tbody>
            </table>)
    }

    function ReactJsonContent(json1) {
        return (
            <div className="content">
                <ReactJson src={json1} collapsed={true} enableClipboard={false} displayObjectSize={false}
                           displayDataTypes={false} displayArrayKey={false}/>
            </div>
        );
    }

    function BoxWindows({innerContent, title1}) {
        return (
            <div className="container">
                <div className="top">
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <span className="dot"/>
                                <span className="dot"/>
                                <span className="dot"/>
                            </td>
                            <td>
                                <h3>{title1}</h3>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                {innerContent}
            </div>

        );
    }

    return (
        <div>
            <BoxWindows key={1} innerContent={ReactJsonContent(rules)} title1="Rules"/>
            <BoxWindows key={2} innerContent={ReactJsonContent(model)} title1="Model"/>
            <ValidationView key={3} rules1={rules}/>
        </div>
    );
}

export default App;
