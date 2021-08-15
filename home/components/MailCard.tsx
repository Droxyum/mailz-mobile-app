import React from "react";
import { View, Image, Text, TouchableHighlight } from "react-native";

export default function MailCard(props) {
  return (
    <TouchableHighlight
      activeOpacity={0.5}
      underlayColor="#FFFFFF"
      style={{
        margin: 15,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        shadowColor: "#171717",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 10,
      }}
      onPress={() => props.onPress && props.onPress()}
    >
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 40, height: 40, borderRadius: 50 }}
            source={{
              uri: props.picture || "",
            }}
          />
          <Text style={{ marginLeft: 20, fontSize: 18, fontWeight: "600" }}>
            {props.from || ""}
          </Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 15, fontWeight: "600" }}>
            {props.subject}
          </Text>
          <Text style={{ marginTop: 5, fontSize: 15, fontStyle: "italic" }}>
            {props.content || ""}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}
