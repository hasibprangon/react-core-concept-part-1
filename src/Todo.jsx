// import React from 'react';

// const Todo = ({task}) => {
//     return (
//         <div>
//             <li>First task: {task}</li>
//         </div>
//     );
// };

// export default Todo;

// option-1 conditional rendering
// import React from 'react';

// const Todo = ({task, isDone}) => {
//     if(isDone){
//         return <li>Finished: {task}</li>
//     }
//     else{
//         return <li>Work on: {task}</li>
//     }
// };

// export default Todo;


// option-2
// import React from 'react';

// const Todo = ({task, isDone}) => {
//     if(isDone){
//         return <li>Finished: {task}</li>
//     }
//         return <li>Work on: {task}</li>
// };

// export default Todo;

// option-3
// import React from 'react';

// const Todo = ({task, isDone}) => {
//   return(
//     <li>{isDone ? 'Finished' : 'Work On'} {task}</li>
//   )
// };

// export default Todo;


// option-4
// import React from 'react';

// const Todo = ({task, isDone}) => {
//   return(
//     <li>{isDone && 'Finished:'} {task}</li>
//   )
// };

// export default Todo;


// option-5
// import React from 'react';

// const Todo = ({task, isDone}) => {
//   return(
//     <li>{isDone || 'Work On:'} {task}</li>
//   )
// };

// export default Todo;



// option-6
import React from 'react';

const Todo = ({ task, isDone }) => {
    let listItem;
    if (isDone) {
        listItem = <li>Finished: {task}</li>
    }
    else {
        listItem = <li>Work on: {task}</li>
    }

    return listItem;
};

export default Todo;