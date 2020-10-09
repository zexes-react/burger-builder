//sole purpose is to rap multiple components as one as react demands
// we could have used <div></div> but this approach is the best
const aux =(props) => props.children;

export default aux;