import React from "react";
import { connect } from "react-redux";

// components
import { Form, Button, Fieldset, Legend } from "components";

// fields
import { ServicesFieldArray, RoomsFieldArray } from "fields";

// actions
import { fetchServices, updateServices } from "store/actions";

// styles
import "./user-services.css";

class UserServices extends React.Component {
  componentDidMount() {
    this.props.fetchServices();
  }

  renderSubmitButton = () => {
    return <Button type="submit" value="Save" className="btn-action" />;
  };

  render() {
    const { data, updateServices } = this.props;
    return (
      <Form
        form="UserServicesEdit"
        enableReinitialize={true}
        destroyOnUnmount={false}
        onFormSubmit={updateServices}
        submitButton={this.renderSubmitButton}
        initialValues={{ ...data }}
        className="user__form"
      >
        <Fieldset>
          <Legend>Service types</Legend>
          <ServicesFieldArray />
        </Fieldset>

        <Fieldset>
          <Legend>Room types</Legend>
          <RoomsFieldArray />
        </Fieldset>
      </Form>
    );
  }
}

const mapStateToProps = ({
  user: {
    services: { data }
  }
}) => {
  return {
    data
  };
};

const mapDispathToProps = {
  fetchServices,
  updateServices
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(UserServices);
