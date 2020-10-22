import React, {Component} from 'react';
import Modal from "../../components/UI/Modal/Modal";
import Aux from '../Auxiliary/Auxiliary'

const withErrorHandler = (WrapperComponent, axios) => {
    return class extends Component {
        reqInterceptor;
        resInterceptor;
        constructor(props, context) {// best to use interceptors in constructors
            super(props, context);
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null}) //clear errors
                return req; //if you don't do this request will not continue
            });
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            })
        }

        state ={
            error: null
        }
        // componentWillMount() {//instead u can use the constructor
        //     axios.interceptors.request.use(req => {
        //         this.setState({error: null}) //clear errors
        //         return req; //if you don't do this request will not continue
        //     });
        //     axios.interceptors.response.use(res => res, error => {
        //         this.setState({error: error});
        //     })
        // }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmedHandler = () =>{
            this.setState({error: null})
        }

        render() {
            return <Aux>
                <Modal show={this.state.error}
                modalClosed={this.errorConfirmedHandler}>
                    {this.state.error ? this.state.error.message : null}
                </Modal>
                <WrapperComponent {...this.props} />
            </Aux>
        }
    }
}

export default withErrorHandler;