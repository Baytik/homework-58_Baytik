import React, {Component, Fragment} from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import Modal from "./Components/UI/Modal/Modal";
import Alert from "./Components/UI/Alert/Alert";

class App extends Component{

    state = {
        purchasing: false,
        nextImg: false,
    };

    purchaseHandler = () => {
      this.setState({purchasing: true});
    };

    purchaseCancel = () => {
        this.setState({purchasing: false});
        alert('You are clicked Cancel');
    };
    someHandler = () => {
      alert('Clicked button')
    };

    changeBackground = () => {
        this.setState({nextImg: true});
    };

  render() {
      return(
          <Fragment>
                <Header purchaseHandler={this.purchaseHandler}/>
                <div className="content">
                    <Content next={this.changeBackground}/>
                </div>
              <Footer/>
              <Modal
                  show={this.state.purchasing}
                  close={this.purchaseCancel}>
                  <p>Number: +94375739584</p>
                  <p>Address New York street 453/432</p>
                  <button className="modal-btn-red" onClick={this.purchaseCancel}>Cancel</button>
                  <button className="modal-btn-blue">Continue</button>
              </Modal>
              <Alert
                  type="some"
                  dismiss={this.someHandler}
              >This is a warning type alert</Alert>


              <Alert
                  type="success"
              >This is a success type alert</Alert>


              <Alert
                  type="warning"
                  clickDismissable
                  dismiss={this.someHandler}
              >This is a success type alert clickDismissable</Alert>
          </Fragment>
      )
  }
}

export default App;
