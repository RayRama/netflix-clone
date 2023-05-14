import { View, Text, StyleSheet, Button, Pressable, Alert } from "react-native";
import React from "react";
import { useAtom } from "jotai";
import { NetflixUserAtom } from "@store/index";
import {
  BasicSubscription,
  PremiumSubscription,
  StandardSubscription,
  Subscription,
} from "@models/abstract/Subscription";
import { NetflixUser } from "@models/inheritance/NetflixUser";

export default function UserScreen() {
  const [dataUser, setDataUser] = useAtom(NetflixUserAtom);
  const [currentPlan, setCurrentPlan] = React.useState<string>("None");
  const [currentDuration, setCurrentDuration] = React.useState<string>("None");
  const user = new NetflixUser(
    dataUser.username,
    dataUser.email,
    dataUser.password
  );
  const basicPlan = new BasicSubscription();
  const standardPlan = new StandardSubscription();
  const premiumPlan = new PremiumSubscription();

  React.useEffect(() => {
    if (dataUser.subscription !== null) {
      setCurrentPlan(dataUser.subscription.getName());
      setCurrentDuration(dataUser.subscription.getDuration());
    }
  }, [dataUser]);

  const subHandle = (subs: Subscription) => {
    Alert.alert(
      "Confirmation",
      `Are you sure you want to subscribe to ${subs.getName()}?`,
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            if (dataUser.subscription === null) {
              user.subscribe(subs);
              setDataUser({
                ...dataUser,
                subscription: user.getSubscription(),
              });
            } else {
              alert("You already have a subscription.");
            }
          },
        },
      ]
    );
  };

  const unsubHandle = () => {
    Alert.alert("Confirmation", `Are you sure you want to unsubscribe?`, [
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => {
          if (dataUser.subscription !== null) {
            user.unsubscribe();
            setDataUser({
              ...dataUser,
              subscription: null,
            });

            setCurrentPlan("None");
            setCurrentDuration("None");
          } else {
            alert("You don't have a subscription.");
          }
        },
      },
    ]);
  };

  const logoutHandle = () => {
    Alert.alert("Confirmation", `Are you sure you want to logout?`, [
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => {
          setDataUser({
            ...dataUser,
            loggedIn: false,
          });
          user.logout();
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.subscriptionSection}>
        <Text style={{ fontWeight: "bold" }}>Subscribe Plan</Text>
        <Text>Current Plan: {currentPlan}</Text>
        <Text>Duration: {currentDuration}</Text>
        <View style={styles.subButtonSection}>
          <Pressable
            onPress={() => subHandle(basicPlan)}
            style={styles.subButton}
            android_ripple={{
              color: "gray",
            }}
          >
            <Text
              style={styles.textButton}
            >{`Basic Plan - $ ${basicPlan.getPrice()}`}</Text>
          </Pressable>
          <Pressable
            onPress={() => subHandle(standardPlan)}
            style={styles.subButton}
            android_ripple={{
              color: "gray",
            }}
          >
            <Text
              style={styles.textButton}
            >{`Standard Plan - $ ${standardPlan.getPrice()}`}</Text>
          </Pressable>
          <Pressable
            onPress={() => subHandle(premiumPlan)}
            style={styles.subButton}
            android_ripple={{
              color: "gray",
            }}
          >
            <Text
              style={styles.textButton}
            >{`Premium Plan - $ ${premiumPlan.getPrice()}`}</Text>
          </Pressable>
          <Pressable
            onPress={() => unsubHandle()}
            style={styles.subButton}
            android_ripple={{
              color: "gray",
            }}
          >
            <Text style={styles.textButton}>Unsubscribe</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.logoutSection}>
        <Button title="Logout" onPress={() => logoutHandle()} color="#221F1F" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#000000",
  },
  subscriptionSection: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 20,
  },
  subButtonSection: {},
  subButton: {
    backgroundColor: "#221F1F",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  textButton: {
    color: "#ffffff",
    textAlign: "center",
  },
  logoutSection: {
    marginTop: 20,
  },
});
