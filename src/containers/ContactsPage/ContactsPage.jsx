import React, { Component } from "react";
import Breadcrumbs from "../../components/Common/Breadcrumbs/Breadcrumbs";
import ContactUs from "../../components/Contacts/ContactUs/ContactUs";
import MapContainer from "../../components/Contacts/MapContainer/MapContainer";
import './ContactsPage.scss';

export default class ContactsPage extends Component {
  render() {
    return (
      <>
        <div class="container contact_container">
          <div class="row">
            <div class="col">
              <Breadcrumbs />
            </div>
          </div>
          <MapContainer />
          <ContactUs />
        </div>
      </>
    );
  }
}
