import React, { Component } from 'react'
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { CompanyActions } from '../../actions';
import TitleBar from '../../components/TitleBar';
import SubnavBar from '../../components/SubnavBar';
import CompanyForm from '../../components/Companies/Edit';

class EditCompany extends Component {
 constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);

    this.state = {
      error: false
    }
  }

  gotoCompanies = () => {
    browserHistory.push('/admin/companies');
  }
  
  saveCompany = (values) => {
    const company = {
      name: values.name
    }

    this.props.dispatch(CompanyActions.saveCompany(company)).then((response) => {
      browserHistory.push('/admin/companies');
    }).catch((e) => {
      this.setState({
        error: true
      })
    });
  }

  handleClose() {
    this.setState({
      error: false
    });
  }

  render() {
    const actions = [
      <FlatButton label="Ok" primary onTouchTap={this.handleClose} />
    ];
    return (
      <div className="grid">
        <div className="unit whole align-center">
          <SubnavBar back={this.gotoCompanies} />
          <TitleBar title="Location" />
          <div className="grid">
            <div className="unit whole">
              <CompanyForm onSubmit={this.saveCompany} />
              <Dialog
                actions={actions}
                modal={false}
                open={this.state.error}
                onRequestClose={this.handleClose}
              >
                There was an error saving the company.
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { auth } = state;
  return {
    auth
  }
}

export default connect(mapStateToProps)(EditCompany);