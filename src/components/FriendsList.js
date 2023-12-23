import Friend from "./Friend";

function FriendsList({ friends, selectedFriend, onSelect }) {
  // const friends = initialFriends;
  return (
    <>
      <ul>
        {friends.map((friend) => (
          <Friend
            friend={friend}
            key={friend.id}
            selectedFriend={selectedFriend}
            onSelect={onSelect}
          />
        ))}
      </ul>
    </>
  );
}

export default FriendsList;
