import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <View style={{ marginHorizontal: 10, marginTop: 10 }}>
        <PostFooter />
        <Likes post={post} />
        <Caption post={post} />
        <CommentSection post={post} />
        <Comments post={post} />
      </View>
    </View>
  );
};

const PostHeader = ({ post }) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 5,
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={{ uri: post.profile_picture }} style={styles.story} />
          <Text style={{ color: "black", marginLeft: 5, fontWeight: "700" }}>
            {post.user}
          </Text>
        </View>
        <Text style={{ fontWeight: "900" }}>...</Text>
      </View>
      <View style={{ width: "100%", height: 450 }}>
        <Image
          source={{ uri: post.imageUrl }}
          style={{ height: "100%", resizeMode: "cover" }}
        />
      </View>
    </View>
  );
};

const postFooterIcon = [
  {
    name: "Like",
    imageUrl: "https://img.icons8.com/?size=512&id=86721&format=png",
    likeImageUrl: "https://img.icons8.com/?size=512&id=Mjt9Tkm04cgv&format=png",
  },
  {
    name: "Comment",
    imageUrl: "https://img.icons8.com/?size=512&id=93386&format=png",
  },
  {
    name: "Share",
    imageUrl: "https://img.icons8.com/?size=512&id=yXLO0XxrYU1U&format=png",
  },
  {
    name: "Save",
    imageUrl: "https://img.icons8.com/?size=512&id=82461&format=png",
    saveImageUrl: "https://img.icons8.com/?size=512&id=26089&format=png",
  },
];

const PostFooter = () => (
  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
    <View style={styles.leftFooterIconsContainer}>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcon[0].imageUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcon[1].imageUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcon[2].imageUrl} />
    </View>

    <View>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcon[3].imageUrl} />
    </View>
  </View>
);

const Icon = ({ imgStyle, imgUrl }) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{ uri: imgUrl }} />
  </TouchableOpacity>
);

const Likes = ({ post }) => (
  <View style={{ flexDirection: "row", marginTop: 4 }}>
    <Text style={{ fontWeight: "600" }}>
      {" "}
      {post.likes.toLocaleString("en")} likes{" "}
    </Text>
  </View>
);
const Caption = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    <Text>
      <Text style={{ fontWeight: "600" }}>{post.user}</Text>
      <Text> {post.caption}</Text>
    </Text>
  </View>
);
const CommentSection = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    {!!post.comments.length && (
      <Text style={{ color: "grey" }}>
        View{post.comments.length > 1 ? " all " : " "} {post.comments.length}{" "}
        {post.comments.length > 1 ? "comments" : "comment"}
      </Text>
    )}
  </View>
);
const Comments = ({ post }) => (
  <>
    {post.comments.map((comment, index) => (
      <View key={index} style={{flexDirection: 'row', marginTop:5}}>
        <Text>
          <Text style={{ fontWeight: "600" }}>{comment.user}</Text>
          {" "}{comment.comment}
        </Text>
      </View>
    ))}
  </>
);

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    borderWidth: 1.6,
    marginLeft: 6,
    borderColor: "#ff8501",
  },
  footerIcon: {
    width: 33,
    height: 33,
  },
  leftFooterIconsContainer: {
    flexDirection: "row",
    width: "32%",
    justifyContent: "space-between",
  },
});

export default Post;
