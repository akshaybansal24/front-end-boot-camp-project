import { useState } from "react";

export const BallotCastVoteForm = props => {
    const initialResultList = props.election.questions.map(question => 0);
    
    const [answersMap, setAnswersMap] = useState(initialResultList);

    const handleOnClick = (e,question) => {
        const indexToUpdate = props.election.questions.findIndex(q => q.id === question.id);
        const newAnswersMap = [...answersMap];
        newAnswersMap[indexToUpdate] = newAnswersMap[indexToUpdate] === 0 ? 1 : 0;
        setAnswersMap(newAnswersMap);
    }

    console.log("Answers Map = " + JSON.stringify(answersMap));
    return(
        <section>
            <h1 style={{fontSize: "1.5rem"}}>Caste your vote for {props.election.name} - {props.election.year}</h1>
            <form>
                <table>
                    <thead>
                        <tr>
                            <th>Question Name</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        props.election.questions.map(question => { return (
                            <tr key={question.id}>
                                <td>{question.question}</td>
                                <td>
                                    <div onChange={e => handleOnClick(e,question)}>
                                        <input type="checkbox" value="yes" name="answer" ></input>
                                    </div>
                                </td>
                            </tr>
                        ) } )
                    }
                    </tbody>
                </table>
                <button type="button" onClick={()=>props.onSubmitCastVote(answersMap)}>Cast Vote</button>
            </form>
        </section>
    );
}