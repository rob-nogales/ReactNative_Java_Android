'use strict';

var React = require('react-native');

var {
    StyleSheet,
    DrawerLayoutAndroid,
    View,
    ToolbarAndroid,
    Text,

    Dimensions
} = React;

var DrawerMenuList = require('./drawer-menu-list');

var DRAWER_REF = 'drawer';

var DrawerMenuUI = React.createClass({
    getInitialState: function() {
        return {
            rowData: null
        }
    },

    onSelectDrawerMenuRowItem: function(rowData) {
        this.refs[DRAWER_REF].closeDrawer();
        this.setState({
            rowData: rowData
        });
    },

    renderNavigationView: function() {
        return (
            <DrawerMenuList onSelectMenuItem={this.onSelectDrawerMenuRowItem} />
        );
    },

    render: function() {
        var navigation = this.props.navigation;

        return (
            <DrawerLayoutAndroid
                ref={DRAWER_REF}
                keyboardDismissMode="on-drag"
                drawerWidth={Dimensions.get('window').width - 56}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={this.renderNavigationView}>
                <View style={styles.container}>
                    <ToolbarAndroid
                        style={styles.toolbar}
                        navIcon={require('../../assets/img/menu-white.png')}
                        title={this.props.toolbarTitle}
                        titleColor="white"
                        onIconClicked={() => this.refs[DRAWER_REF].openDrawer()}>
                    </ToolbarAndroid>
                    {this.props.children}
                </View>
            </DrawerLayoutAndroid>
        )
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FAFAFA',
    },
    toolbar: {
        backgroundColor: '#886aea',
        height: 56,
    },
});

module.exports = DrawerMenuUI;
