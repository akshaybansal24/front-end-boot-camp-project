const isEmpty = arr => !Array.isArray(arr) || arr.length === 0;

export const ElectionQuestionList = props => {

    console.log(props.vote);
    console.log(props.questions);

    return(
        <ul>
            { isEmpty(props.questions)
                ? <li>No Questions</li> :
                props.questions.map(question => { return(
                    <li key={props.vote.voterId}>VoterId:{props.vote.voterId}&emsp;ElectionId:{props.vote.electionId}&emsp;Question:{question.id}&emsp;Vote:{question.vote}</li>)
                })
            }

        </ul>
    );
};

ElectionQuestionList.defaultProps = {
    vote: {},
    questions: [],
}