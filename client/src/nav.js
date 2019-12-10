import React, { Component } from 'react';
import { View } from 'react-native';

import { Navbar } from 'navbar-native';

class Nav extends Component {
  render() {
    return (
      <Navbar
        title={"MYtinerary"}
        left={{
          icon: "",
          label: "User",
          onPress: () => { alert('funciona!') }
        }}
        right={[{
          icon: "",
          onPress: () => { alert('works!') }
        }]}
      />
    )
  }
}




