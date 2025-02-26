// export const Age = ({ age }) => {
//     if (age < 18) {
//         return (
//             <div>
//                 <h1>You are not eligible to vote .... </h1>
//             </div>
//         );
//     } else {
//         return (
//             <div>
//                 <h1>You are eligible to vote ...</h1>
//             </div>
//         );
//     }
// }


// ?: Ternary Operator

export const Age = ({ age, isVoted }) => {
    return (
        <div>
            { (age < 18) ? (
                <h1>You are not eligible to vote ....</h1>
            ) : (
                <h1>You are eligible to vote ... </h1>
            ) }
            {
                isVoted && (
                    <h1>You have already voted ... </h1>
                )
            }
        </div>
    );
}


// && operator 