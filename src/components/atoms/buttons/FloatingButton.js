import React, {useState} from 'react';
import {TouchableOpacity, Animated, StyleSheet, View, Text} from 'react-native';

const FloatingButtonMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const animation = new Animated.Value(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    Animated.timing(animation, {
      toValue: isMenuOpen ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const renderMenuItems = () => {
    return (
      <View style={styles.menuItemsContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Item 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Item 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Item 3</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const floatingButtonRotation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg'],
  });

  const menuOpacity = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0, 1],
  });

  return (
    <View style={styles.container}>
      {renderMenuItems()}
      <TouchableOpacity
        style={styles.floatingButtonContainer}
        onPress={toggleMenu}>
        <Animated.View
          style={[
            styles.floatingButton,
            {transform: [{rotate: floatingButtonRotation}]},
          ]}>
          <Text style={styles.floatingButtonText}>+</Text>
        </Animated.View>
      </TouchableOpacity>
      <Animated.View style={[styles.menuContainer, {opacity: menuOpacity}]}>
        {renderMenuItems()}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuItemsContainer: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    height: 120,
    width: 120,
    backgroundColor: 'white',
    borderRadius: 60,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItem: {
    width: 100,
    height: 40,
    backgroundColor: '#3F51B5',
    marginVertical: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItemText: {
    color: 'white',
    fontSize: 16,
  },
  floatingButtonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  floatingButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#3F51B5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingButtonText: {
    fontSize: 40,
    color: 'white',
  },
  menuContainer: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    height: 120,
    width: 120,
    backgroundColor: 'white',
    borderRadius: 60,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FloatingButtonMenu;
