/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

'use strict';

const invariant = require('fbjs/lib/invariant');

let showedListViewDeprecation = false;
let showedSwipeableListViewDeprecation = false;

// Export React, plus some native additions.
module.exports = {
  // Components
  get AccessibilityInfo() {
    return require('AccessibilityInfo');
  },
  get ActivityIndicator() {
    return require('ActivityIndicator');
  },
  get ART() {
    return require('ReactNativeART');
  },
  get Button() {
    return require('Button');
  },
  get CheckBox() {
    return require('CheckBox');
  },
  get DatePickerIOS() {
    return require('DatePickerIOS');
  },
  get DrawerLayoutAndroid() {
    return require('DrawerLayoutAndroid');
  },
  get FlatList() {
    return require('FlatList');
  },
  get Image() {
    return require('Image');
  },
  get ImageBackground() {
    return require('ImageBackground');
  },
  get ImageEditor() {
    return require('ImageEditor');
  },
  get ImageStore() {
    return require('ImageStore');
  },
  get InputAccessoryView() {
    return require('InputAccessoryView');
  },
  get KeyboardAvoidingView() {
    return require('KeyboardAvoidingView');
  },
  get ListView() {
    if (!showedListViewDeprecation) {
      console.warn(
        'ListView is deprecated and will be removed in a future release. ' +
          'See https://fb.me/nolistview for more information',
      );

      showedListViewDeprecation = true;
    }
    return require('ListView');
  },
  get MaskedViewIOS() {
    return require('MaskedViewIOS');
  },
  get Modal() {
    return require('Modal');
  },
  get Picker() {
    return require('Picker');
  },
  get PickerIOS() {
    return require('PickerIOS');
  },
  get ProgressBarAndroid() {
    return require('ProgressBarAndroid');
  },
  get ProgressViewIOS() {
    return require('ProgressViewIOS');
  },
  get SafeAreaView() {
    return require('SafeAreaView');
  },
  get ScrollView() {
    return require('ScrollView');
  },
  get SectionList() {
    return require('SectionList');
  },
  get SegmentedControlIOS() {
    return require('SegmentedControlIOS');
  },
  get Slider() {
    return require('Slider');
  },
  get SnapshotViewIOS() {
    return require('SnapshotViewIOS');
  },
  get Switch() {
    return require('Switch');
  },
  get RefreshControl() {
    return require('RefreshControl');
  },
  get StatusBar() {
    return require('StatusBar');
  },
  get SwipeableFlatList() {
    return require('SwipeableFlatList');
  },
  get SwipeableListView() {
    if (!showedSwipeableListViewDeprecation) {
      console.warn(
        'ListView and SwipeableListView are deprecated and will be removed in a future release. ' +
          'See https://fb.me/nolistview for more information',
      );

      showedSwipeableListViewDeprecation = true;
    }
    return require('SwipeableListView');
  },
  get TabBarIOS() {
    return require('TabBarIOS');
  },
  get Text() {
    return require('Text');
  },
  get TextInput() {
    return require('TextInput');
  },
  get ToastAndroid() {
    return require('ToastAndroid');
  },
  get ToolbarAndroid() {
    return require('ToolbarAndroid');
  },
  get Touchable() {
    return require('Touchable');
  },
  get TouchableHighlight() {
    return require('TouchableHighlight');
  },
  get TouchableNativeFeedback() {
    return require('TouchableNativeFeedback');
  },
  get TouchableOpacity() {
    return require('TouchableOpacity');
  },
  get TouchableWithoutFeedback() {
    return require('TouchableWithoutFeedback');
  },
  get View() {
    return require('View');
  },
  get ViewPagerAndroid() {
    return require('ViewPagerAndroid');
  },
  get VirtualizedList() {
    return require('VirtualizedList');
  },
  get WebView() {
    return require('WebView');
  },

  // APIs
  get ActionSheetIOS() {
    return require('ActionSheetIOS');
  },
  get Alert() {
    return require('Alert');
  },
  get AlertIOS() {
    return require('AlertIOS');
  },
  get Animated() {
    return require('Animated');
  },
  get AppRegistry() {
    return require('AppRegistry');
  },
  get AppState() {
    return require('AppState');
  },
  get AsyncStorage() {
    return require('AsyncStorage');
  },
  get BackHandler() {
    return require('BackHandler');
  },
  get CameraRoll() {
    return require('CameraRoll');
  },
  get Clipboard() {
    return require('Clipboard');
  },
  get DatePickerAndroid() {
    return require('DatePickerAndroid');
  },
  get DeviceInfo() {
    return require('DeviceInfo');
  },
  get Dimensions() {
    return require('Dimensions');
  },
  get Easing() {
    return require('Easing');
  },
  get findNodeHandle() {
    return require('ReactNative').findNodeHandle;
  },
  get I18nManager() {
    return require('I18nManager');
  },
  get ImagePickerIOS() {
    return require('ImagePickerIOS');
  },
  get InteractionManager() {
    return require('InteractionManager');
  },
  get Keyboard() {
    return require('Keyboard');
  },
  get LayoutAnimation() {
    return require('LayoutAnimation');
  },
  get Linking() {
    return require('Linking');
  },
  get NativeEventEmitter() {
    return require('NativeEventEmitter');
  },
  get NetInfo() {
    return require('NetInfo');
  },
  get PanResponder() {
    return require('PanResponder');
  },
  get PermissionsAndroid() {
    return require('PermissionsAndroid');
  },
  get PixelRatio() {
    return require('PixelRatio');
  },
  get PushNotificationIOS() {
    return require('PushNotificationIOS');
  },
  get Settings() {
    return require('Settings');
  },
  get Share() {
    return require('Share');
  },
  get StatusBarIOS() {
    return require('StatusBarIOS');
  },
  get StyleSheet() {
    return require('StyleSheet');
  },
  get Systrace() {
    return require('Systrace');
  },
  get TimePickerAndroid() {
    return require('TimePickerAndroid');
  },
  get TVEventHandler() {
    return require('TVEventHandler');
  },
  get UIManager() {
    return require('UIManager');
  },
  get unstable_batchedUpdates() {
    return require('ReactNative').unstable_batchedUpdates;
  },
  get Vibration() {
    return require('Vibration');
  },
  get VibrationIOS() {
    return require('VibrationIOS');
  },
  get YellowBox() {
    return require('YellowBox');
  },

  // Plugins
  get DeviceEventEmitter() {
    return require('RCTDeviceEventEmitter');
  },
  get NativeAppEventEmitter() {
    return require('RCTNativeAppEventEmitter');
  },
  get NativeModules() {
    return require('NativeModules');
  },
  get Platform() {
    return require('Platform');
  },
  get processColor() {
    return require('processColor');
  },
  get requireNativeComponent() {
    return require('requireNativeComponent');
  },
  get takeSnapshot() {
    return require('takeSnapshot');
  },

  // Prop Types
  get ColorPropType() {
    return require('DeprecatedColorPropType');
  },
  get EdgeInsetsPropType() {
    return require('DeprecatedEdgeInsetsPropType');
  },
  get PointPropType() {
    return require('DeprecatedPointPropType');
  },
  get ViewPropTypes() {
    return require('DeprecatedViewPropTypes');
  },

  // Deprecated
  get BackAndroid() {
    invariant(
      false,
      'BackAndroid is deprecated and has been removed from this package. ' +
        'Use BackHandler instead',
    );
  },

  get Navigator() {
    invariant(
      false,
      'Navigator is deprecated and has been removed from this package. It can now be installed ' +
        'and imported from `react-native-deprecated-custom-components` instead of `react-native`. ' +
        'Learn about alternative navigation solutions at http://facebook.github.io/react-native/docs/navigation.html',
    );
  },
  get NavigatorIOS() {
    invariant(
      false,
      'NavigatorIOS is deprecated and has been removed from this package. ' +
        'Learn about alternative navigation solutions at http://facebook.github.io/react-native/docs/navigation.html',
    );
  },
};
