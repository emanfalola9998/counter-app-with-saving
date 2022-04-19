import { useState } from "react";

export default function NumberPicker(): JSX.Element {
  const [emojiValueFromCurrentRender, queueRerenderWithNewEmojiValue] =
    useState("");
  const [favouriteEmojiFromCurrentRender, queueRerenderWithNewFavouriteEmoji] =
    useState("");

  const handleAddClockEmoji = () => {
    queueRerenderWithNewEmojiValue("⏰");
    queueRerenderWithNewFavouriteEmoji(emojiValueFromCurrentRender);
  };

  const handleAddBedEmoji = () => {
    queueRerenderWithNewEmojiValue("🛌");
    queueRerenderWithNewFavouriteEmoji(emojiValueFromCurrentRender);
  };

  const handleAddPanEmoji = () => {
    queueRerenderWithNewEmojiValue("🍳");
    queueRerenderWithNewFavouriteEmoji(emojiValueFromCurrentRender);
  };

  const handleAddCutleryEmoji = () => {
    queueRerenderWithNewEmojiValue("🍽️");
    queueRerenderWithNewFavouriteEmoji(emojiValueFromCurrentRender);
  };

  const handleAddLickingEmoji = () => {
    queueRerenderWithNewEmojiValue("😋");
    queueRerenderWithNewFavouriteEmoji(emojiValueFromCurrentRender);
  };

  return (
    <>
      <h1>Number picker</h1>
      <p>
        Your stored Emoji: {emojiValueFromCurrentRender}
        {favouriteEmojiFromCurrentRender}
      </p>
      <p>Emoji: {emojiValueFromCurrentRender}</p>
      <button onClick={handleAddClockEmoji}>⏰</button>
      <button onClick={handleAddBedEmoji}>🛌</button>
      <button onClick={handleAddPanEmoji}>🍳</button>
      <button onClick={handleAddCutleryEmoji}>🍽️</button>
      <button onClick={handleAddLickingEmoji}>😋</button>
      <hr />
    </>
  );
}
