import React from 'react';
import { reduxForm, Field } from 'redux-form'
class Status extends React.Component {
    state = {
        editMode: false,
        localStatus: this.props.statusText
    }

    enableEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    disableEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.localStatus)
    }

    onStatusChange = (e) => {
        this.setState({
            localStatus: e.currentTarget.value
        })
    }



    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.localStatus !== this.state.localStatus) {
            this.setState({
                localStatus: this.props.status
            })
        }
    }

    render() {
        if (this.state.editMode === false) {
            return <div className="statusText" onDoubleClick={this.enableEditMode}>{!this.props.statusText ? "you have no status" : this.props.statusText}</div>
        } else {
            return <StatusInput value={this.state.localStatus} onBlur={this.disableEditMode}/>
        }
    }
}
const StatusInput = (props) => {
    return (
        <ReduxFormStatus />
    )
}

const StatusForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={"input"} type={"text"} name={"userStatus"}/>
        </form>
    )
}

const ReduxFormStatus = reduxForm({ form: 'userStatus' })(StatusForm)

export default Status