import { useState } from "react";

export default function NumberPicker(): JSX.Element {
  const [emojiValueFromCurrentRender, queueRerenderWithNewEmojiValue] =
    useState("");
  const [favouriteEmojiFromCurrentRender, queueRerenderWithNewFavouriteEmoji] =
    useState<string[]>([]);

  const handleAddClockEmoji = () => {
    queueRerenderWithNewEmojiValue("⏰");
    // queueRerenderWithNewFavouriteEmoji(emojiValueFromCurrentRender);
  };

  const handleAddBedEmoji = () => {
    queueRerenderWithNewEmojiValue("🛌");
    // queueRerenderWithNewFavouriteEmoji(emojiValueFromCurrentRender);
  };

  const handleAddPanEmoji = () => {
    queueRerenderWithNewEmojiValue("🍳");
    // queueRerenderWithNewFavouriteEmoji(emojiValueFromCurrentRender);
  };

  const handleAddCutleryEmoji = () => {
    queueRerenderWithNewEmojiValue("🍽️");
    // queueRerenderWithNewFavouriteEmoji(emojiValueFromCurrentRender);
  };

  const handleAddLickingEmoji = () => {
    queueRerenderWithNewEmojiValue("😋");
    // queueRerenderWithNewFavouriteEmoji(emojiValueFromCurrentRender);
  };

  const handleStoredEmoji = () => {
    queueRerenderWithNewFavouriteEmoji([
      ...favouriteEmojiFromCurrentRender,
      emojiValueFromCurrentRender,
    ]);
  };

  // const listOfEmojis: JSX.Element[] = storedFavouriteValueFromCurrentRender.map(emojiselected =>(<><li key={emojiselected}</li></>))

  return (
    <>
      <h1>Number picker</h1>
      <p>
        Your stored Emoji:
        {/* {emojiValueFromCurrentRender} */}
        {favouriteEmojiFromCurrentRender
          .map((emoji) => (
            <>
              <li key={emoji}>{emoji}</li>
            </>
          ))
          .reverse()
          .slice(0, 5)}
      </p>
      <p>Emoji: {emojiValueFromCurrentRender}</p>
      <button onClick={handleAddClockEmoji}>⏰</button>
      <button onClick={handleAddBedEmoji}>🛌</button>
      <button onClick={handleAddPanEmoji}>🍳</button>
      <button onClick={handleAddCutleryEmoji}>🍽️</button>
      <button onClick={handleAddLickingEmoji}>😋</button>
      <hr />
      <button onClick={handleStoredEmoji}>add</button>
    </>
  );
}
