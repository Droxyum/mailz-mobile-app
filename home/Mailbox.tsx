import React from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableHighlight,
  View,
} from "react-native";
import MailCard from "./components/MailCard";

const mailList = [
  {
    picture: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    from: "John",
    subject: "Contrary to popular belief",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical ...",
  },
  {
    picture: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    from: "John",
    subject: "Contrary to popular belief",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical ...",
  },
  {
    picture: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    from: "John",
    subject: "Contrary to popular belief",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical ...",
  },
  {
    picture: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    from: "John",
    subject: "Contrary to popular belief",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical ...",
  },
  {
    picture: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    from: "John",
    subject: "Contrary to popular belief",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical ...",
  },
  {
    picture: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    from: "John",
    subject: "Contrary to popular belief",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical ...",
  },
  {
    picture: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    from: "John",
    subject: "Contrary to popular belief",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical ...",
  },
  {
    picture: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    from: "John",
    subject: "Contrary to popular belief",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical ...",
  },
  {
    picture: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    from: "John",
    subject: "Contrary to popular belief",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical ...",
  },
  {
    picture: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    from: "John",
    subject: "Contrary to popular belief",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical ...",
  },
].map((el, i) => ({
  ...el,
  id: i.toString(),
  from: el.from + " " + i.toString(),
}));

export default function Mailbox() {
  const onMailClick = (mail) => {
    alert("Mail from " + mail.from + " clicked");
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={mailList}
        renderItem={({ item }) => (
          <MailCard {...item} onPress={() => onMailClick(item)} />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
