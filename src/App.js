import logo from "./ahlcg.png";
import "./App.css";
import { useState } from "react";
import { sample, random } from "lodash";

import guardianIcon from "./icons/guardian.webp";
import seekerIcon from "./icons/seeker.webp";
import rogueIcon from "./icons/rogue.webp";
import mysticIcon from "./icons/mystic.webp";
import survivorIcon from "./icons/survivor.webp";
import neutralIcon from "./icons/neutral.webp";
import anyIcon from "./icons/logo.webp";

const icons = {
    any: { icon: anyIcon, name: "Any", id: "any" },
    guardian: { icon: guardianIcon, name: "Guardian", id: "guardian" },
    seeker: { icon: seekerIcon, name: "Seeker", id: "seeker" },
    rogue: { icon: rogueIcon, name: "Rogue", id: "rogue" },
    mystic: { icon: mysticIcon, name: "Mystic", id: "mystic" },
    survivor: { icon: survivorIcon, name: "Survivor", id: "survivor" },
    neutral: { icon: neutralIcon, name: "Neutral", id: "neutral" },
};

function App() {
    const scenarios = [
        {
            name: "Night of the Zealot",
            id: "cycle1",
        },
        {
            name: "The Dunwich Legacy",
            id: "cycle2",
        },
        {
            name: "The Path to Carcosa",
            id: "cycle3",
        },
        {
            name: "The Forgotten Age",
            id: "cycle4",
        },
        {
            name: "The Circle Undone",
            id: "cycle5",
        },
        {
            name: "The Dream-Eaters",
            id: "cycle6",
        },
        {
            name: "The Innsmouth Conspiracy",
            id: "cycle7",
        },
        {
            name: "Edge of the Earth",
            id: "cycle8",
        },
        {
            name: "The Scarlet Keys",
            id: "cycle9",
        },
        {
            name: "Return to the night of Zealot",
            id: "cycle10",
        },
        {
            name: "Return to the Dunwich Legacy",
            id: "cycle11",
        },
        {
            name: "Return to the Path to Carcosa",
            id: "cycle12",
        },
        {
            name: "Return to the Forgotten Age",
            id: "cycle13",
        },
        {
            name: "Return to the Circle of Undone",
            id: "cycle14",
        },
        {
            name: "Curse of the Rougarou",
            type: "standalone",
            id: "standalone1",
        },
        {
            name: "Carnevale of Horrors",
            type: "standalone",
            id: "standalone2",
        },
        {
            name: "The Labyrinths of Lunacy",
            type: "standalone",
            id: "standalone3",
        },
        {
            name: "The Eternal Slumber",
            type: "standalone",
            id: "standalone4",
        },
        {
            name: "The Night's Usurper",
            type: "standalone",
            id: "standalone5",
        },
        {
            name: "Guardians of the Abyss",
            type: "standalone",
            id: "standalone6",
        },
        {
            name: "The Blob that Ate Everything",
            type: "standalone",
            id: "standalone7",
        },
        {
            name: "Murder at the Excelsior Hotel",
            type: "standalone",
            id: "standalone8",
        },
        {
            name: "Barkham Horror: The Meddling of Meowlathotep",
            type: "standalone",
            id: "standalone9",
        },
        {
            name: "War of the Outer Gods",
            type: "standalone",
            id: "standalone10",
        },
        {
            name: "Machinations Through Time",
            type: "standalone",
            id: "standalone11",
        },
        {
            name: "Fortune And Folly",
            type: "standalone",
            id: "standalone12",
        },
    ];

    const investigators = [
        { id: "investigator1",name:"Roland Banks", class: "guardian" },
        { id: "investigator2",name:"Daisy Walker", class: "seeker" },
        { id: "investigator3",name:"“Skids” O’Toole", class: "rogue" },
        { id: "investigator4",name:"Agnes Baker", class: "mystic" },
        { id: "investigator5",name:"Wendy Adams", class: "survivor" },
        { id: "investigator6",name:"Zoey Samaras", class: "guardian" },
        { id: "investigator7",name:"Rex Murphy", class: "seeker" },
        { id: "investigator8",name:"Jenny Barnes", class: "rogue" },
        { id: "investigator9",name:"Jim Culver", class: "mystic" },
        { id: "investigator10",name:"“Ashcan” Pete", class: "survivor" },
        { id: "investigator11",name:"Mark Harrigan", class: "guardian" },
        { id: "investigator12",name:"Minh Thi Phan", class: "seeker" },
        { id: "investigator13",name:"Sefina Rousseau", class: "rogue" },
        { id: "investigator14",name:"Akachi Onyele", class: "mystic" },
        { id: "investigator15",name:"William Yorick", class: "survivor" },
        { id: "investigator16",name:"Lola Hayes", class: "neutral" },
        { id: "investigator17",name:"Leo Anderson", class: "guardian" },
        { id: "investigator18",name:"Ursula Downs", class: "seeker" },
        { id: "investigator19",name:"Finn Edwards", class: "rogue" },
        { id: "investigator20",name:"Father Mateo", class: "mystic" },
        { id: "investigator21",name:"Calvin Wright", class: "survivor" },
        { id: "investigator22",name:"Carolyn Fern", class: "guardian" },
        { id: "investigator23",name:"Joe Diamond", class: "seeker" },
        { id: "investigator24",name:"Preston Fairmont", class: "rogue" },
        { id: "investigator25",name:"Diana Stanley", class: "mystic" },
        { id: "investigator26",name:"Rita Young", class: "survivor" },
        { id: "investigator27",name:"Marie Lambeau", class: "mystic" },
        { id: "investigator28",name:"Tommy Muldoon", class: "guardian" },
        { id: "investigator29",name:"Mandy Thompson", class: "seeker" },
        { id: "investigator30",name:"Tony Morgan", class: "rogue" },
        { id: "investigator31",name:"Luke Robinson", class: "mystic" },
        { id: "investigator32",name:"Patrice Hathaway", class: "survivor" },
        { id: "investigator33",name:"Sister Mary", class: "guardian" },
        { id: "investigator34",name:"Amanda Sharpe", class: "seeker" },
        { id: "investigator35",name:"Trish Scarborough", class: "rogue" },
        { id: "investigator36",name:"Dexter Drake", class: "mystic" },
        { id: "investigator37",name:"Silas Marsh", class: "survivor" },
        { id: "investigator38",name:"Lily Chen", class: "mystic" },
        { id: "investigator39",name:"Norman Withers", class: "seeker" },
        { id: "investigator40",name:"Monterey Jack", class: "rogue" },
        { id: "investigator41",name:"Daniela Reyes", class: "guardian" },
        { id: "investigator42",name:"Bob Jenkins", class: "survivor" },
        { id: "investigator43",name:"Carson Sinclair", class: "guardian" },
        { id: "investigator44",name:"Amina Zidane", class: "mystic" },
        { id: "investigator45",name:"Kymani Jones", class: "rogue" },
        { id: "investigator46",name:"Vincent Lee", class: "seeker" },
        { id: "investigator47",name:"Darrell Simmons", class: "survivor" },
        { id: "investigator48",name:"Charlie Kane", class: "neutral" },
        { id: "investigator49",name:"Nathaniel Cho", class: "guardian" },
        { id: "investigator50",name:"Harvey Walters", class: "seeker" },
        { id: "investigator51",name:"Winifred Habbamock", class: "rogue" },
        { id: "investigator52",name:"Jacqueline Fine", class: "mystic" },
        { id: "investigator53",name:"Stella Clark", class: "survivor" },
        { id: "investigator54",name:"Parallel Daisy Walker", class: "seeker" },
        { id: "investigator55",name:"Parallel Skids O’Toole", class: "rogue" },
        { id: "investigator56",name:"Parallel Agnes Baker", class: "mystic" },
        { id: "investigator57",name:"Parallel Roland Banks", class: "guardian" },
        { id: "investigator58",name:"Parallel Wendy Adams", class: "survivor" },
        { id: "investigator59",name:"Bark Harrigan", class: "guardian" },
        { id: "investigator60",name:"Kate Winthpup", class: "seeker" },
        { id: "investigator61",name:"“Skids” O’Drool", class: "rogue" },
        { id: "investigator62",name:"Jacqueline Canine", class: "mystic" },
        { id: "investigator63",name:"Duke", class: "survivor" },
    ];

    const [ selectedScenarios, setSelectedScenarios ] = useState([]);
    const [ selectedInvestigators, setSelectedInvestigators ] = useState([]);
    const [ result, setResult ] = useState("");
    const [ numberOfPlayers, setNumberOfPlayers ] = useState(4);
    const investigatorClasses = [
        useState("any"),
        useState("any"),
        useState("any"),
        useState("any"),
    ];

    const isSelected = (id, selectedList) => selectedList.find( selected => selected === id);
    const addOrRemoveSelected = (id, selectedList, setSelectedCallback) => {
        if(!selectedList.includes(id)){
            setSelectedCallback(selectedList.concat(id));
        }else{
            setSelectedCallback(selectedList.filter(selected => selected !== id));
        }
    };

    const areAllSelected = (selectedList, allList) => selectedList.length === allList.length;
    const addOrRemoveAllSelected = (active, allList, setSelectedCallback) => {
        if (!active) {
            return setSelectedCallback([]);
        }

        setSelectedCallback(allList.map(selected => selected.id));
    };

    const selectInvestigatorClass = (idx, investigatorClass) => {
        investigatorClasses[idx][1](investigatorClass);
    };

    const renderInvestigatorClass = (idx) => {
        const selectedIcon = icons[investigatorClasses[idx][0]];
        return <p>{selectedIcon.name} <img class="icon" src={ selectedIcon.icon } alt="icon"/></p>;
    };

    const generateResult = () => {
        const randomizedScenarioId = sample(selectedScenarios);

        const investigatorList = investigatorClasses.splice(0, numberOfPlayers).reduce((acc, val) => {
            let sampledInvestigatorId;
            if (val[0] === "any") {
                const filteredInvestigators = investigators.filter(({ id }) => selectedInvestigators.includes(id)).filter(({ id }) => !acc.includes(id));
                sampledInvestigatorId = sample(filteredInvestigators.length > 0? filteredInvestigators : selectedInvestigators).id;
            } else {
                const filteredInvestigators = investigators.filter(({ id }) => selectedInvestigators.includes(id)).filter(({ id }) => !acc.includes(id)).filter(investigator => investigator.class === val[0]);
                sampledInvestigatorId = sample(filteredInvestigators.length > 0? filteredInvestigators : selectedInvestigators).id;
            }

            acc.push(sampledInvestigatorId);
            return acc;
        }, []).map(investigatorId => investigators.find(({ id }) => id === investigatorId));

        const scenario = scenarios.find(({ id }) => id === randomizedScenarioId);

        const withExtra = random(0,2) === 0;
        const standaloneScenarios = selectedScenarios.filter(scenario => scenario.includes("standalone"));

        let extra;

        if ( withExtra && standaloneScenarios.length >0 && scenario.type !== "standalone") {
            extra = scenarios.find(({ id }) => id === sample(standaloneScenarios));
        }

        setResult({
            investigatorList,
            scenario,
            extra,
        });
    };

    const renderResult = () => {
        if (!result.investigatorList || !result.scenario) {
            return;
        }

        const extraMission = result.extra? <><p>with extra mission</p><h3>{result.extra.name}</h3></>: null;

        return <div class="result">
            <p>You should play</p>
            {
                result.investigatorList.map(investigator => {
                    return <p><img class="icon" src={ icons[investigator.class].icon } alt="icon"/> {investigator.name} </p>;
                })
            }
            <p>in</p>
            <h3>{result.scenario.name}</h3>
            {extraMission}
        </div>;
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={ logo } className="App-logo" alt="logo" />
            </header>
            <div class="container text-center">
                <div class="row">
                    <div class="col-sm-1" />
                    <div class="col-sm-10">
                        <div class="accordion" id="scenarioInvestigatorsAccordion">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                      Scenarios
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#scenarioInvestigatorsAccordion">
                                    <div class="accordion-body">
                                        <div>
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" role="switch" id={ "scenarioAllSwitch" } onChange={ (e) => addOrRemoveAllSelected(e.target.checked, scenarios, setSelectedScenarios) } checked={ areAllSelected(selectedScenarios, scenarios) }/>
                                                <label class="form-check-label" for={ "scenarioAllSwitch" }>All</label>
                                            </div>
                                        </div>
                                        {
                                            scenarios.map(scenario => {
                                                return <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" role="switch" id={ `${scenario.id}` } onChange={ () => addOrRemoveSelected(scenario.id, selectedScenarios, setSelectedScenarios) } checked={ isSelected(scenario.id, selectedScenarios) }/>
                                                    <label class="form-check-label" for={ `${scenario.id}` }>{scenario.name}</label>
                                                </div>;
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                      Investigators
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#scenarioInvestigatorsAccordion">
                                    <div class="accordion-body">
                                        <div>
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" role="switch" id={ "investigatorsAllSwitch" } onChange={ (e) => addOrRemoveAllSelected(e.target.checked, investigators, setSelectedInvestigators) } checked={ areAllSelected(selectedInvestigators, investigators) }/>
                                                <label class="form-check-label" for={ "investigatorsAllSwitch" }>All</label>
                                            </div>
                                        </div>
                                        {
                                            investigators.map(investigator => {
                                                return <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" role="switch" id={ `${investigator.id}` } onChange={ () => addOrRemoveSelected(investigator.id, selectedInvestigators, setSelectedInvestigators) } checked={ isSelected(investigator.id, selectedInvestigators) }/>

                                                    <label class={ `form-check-label ${investigator.class}` } for={ `${investigator.id}` }>
                                                        <img class="icon" src={ icons[investigator.class].icon } alt="icon"/>
                                                        {investigator.name}
                                                    </label>
                                                </div>;
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <h2>Number of players</h2>
                            <form>
                                <div class="form-group">
                                    <input type="range" class="form-control-range" id="formControlRange"  min="1" max="4" onChange={ (e) => setNumberOfPlayers(e.target.value) }/>
                                    <label for="formControlRange">{numberOfPlayers}</label>
                                </div>
                            </form>
                            <h2>Investigator classes</h2>
                            {
                                investigatorClasses.map((element, idx) => {
                                    if (idx >= numberOfPlayers) {
                                        return null;
                                    }

                                    return <div class="btn-group class-selector-dropdown">
                                        <button class="btn btn-secondary dropdown-toggle class-selector-dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {renderInvestigatorClass(idx)}
                                        </button>
                                        <ul class="dropdown-menu">
                                            {
                                                Object.entries(icons).map(([ key, value ]) => {
                                                    return<li onClick={ () => selectInvestigatorClass(idx, value.id) }><p>{value.name} <img class="icon" src={ value.icon } alt="icon"/></p></li>;
                                                })
                                            }
                                        </ul>
                                    </div>;
                                })
                            }
                            <br/>
                            {
                                (selectedInvestigators.length > 0 && selectedScenarios.length > 0)? <button type="button" class="btn btn-primary" onClick={ () => generateResult() }>What should I play next?</button> : null
                            }
                            <br/>
                            <br/>
                            <br/>
                            <div>
                                <p>
                                    {renderResult()}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col col-sm-1" />
                </div>
            </div>
        </div>
    );
}

export default App;
