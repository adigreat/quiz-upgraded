import React from "react";
import { ScrollView, StatusBar } from "react-native";

import spaceQuestions from "../questions/HTML";
import westernsQuestions from "../questions/react";
import computerQuestions from "../questions/code.org";

import { RowItem } from "../components/RowItem";

export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="HTML"
      color="#36b1f0"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "HTML",
          questions: spaceQuestions,
          color: "#36b1f0"
        })
      }
    />
    <RowItem
      name="react"
      color="#799496"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "react",
          questions: westernsQuestions,
          color: "#799496"
        })
      }
    />
    <RowItem
      name="code.org"
      color="#49475B"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "code.orgm",
          questions: computerQuestions,
          color: "#49475B"
        })
      }
    />
  </ScrollView>
);
